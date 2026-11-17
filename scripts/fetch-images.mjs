// Downloads and optimises images listed in scripts/image-sources.csv into assets/images/<key>.
// Only rows with a download_url, a license, and verified_matches_product=yes are processed,
// so nothing is fetched until a human (or you) has checked the photo shows the right product and the licence allows use.
// Needs network access: npm i -D sharp
import fs from 'node:fs'; import path from 'node:path'; import sharp from 'sharp';
const rows = fs.readFileSync('scripts/image-sources.csv', 'utf8').trim().split('\n').slice(1).map((l) => l.split(','));
const out = []; let ok = 0, skipped = 0, failed = 0;
for (const [key, url, page, license, attribution, verified] of rows) {
  if (!url || !license || verified?.trim() !== 'yes') { skipped++; continue; }
  try {
    const res = await fetch(url); if (!res.ok) throw new Error(res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    const dest = path.join('assets/images', key); fs.mkdirSync(path.dirname(dest), { recursive: true });
    await sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(dest);
    out.push({ key, source: page, license, attribution }); ok++;
  } catch (e) { console.error('FAILED', key, e.message); failed++; }
}
fs.writeFileSync('assets/images/licenses.json', JSON.stringify(out, null, 2));
console.log({ downloaded: ok, skipped, failed });
