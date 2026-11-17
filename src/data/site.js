// Single source of truth for business details (used by SEO, footer, contact, schema).
export const SITE = {
  name: 'SoTech IT Solutions',
  slogan: 'One Trusted Partner. Multiple Technology Solutions.',
  url: 'https://www.sotechitsolutions.com.ng',
  email: 'sotechitsolutions@gmail.com',
  phones: [
    { display: '0701 746 6460', tel: '+2347017466460' },
    { display: '0810 859 4858', tel: '+2348108594858' },
  ],
  // The WhatsApp number already used in the existing site footer.
  whatsapp: '2348108594858',
  social: { handle: '@sotech_it_solutions' },
  address: {
    line1: 'Adedoyin Complex, 12 Adedoyin Street',
    area: 'Mile 12, Kosofe',
    region: 'Lagos State',
    country: 'Nigeria',
    countryCode: 'NG',
  },
};
export const addressText = () =>
  `${SITE.address.line1}, ${SITE.address.area}, ${SITE.address.region}, ${SITE.address.country}`;
export const mapsUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText())}`;
export const waLink = (text = 'Hi SoTech, I have an enquiry.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
