import { SITE } from '../data/site';
const a = SITE.address;
export const localBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': 'ComputerStore',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  slogan: SITE.slogan,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phones.map((p) => p.tel),
  address: { '@type': 'PostalAddress', streetAddress: a.line1, addressLocality: 'Mile 12, Kosofe', addressRegion: a.region, addressCountry: a.countryCode },
  areaServed: ['Mile 12', 'Kosofe', 'Lagos'],
  // Opening hours, geo coordinates, ratings and reviews are deliberately omitted until verified.
});
export const website = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url });
export const breadcrumbs = (trail) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: SITE.url + t.path })),
});
export const service = (name, description, path) => ({
  '@context': 'https://schema.org', '@type': 'Service', name, description, url: SITE.url + path,
  provider: { '@id': `${SITE.url}/#business` }, areaServed: 'Lagos, Nigeria',
});
export const faq = (qa) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: qa.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } })),
});
