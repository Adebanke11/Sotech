// import Hero from './Hero';
// import Services from './Services';
// import ExpertiseSection from './ExpertiseSection';
// import Testimonials from './Testimonials';

// function Theapp() {
//   return (
//     <div className='home-content'>
//        <Hero />
//        <Services />
//        <ExpertiseSection />
//        <Testimonials />
//     </div>
//   );
// }

// export default Theapp;

import { Link } from 'react-router-dom';
import Hero from './Hero';
import Seo from './components/Seo';
import CategoryCarousel from './components/CategoryCarousel';
import ResponsiveImage from './components/ResponsiveImage';
import EnquiryButtons from './components/EnquiryButtons';
import Faq from './components/Faq';
import { localBusiness, website, faq } from './lib/schema';
import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES, productItems, serviceItems, digitalItems, academyItems, DIGITAL, ACADEMY } from './data/catalog';
import { SITE, mapsUrl } from './data/site';

const FAQ = [
  ['Do you sell new and UK-used laptops and phones?', 'Yes. We sell brand-new and quality UK-used laptops and phones, along with accessories and spare parts.'],
  ['Where is your store?', 'Adedoyin Complex, 12 Adedoyin Street, Mile 12, Kosofe, Lagos State, Nigeria.'],
  ['Do you repair laptops, desktops and phones?', 'Yes. We handle diagnosis, screen, battery and keyboard replacement, upgrades, maintenance and software problems.'],
  ['Do you install CCTV cameras?', 'Yes. We supply Ultra HD CCTV cameras and accessories, and provide installation and configuration.'],
  ['Can you build a website or set up business email for me?', 'Yes. We design and maintain websites, register domains and set up professional business email.'],
  ['What ages does the Coding & Design Academy cover?', 'Children aged 6 to 16.'],
];
const byFolder = (slug) => PRODUCT_CATEGORIES.find((c) => c.slug === slug);

const DIVISIONS = [
  ['Products & Accessories', 'Laptops, phones, accessories, cables, storage and power.', '/products'],
  ['Repairs & Maintenance', 'Laptops, desktops and phones fixed and kept running.', '/services'],
  ['Software & OS Installation', 'Windows, Office, drivers and applications.', '/services/software-os-installation'],
  ['CCTV & Security', 'Ultra HD cameras, systems and installation.', '/services/cctv-installation'],
  ['Web & Digital Solutions', 'Websites, domains, business email and email marketing.', '/web-digital-solutions'],
  ['Coding & Design Academy', 'Technology classes for children aged 6–16.', '/coding-academy'],
];

function Theapp() {
  return (
    <div className="home-content">
      <Seo title="SoTech IT Solutions | Computer, Laptop & Phone Shop in Mile 12, Lagos" path="/"
        description="Laptops, phones, accessories, repairs, CCTV, websites and kids' coding classes. SoTech IT Solutions, Adedoyin Complex, Mile 12, Kosofe, Lagos."
        jsonLd={[localBusiness(), website(), faq(FAQ)]} />
      <Hero />

      <section className="st-section" aria-labelledby="intro-h"><div className="st-wrap st-narrow">
        <h2 id="intro-h">A complete technology company, not just a repair shop</h2>
        <p>We sell new and quality UK-used laptops and phones, accessories, cables, storage and security equipment. We repair and maintain computers and phones, install software and CCTV, build websites and teach children to code.</p>
      </div></section>

      <section className="st-section st-alt" aria-labelledby="div-h"><div className="st-wrap">
        <h2 id="div-h" style={{textAlign:'center'}}> Everything We Do</h2>
        <ul className="st-divisions">
          {DIVISIONS.map(([t, d, to]) => (
            <li key={t}><Link to={to}><h3>{t}</h3><p>{d}</p></Link></li>
          ))}
        </ul>
      </div></section>

      <CategoryCarousel title="Laptops & Computers" intro={byFolder('laptops-computers').intro} items={productItems(byFolder('laptops-computers'))} to="/products/laptops-computers" autoplay />
      <CategoryCarousel title="Phones & Mobile Accessories" intro={byFolder('phones-mobile-accessories').intro} items={productItems(byFolder('phones-mobile-accessories'))} to="/products/phones-mobile-accessories" />
      <CategoryCarousel title="Computer Accessories" items={productItems(byFolder('computer-accessories'))} to="/products/computer-accessories" />
      <CategoryCarousel title="Cables & Connectivity" items={productItems(byFolder('cables-connectivity'))} to="/products/cables-connectivity" />
      <CategoryCarousel title="Storage & Hardware" items={productItems(byFolder('storage-hardware'))} to="/products/storage-hardware" />
      <CategoryCarousel title="Audio & Gaming Accessories" items={productItems(byFolder('audio-gaming'))} to="/products/audio-gaming" />
      <CategoryCarousel title="Power & Charging Accessories" items={productItems(byFolder('power-charging'))} to="/products/power-charging" />
      <CategoryCarousel title="CCTV & Security Products" intro={byFolder('cctv-security').intro} items={productItems(byFolder('cctv-security'))} to="/products/cctv-security" />
      <CategoryCarousel title="Repairs & Maintenance" intro="Laptop, desktop and phone repairs." items={[...serviceItems(SERVICE_CATEGORIES[0]).slice(0, 3), ...serviceItems(SERVICE_CATEGORIES[1]).slice(0, 3)]} to="/services" cta="Book" />
      <CategoryCarousel title="Software & Installations" items={serviceItems(SERVICE_CATEGORIES[2])} to="/services/software-os-installation" />
      <CategoryCarousel title="Website & Digital Solutions" intro={DIGITAL.intro} items={digitalItems()} to="/web-digital-solutions" />
      <CategoryCarousel title="Coding Academy" intro={ACADEMY.intro} items={academyItems()} to="/coding-academy" cta="Enquire to enrol" />

      <section className="st-section st-alt" aria-labelledby="store-h"><div className="st-wrap st-two">
        <div>
          <h2 id="store-h">Visit our store in Mile 12</h2>
          <address className="st-address">Adedoyin Complex, 12 Adedoyin Street,<br />Mile 12, Kosofe, Lagos State, Nigeria.</address>
          <div className="st-actions">
            <Link className="st-btn" to="/store">Visit our store</Link>
            <a className="st-btn st-btn-ghost" href={mapsUrl()} target="_blank" rel="noopener noreferrer">Get directions<span className="visually-hidden"> (opens in a new tab)</span></a>
          </div>
        </div>
        <ResponsiveImage imageKey="store/storefront.jpg" alt="SoTech IT Solutions store, Mile 12, Lagos" width={800} height={600} sizes="(min-width: 992px) 45vw, 90vw" />
      </div></section>

      <section className="st-section" aria-labelledby="why-h"><div className="st-wrap">
        <h2 id="why-h" style={{textAlign:'center'}}>Why choose SoTech</h2>
        <ul className="st-why">
          <li><strong>One place for everything</strong> Buy, repair, install and learn with the same team.</li>
          <li><strong>New and UK-used options</strong> Choose what fits your budget.</li>
          <li><strong>Physical store</strong> Talk to us face to face in Mile 12.</li>
          <li><strong>Easy to reach</strong> Call, WhatsApp, email or walk in.</li>
        </ul>
      </div></section>

      <section className="st-section st-alt" aria-labelledby="faq-h"><div className="st-wrap st-narrow">
        <h2 id="faq-h">Frequently asked questions</h2>
        <Faq items={FAQ} />
      </div></section>

      <section className="st-section st-cta" aria-labelledby="cta-h"><div className="st-wrap st-center">
        <h2 id="cta-h">Tell us what you need</h2>
        <p>{SITE.slogan}</p>
        <EnquiryButtons />
      </div></section>
    </div>
  );
}
export default Theapp;
