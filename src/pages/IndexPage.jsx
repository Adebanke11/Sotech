import { WHATSAPP_ENQUIRY, waTo } from '../data/site';
import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES, productItems, serviceItems } from '../data/catalog';
import CategoryCarousel from '../components/CategoryCarousel';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { breadcrumbs } from '../lib/schema';

export default function IndexPage({ kind }) {
  const isProduct = kind === 'products';
  const list = isProduct ? PRODUCT_CATEGORIES : SERVICE_CATEGORIES;
  const path = `/${kind}`;
  const trail = [{ name: 'Home', path: '/' }, { name: isProduct ? 'Products' : 'Services', path }];
  return (
    <>
      <Seo
        title={isProduct ? 'IT Products, Laptops, Phones & Accessories in Lagos | SoTech IT Solutions' : 'Computer, Laptop & Phone Repairs and IT Services in Lagos | SoTech IT Solutions'}
        description={isProduct ? 'Laptops, phones, computer accessories, cables, storage, power products and CCTV equipment at SoTech IT Solutions, Mile 12, Kosofe, Lagos.' : 'Laptop and phone repairs, Windows and Office installation, hardware upgrades and CCTV installation in Mile 12, Kosofe and Lagos.'}
        path={path} jsonLd={[breadcrumbs(trail)]} />
      <PageHero title={isProduct ? 'Products' : 'Technology Services'} trail={trail}
        lead={isProduct ? 'New and quality UK-used laptops and phones, plus accessories, cables, storage, power products and security equipment.' : 'Repairs, installations, upgrades and support from one trusted team.'} />
      {list.map((c) => (
        <CategoryCarousel key={c.slug} title={c.name} intro={c.intro} to={`${path}/${c.slug}`}
          items={isProduct ? productItems(c) : serviceItems(c)} headingLevel={2} />
      ))}
     <div className="st-wrap st-center">
  <a
    className="st-btn"
    href={waTo(WHATSAPP_ENQUIRY, isProduct
      ? 'Hello SoTech IT Solutions, I would like to ask about a product.'
      : 'Hello SoTech IT Solutions, I would like to ask about a service.')}
    target="_blank"
    rel="noopener noreferrer"
  >
    Ask about a product or service<span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
  </a>
</div>
    </>
  );
}
