import fs from 'node:fs';
import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES } from '../src/data/catalog.js';
const base = 'https://www.sotechitsolutions.com.ng';
const paths = ['/', '/AboutUs', '/products', '/services', '/web-digital-solutions', '/coding-academy', '/store', '/contact', '/privacy',
  ...PRODUCT_CATEGORIES.map((c) => `/products/${c.slug}`), ...SERVICE_CATEGORIES.map((c) => `/services/${c.slug}`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync('public/sitemap.xml', xml); console.log(`sitemap.xml: ${paths.length} URLs`);
