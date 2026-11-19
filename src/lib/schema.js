// import { SITE } from '../data/site';
// const a = SITE.address;
// export const localBusiness = () => ({
//   '@context': 'https://schema.org',
//   '@type': 'ComputerStore',
//   '@id': `${SITE.url}/#business`,
//   name: SITE.name,
//   slogan: SITE.slogan,
//   url: SITE.url,
//   email: SITE.email,
//   telephone: SITE.phones.map((p) => p.tel),
//   address: { '@type': 'PostalAddress', streetAddress: a.line1, addressLocality: 'Mile 12, Kosofe', addressRegion: a.region, addressCountry: a.countryCode },
//   areaServed: ['Mile 12', 'Kosofe', 'Lagos'],
//   // Opening hours, geo coordinates, ratings and reviews are deliberately omitted until verified.
// });
// export const website = () => ({ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url });
// export const breadcrumbs = (trail) => ({
//   '@context': 'https://schema.org', '@type': 'BreadcrumbList',
//   itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: SITE.url + t.path })),
// });
// export const service = (name, description, path) => ({
//   '@context': 'https://schema.org', '@type': 'Service', name, description, url: SITE.url + path,
//   provider: { '@id': `${SITE.url}/#business` }, areaServed: 'Lagos, Nigeria',
// });
// export const faq = (qa) => ({
//   '@context': 'https://schema.org', '@type': 'FAQPage',
//   mainEntity: qa.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } })),
// });


import { SITE } from '../data/site.js';

const a = SITE.address;


// 1. BUSINESS STRUCTURED DATA
export const localBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': 'ComputerStore',
  '@id': `${SITE.url}/#business`,

  name: SITE.name,
  slogan: SITE.slogan,
  url: SITE.url,
  email: SITE.email,

  telephone: SITE.phones.map((p) => p.tel),

  // Physical business location
  address: {
    '@type': 'PostalAddress',
    streetAddress: a.line1,
    addressLocality: 'Mile 12, Kosofe',
    addressRegion: a.region,
    addressCountry: a.countryCode
  },

  // Official business opening hours
  // Monday to Sunday, 8:00 AM to 6:00 PM
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'https://schema.org/Monday',
        'https://schema.org/Tuesday',
        'https://schema.org/Wednesday',
        'https://schema.org/Thursday',
        'https://schema.org/Friday',
        'https://schema.org/Saturday',
        'https://schema.org/Sunday'
      ],
      opens: '08:00',
      closes: '18:00'
    }
  ],

  // Areas served by SoTech IT Solutions.
  // These do not represent additional physical offices.
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Lagos State, Nigeria'
    },
    {
      '@type': 'Country',
      name: 'Nigeria'
    }
  ],

  // Business services and areas of expertise
  knowsAbout: [
    'IT solutions and support',
    'Laptop repair and maintenance',
    'Desktop computer repair',
    'Phone repair',
    'Laptop sales',
    'Computer accessories',
    'New and UK-used computers',
    'CCTV installation and maintenance',
    'Windows installation',
    'Software installation',
    'Website design and development',
    'Domain registration and web hosting',
    'Business email solutions',
    'Digital skills training',
    'Computer literacy training',
    'Coding classes for children'
  ],

  // Official social media profiles
  sameAs: [
    'https://www.facebook.com/share/1ECmfU5cbs/?mibextid=wwXIfr',
    'https://www.linkedin.com/company/sotech-it-solutions/',
    'https://www.instagram.com/sotech_it_solutions',
    'https://www.tiktok.com/@sotech50'
  ]

  // Geo coordinates, ratings and reviews are omitted
  // until their details have been verified.
});


// 2. WEBSITE STRUCTURED DATA
export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url
});


// 3. BREADCRUMB STRUCTURED DATA
export const breadcrumbs = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',

  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: SITE.url + t.path
  }))
});


// 4. INDIVIDUAL SERVICE STRUCTURED DATA
export const service = (name, description, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',

  name,
  description,
  url: SITE.url + path,

  // Connect each service to SoTech IT Solutions
  provider: {
    '@id': `${SITE.url}/#business`
  },

  // Service coverage across Lagos and Nigeria
  areaServed: [
    {
      '@type': 'AdministrativeArea',
      name: 'Lagos State, Nigeria'
    },
    {
      '@type': 'Country',
      name: 'Nigeria'
    }
  ]
});


// 5. FAQ STRUCTURED DATA
export const faq = (qa) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: qa.map(([q, ans]) => ({
    '@type': 'Question',
    name: q,

    acceptedAnswer: {
      '@type': 'Answer',
      text: ans
    }
  }))
});
