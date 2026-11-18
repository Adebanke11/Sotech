import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import ResponsiveImage from '../components/ResponsiveImage';
import { breadcrumbs, localBusiness } from '../lib/schema';
import { PRODUCT_CATEGORIES } from '../data/catalog';
import { SITE, addressText, mapsUrl, waLink, WHATSAPP_ENQUIRY, waTo } from '../data/site';

export default function StorePage() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Our Store', path: '/store' }];
  return (
    <>
      <Seo title="Computer & Laptop Shop in Mile 12, Lagos | SoTech IT Solutions Store" path="/store"
        description="Visit SoTech IT Solutions at Adedoyin Complex, 12 Adedoyin Street, Mile 12, Kosofe, Lagos for laptops, phones, accessories, CCTV equipment and repairs."
        jsonLd={[breadcrumbs(trail), localBusiness()]} />
      <PageHero title="Visit Our Store in Mile 12" trail={trail}
        lead="See laptops, phones, accessories and security equipment in person, and talk to our team about repairs and installations." />
      <section className="st-section"><div className="st-wrap st-two">
        <div>
          <h2>Find us</h2>
          <address className="st-address">
            <strong>{SITE.name}</strong><br />Adedoyin Complex,<br />12 Adedoyin Street,<br />Mile 12, Kosofe,<br />Lagos State, Nigeria.
          </address>
          <ul className="st-plain">
            {SITE.phones.map((p) => <li key={p.tel}><a href={`tel:${p.tel}`}>Call {p.display}</a></li>)}
            <li><a href={waLink('Hi SoTech, I plan to visit your store.')} target="_blank" rel="noopener noreferrer">WhatsApp us<span className="visually-hidden"> (opens in a new tab)</span></a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
          <div className="st-actions">
            <a className="st-btn" href={mapsUrl()} target="_blank" rel="noopener noreferrer">Get directions<span className="visually-hidden"> on Google Maps (opens in a new tab)</span></a>
           <a
  className="st-btn st-btn-ghost"
  href={waTo(WHATSAPP_ENQUIRY, 'Hello SoTech IT Solutions, I plan to visit your store at Mile 12. Please confirm that you are open and that the item I need is available.')}
  target="_blank"
  rel="noopener noreferrer"
>
  Plan your visit<span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
</a>
          </div>
          <p className="st-note">Please call or message us to confirm availability before you travel.</p>
        </div>
        <ResponsiveImage imageKey="store/storefront.jpg" alt="SoTech IT Solutions store, Mile 12, Lagos" width={800} height={600} sizes="(min-width: 992px) 45vw, 90vw" priority />
      </div></section>
      <section className="st-section st-alt"><div className="st-wrap">
        <h2>Available in store</h2>
        <ul className="st-chips">
          {PRODUCT_CATEGORIES.map((c) => <li key={c.slug}><Link to={`/products/${c.slug}`}>{c.name}</Link></li>)}
        </ul>
        <p className="st-note">Address: {addressText()}</p>
      </div></section>
    </>
  );
}
