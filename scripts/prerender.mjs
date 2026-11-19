// Run AFTER `vite build`. Writes a real HTML file for every route (dist/<route>/index.html) with the correct
// title, description, canonical, Open Graph, JSON-LD and readable page text, so Google, Bing and AI crawlers
// (many of which do not run JavaScript) can read each page. React then takes over in the browser as usual.
// Keep titles/descriptions here in step with the <Seo> props in each page component.
import fs from 'node:fs'; import path from 'node:path';
import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES, DIGITAL, ACADEMY } from '../src/data/catalog.js';
import { SEO_CONTENT } from '../src/data/seoContent.js';
import { SITE, addressText } from '../src/data/site.js';
import { localBusiness, website, breadcrumbs, service, faq } from '../src/lib/schema.js';

const DIST = 'dist';
const OG = process.env.OG_IMAGE || '';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tpl = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

const HOME_FAQ = [
  ['Do you sell new and UK-used laptops and phones?', 'Yes. We sell brand-new and quality UK-used laptops and phones, along with accessories and spare parts.'],
  ['Where is your store?', addressText() + '.'],
  ['Do you repair laptops, desktops and phones?', 'Yes. We handle diagnosis, screen, battery and keyboard replacement, upgrades, maintenance and software problems.'],
  ['Do you install CCTV cameras?', 'Yes. We supply Ultra HD CCTV cameras and accessories, and provide installation and configuration.'],
  ['Can you build a website or set up business email for me?', 'Yes. We design and maintain websites, register domains and set up professional business email.'],
  ['What ages does the Coding & Design Academy cover?', 'Children aged 6 to 16.'],
  ['Do you serve customers outside Mile 12?', 'Our store is in Mile 12, Kosofe. Customers from Ketu, Ikorodu, Ikeja and other parts of Lagos are welcome. Call or WhatsApp first to confirm availability.'],
];

const pages = [];
const add = (p) => pages.push(p);
add({ path: '/', title: 'SoTech IT Solutions | Computer, Laptop & Phone Shop in Mile 12, Lagos',
  desc: "Laptops, phones, accessories, repairs, CCTV, websites and kids' coding classes. SoTech IT Solutions, Adedoyin Complex, Mile 12, Kosofe, Lagos.",
  h1: 'Everything Technology. All Under One Roof.', lead: SITE.slogan,
  body: 'We sell new and quality UK-used laptops and phones, accessories, cables, storage and security equipment. We repair and maintain computers and phones, install software and CCTV, build websites and teach children to code.',
  links: [['/products', 'Products'], ['/services', 'Services'], ['/web-digital-solutions', 'Web & Digital Solutions'], ['/coding-academy', 'Coding Academy'], ['/store', 'Our Store']],
  faqs: HOME_FAQ, ld: [localBusiness(), website(), faq(HOME_FAQ)] });
add({ path: '/products', title: 'IT Products, Laptops, Phones & Accessories in Lagos | SoTech IT Solutions',
  desc: 'Laptops, phones, computer accessories, cables, storage, power products and CCTV equipment at SoTech IT Solutions, Mile 12, Kosofe, Lagos.',
  h1: 'Products', lead: 'New and quality UK-used laptops and phones, plus accessories, cables, storage, power products and security equipment.',
  links: PRODUCT_CATEGORIES.map((c) => [`/products/${c.slug}`, c.name]) });
add({ path: '/services', title: 'Computer, Laptop & Phone Repairs and IT Services in Lagos | SoTech IT Solutions',
  desc: 'Laptop and phone repairs, Windows and Office installation, hardware upgrades and CCTV installation in Mile 12, Kosofe and Lagos.',
  h1: 'Technology Services', lead: 'Repairs, installations, upgrades and support from one trusted team.',
  links: SERVICE_CATEGORIES.map((c) => [`/services/${c.slug}`, c.name]) });
PRODUCT_CATEGORIES.forEach((c) => add({ path: `/products/${c.slug}`, title: `${c.seo.title} | SoTech IT Solutions`, desc: c.seo.desc, h1: c.name, lead: c.intro,
  items: c.items, body: SEO_CONTENT[c.slug]?.about, faqs: SEO_CONTENT[c.slug]?.faqs, crumbs: [['Products', '/products']] }));
SERVICE_CATEGORIES.forEach((c) => add({ path: `/services/${c.slug}`, title: `${c.seo.title} | SoTech IT Solutions`, desc: c.seo.desc, h1: c.name, lead: c.intro,
  items: c.items, body: SEO_CONTENT[c.slug]?.about, faqs: SEO_CONTENT[c.slug]?.faqs, crumbs: [['Services', '/services']], svc: true }));
add({ path: '/web-digital-solutions', title: 'Website Development & Digital Solutions in Lagos | SoTech IT Solutions',
  desc: 'Website design, development and maintenance, domain registration, business email setup and email marketing for businesses in Lagos and across Nigeria.',
  h1: 'Web & Digital Solutions', lead: DIGITAL.intro, items: DIGITAL.items, svc: true });
add({ path: '/coding-academy', title: 'Coding Classes for Children in Lagos (Ages 6–16) | SoTech Coding Academy',
  desc: 'Coding, computer literacy, web development basics and creative design classes for children aged 6–16 at SoTech IT Solutions, Mile 12, Lagos.',
  h1: 'Coding & Design Academy', lead: ACADEMY.intro, items: ACADEMY.items, svc: true });
add({ path: '/store', title: 'Computer & Laptop Shop in Mile 12, Lagos | SoTech IT Solutions Store',
  desc: 'Visit SoTech IT Solutions at Adedoyin Complex, 12 Adedoyin Street, Mile 12, Kosofe, Lagos for laptops, phones, accessories, CCTV equipment and repairs.',
  h1: 'Visit Our Store in Mile 12', lead: 'See laptops, phones, accessories and security equipment in person.', ld: [localBusiness()],
  body: `Address: ${addressText()}. Customers from Ketu, Ikorodu, Ikeja and other parts of Lagos are welcome. Please call or message us to confirm availability before you travel.` });
add({ path: '/contact', title: 'Contact SoTech IT Solutions | Mile 12, Lagos', desc: 'Call, WhatsApp, email or visit SoTech IT Solutions in Mile 12, Kosofe, Lagos for product, repair, CCTV, web and Coding Academy enquiries.', h1: 'Contact Us', lead: 'Ask about a product, repair, installation, website or class.' });
add({ path: '/book-service', title: 'Book a Repair or Service | SoTech IT Solutions, Mile 12, Lagos', desc: 'Book a laptop, phone or computer repair, installation or other service with SoTech IT Solutions in Mile 12, Kosofe, Lagos.', h1: 'Book a Service', lead: 'Tell us what you need and we will get back to you.' });
add({ path: '/AboutUs', title: 'About SoTech IT Solutions | IT Products, Repairs & Digital Solutions in Lagos', desc: 'SoTech IT Solutions bridges technology and business efficiency with IT products, repairs, AI automation, software and digital solutions in Lagos.', h1: 'About SoTech IT Solutions', lead: SITE.slogan });
add({ path: '/about-detail', title: 'Our Story | SoTech IT Solutions', desc: 'Learn how SoTech IT Solutions delivers hardware, software and automation services in Lagos.', h1: 'Our Story', lead: SITE.slogan });
add({ path: '/case-studies', title: 'Case Studies | SoTech IT Solutions', desc: 'Examples of IT, automation and security work by SoTech IT Solutions.', h1: 'Case Studies' });
add({ path: '/privacy', title: 'Privacy Policy | SoTech IT Solutions', desc: 'How SoTech IT Solutions collects and uses personal information.', h1: 'Privacy Policy' });

const head = (p, { noindex = false } = {}) => {
  const url = SITE.url + (p.path === '/' ? '/' : p.path);
  const crumbs = p.path === '/' ? [] : [{ name: 'Home', path: '/' }, ...(p.crumbs || []).map(([name, pth]) => ({ name, path: pth })), { name: p.h1, path: p.path }];
  const ld = [...(p.ld || []), ...(crumbs.length ? [breadcrumbs(crumbs)] : []), ...(p.svc ? [service(p.h1, p.desc, p.path)] : []),
    ...(p.faqs && !p.ld ? [faq(p.faqs)] : [])];
  return [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.desc)}" />`,
    `<meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`, `<meta property="og:description" content="${esc(p.desc)}" />`,
    `<meta property="og:type" content="website" />`, `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`, `<meta property="og:locale" content="en_NG" />`,
    `<meta name="twitter:card" content="${OG ? 'summary_large_image' : 'summary'}" />`,
    ...(OG ? [`<meta property="og:image" content="${esc(OG)}" />`, `<meta name="twitter:image" content="${esc(OG)}" />`] : []),
    ...ld.map((o) => `<script type="application/ld+json" data-seo="1">${JSON.stringify(o)}</script>`),
  ].join('\n    ');
};

const bodyHtml = (p) => [
  `<main><h1>${esc(p.h1)}</h1>`, p.lead ? `<p>${esc(p.lead)}</p>` : '', p.body ? `<p>${esc(p.body)}</p>` : '',
  p.items ? `<ul>${p.items.map((i) => `<li><strong>${esc(i.name)}</strong>: ${esc(i.desc)}</li>`).join('')}</ul>` : '',
  p.links ? `<ul>${p.links.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul>` : '',
  p.faqs ? `<h2>Frequently asked questions</h2>${p.faqs.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}` : '',
  `<p>${esc(SITE.name)}, ${esc(addressText())}. Phone: ${SITE.phones.map((x) => esc(x.display)).join(', ')}. Email: ${esc(SITE.email)}.</p></main>`,
].join('');

const render = (p, opts) => {
  let html = tpl
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>\s*/i, '');
  html = html.replace('</head>', `    ${head(p, opts)}\n  </head>`);
  return html.replace(/<div id="root"><\/div>/, `<div id="root">${bodyHtml(p)}</div>`);
};

let n = 0;
for (const p of pages) {
  const dir = p.path === '/' ? DIST : path.join(DIST, p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(p)); n++;
}
// Legacy URL: crawlers get a redirect hint, visitors get redirected by the app.
fs.mkdirSync(path.join(DIST, 'Service'), { recursive: true });
fs.writeFileSync(path.join(DIST, 'Service', 'index.html'), render({ path: '/services', title: 'Services | SoTech IT Solutions', desc: 'SoTech IT Solutions services.', h1: 'Services' }).replace('</head>', '<meta http-equiv="refresh" content="0; url=/services" />\n  </head>'));
// 404 page (noindex). Hosts that support 404.html serve it with a real 404 status.
fs.writeFileSync(path.join(DIST, '404.html'), render({ path: '/404', title: 'Page not found | SoTech IT Solutions', desc: 'This page could not be found.', h1: 'Page not found', lead: 'Go to the homepage.' }, { noindex: true }));
console.log(`prerendered ${n} pages + /Service redirect + 404.html`);
