import { Link, Navigate, useParams } from 'react-router-dom';
import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES, productItems, serviceItems } from '../data/catalog';
import ItemCard from '../components/ItemCard';
import PageHero from '../components/PageHero';
import EnquiryButtons from '../components/EnquiryButtons';
import Seo from '../components/Seo';
import { breadcrumbs, service as serviceSchema } from '../lib/schema';

// One template for every product category (/products/:slug) and service category (/services/:slug).
export default function CategoryPage({ kind }) {
  const { slug } = useParams();
  const isProduct = kind === 'products';
  const list = isProduct ? PRODUCT_CATEGORIES : SERVICE_CATEGORIES;
  const cat = list.find((c) => c.slug === slug);
  if (!cat) return <Navigate to={`/${kind}`} replace />;
  const items = isProduct ? productItems(cat) : serviceItems(cat);
  const path = `/${kind}/${cat.slug}`;
  const trail = [{ name: 'Home', path: '/' }, { name: isProduct ? 'Products' : 'Services', path: `/${kind}` }, { name: cat.name, path }];
  return (
    <>
      <Seo title={`${cat.seo.title} | SoTech IT Solutions`} description={cat.seo.desc} path={path}
        jsonLd={[breadcrumbs(trail), ...(isProduct ? [] : [serviceSchema(cat.name, cat.seo.desc, path)])]} />
      <PageHero title={cat.name} lead={cat.intro} trail={trail}>
        <EnquiryButtons service={isProduct ? cat.name : cat.enquiry} />
      </PageHero>
      <section className="st-section"><div className="st-wrap">
        <h2 className="visually-hidden">{cat.name} available</h2>
        <div className="st-grid">{items.map((it) => <ItemCard key={it.id} item={it} />)}</div>
        <p className="st-note">{isProduct ? 'Stock changes often. Ask us about availability, or visit our store at Mile 12.' : 'Tell us what is wrong or what you need and we will advise.'}</p>
        <p><Link className="st-link" to={isProduct ? '/store' : '/contact'}>{isProduct ? 'Visit our store' : 'Contact SoTech'}</Link></p>
      </div></section>
    </>
  );
}
