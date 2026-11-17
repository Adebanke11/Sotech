// Uploads assets/images/** to Cloudflare R2 (S3-compatible API), skips unchanged files (sha256),
// verifies each delivery URL over HTTP, and writes public/image-manifest.json.
// Secrets come from environment variables only (see .env.example). Never commit them.
// npm i -D @aws-sdk/client-s3
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET, IMAGE_BASE_URL } = process.env;
for (const [k, v] of Object.entries({ R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET, IMAGE_BASE_URL })) {
  if (!v) { console.error(`Missing environment variable ${k}. See .env.example.`); process.exit(1); }
}
const s3 = new S3Client({ region: 'auto', endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId: R2_ACCESS_KEY_ID, secretAccessKey: R2_SECRET_ACCESS_KEY } });
const ROOT = 'assets/images', MANIFEST = 'public/image-manifest.json';
const TYPES = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif' };
const prev = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, 'utf8')) : {};
const licenses = fs.existsSync(`${ROOT}/licenses.json`) ? Object.fromEntries(JSON.parse(fs.readFileSync(`${ROOT}/licenses.json`, 'utf8')).map((r) => [r.key, r])) : {};
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const manifest = { ...prev }; const stats = { uploaded: 0, unchanged: 0, rejected: 0, failed: 0, verified: 0, notVerified: 0 };

for (const file of walk(ROOT)) {
  const ext = path.extname(file).toLowerCase(); const key = path.relative(ROOT, file).split(path.sep).join('/');
  if (!TYPES[ext]) { if (!file.endsWith('licenses.json')) { console.warn('Rejected (type):', key); stats.rejected++; } continue; }
  const buf = fs.readFileSync(file); const sha = crypto.createHash('sha256').update(buf).digest('hex');
  try {
    if (prev[key]?.sha256 === sha) { stats.unchanged++; }
    else {
      await s3.send(new PutObjectCommand({ Bucket: R2_BUCKET, Key: key, Body: buf, ContentType: TYPES[ext], CacheControl: 'public, max-age=31536000, immutable' }));
      await s3.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key })); // confirm it exists
      stats.uploaded++;
    }
    const url = `${IMAGE_BASE_URL.replace(/\/$/, '')}/${key}`;
    const res = await fetch(url, { method: 'HEAD' }).catch(() => null);
    const ok = !!res?.ok; ok ? stats.verified++ : stats.notVerified++;
    manifest[key] = { key, url, sha256: sha, bytes: buf.length, verified: ok, ...(licenses[key] ? { source: licenses[key].source, license: licenses[key].license } : prev[key] || {}) };
  } catch (e) { console.error('FAILED', key, e.message); stats.failed++; }
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(stats, '\nverified=false means the public URL did not answer yet: check the custom domain setup in README-CLOUDFLARE.md');
