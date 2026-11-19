// import { Link, Navigate, useParams } from 'react-router-dom';
// import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES, productItems, serviceItems } from '../data/catalog';
// import ItemCard from '../components/ItemCard';
// import PageHero from '../components/PageHero';
// import EnquiryButtons from '../components/EnquiryButtons';
// import Seo from '../components/Seo';
// import { breadcrumbs, service as serviceSchema } from '../lib/schema';

// // One template for every product category (/products/:slug) and service category (/services/:slug).
// export default function CategoryPage({ kind }) {
//   const { slug } = useParams();
//   const isProduct = kind === 'products';
//   const list = isProduct ? PRODUCT_CATEGORIES : SERVICE_CATEGORIES;
//   const cat = list.find((c) => c.slug === slug);
//   if (!cat) return <Navigate to={`/${kind}`} replace />;
//   const items = isProduct ? productItems(cat) : serviceItems(cat);
//   const path = `/${kind}/${cat.slug}`;
//   const trail = [{ name: 'Home', path: '/' }, { name: isProduct ? 'Products' : 'Services', path: `/${kind}` }, { name: cat.name, path }];
//   return (
//     <>
//       <Seo title={`${cat.seo.title} | SoTech IT Solutions`} description={cat.seo.desc} path={path}
//         jsonLd={[breadcrumbs(trail), ...(isProduct ? [] : [serviceSchema(cat.name, cat.seo.desc, path)])]} />
//       <PageHero title={cat.name} lead={cat.intro} trail={trail}>
//         <EnquiryButtons service={isProduct ? cat.name : cat.enquiry} />
//       </PageHero>
//       <section className="st-section"><div className="st-wrap">
//         <h2 className="visually-hidden">{cat.name} available</h2>
//         <div className="st-grid">{items.map((it) => <ItemCard key={it.id} item={it} />)}</div>
//         <p className="st-note">{isProduct ? 'Stock changes often. Ask us about availability, or visit our store at Mile 12.' : 'Tell us what is wrong or what you need and we will advise.'}</p>
//         <p><Link className="st-link" to={isProduct ? '/store' : '/contact'}>{isProduct ? 'Visit our store' : 'Contact SoTech'}</Link></p>
//       </div></section>
//     </>
//   );
// }


import { Link, Navigate, useParams } from 'react-router-dom';

import {
  PRODUCT_CATEGORIES,
  SERVICE_CATEGORIES,
  productItems,
  serviceItems
} from '../data/catalog';

import { SEO_CONTENT } from '../data/seoContent';

import ItemCard from '../components/ItemCard';
import PageHero from '../components/PageHero';
import EnquiryButtons from '../components/EnquiryButtons';
import Faq from '../components/Faq';
import Seo from '../components/Seo';

import {
  breadcrumbs,
  service as serviceSchema,
  faq as faqSchema
} from '../lib/schema';


// One reusable template for product and service category pages.
export default function CategoryPage({ kind }) {
  const { slug } = useParams();

  const isProduct = kind === 'products';

  const list = isProduct
    ? PRODUCT_CATEGORIES
    : SERVICE_CATEGORIES;

  const cat = list.find((c) => c.slug === slug);

  // Redirect invalid category URLs.
  if (!cat) {
    return <Navigate to={`/${kind}`} replace />;
  }

  const items = isProduct
    ? productItems(cat)
    : serviceItems(cat);

  const content = SEO_CONTENT[cat.slug];

  const path = `/${kind}/${cat.slug}`;

  // Breadcrumb navigation.
  const trail = [
    { name: 'Home', path: '/' },
    {
      name: isProduct ? 'Products' : 'Services',
      path: `/${kind}`
    },
    {
      name: cat.name,
      path
    }
  ];

  // Related categories.
  const related = list
    .filter((c) => c.slug !== cat.slug)
    .slice(0, 4);

  // Generate FAQ structured data only when valid FAQs exist.
  const hasFaqs =
    Array.isArray(content?.faqs) &&
    content.faqs.length > 0;

  // Structured data for search engines.
  const jsonLd = [
    breadcrumbs(trail),

    ...(
      isProduct
        ? []
        : [
            serviceSchema(
              cat.name,
              cat.seo.desc,
              path
            )
          ]
    ),

    ...(hasFaqs ? [faqSchema(content.faqs)] : [])
  ];

  return (
    <>
      {/* SEO metadata and structured data */}
      <Seo
        title={`${cat.seo.title} | SoTech IT Solutions`}
        description={cat.seo.desc}
        path={path}
        jsonLd={jsonLd}
      />

      {/* Category introduction */}
      <PageHero
        title={cat.name}
        lead={cat.intro}
        trail={trail}
      >
        <EnquiryButtons
          service={isProduct ? cat.name : cat.enquiry}
        />
      </PageHero>

      {/* Products or services */}
      <section className="st-section">
        <div className="st-wrap">

          <h2 className="visually-hidden">
            {cat.name} available at SoTech IT Solutions
          </h2>

          <div className="st-grid">
            {items.map((it) => (
              <ItemCard
                key={it.id}
                item={it}
              />
            ))}
          </div>

          <p className="st-note">
            {isProduct
              ? 'Stock changes often. Contact us to confirm availability or visit our physical store in Mile 12, Kosofe, Lagos.'
              : 'Tell us what you need and our team will advise you on the appropriate solution. SoTech is based in Mile 12, Lagos, and serves customers across Lagos State and beyond.'
            }
          </p>

        </div>
      </section>

      {/* Additional category information and FAQs */}
      {content && (
        <section className="st-section st-alt">
          <div className="st-wrap st-narrow">

            <h2>
              About {cat.name.toLowerCase()} at SoTech
            </h2>

            <p>{content.about}</p>

            {hasFaqs && (
              <>
                <h2>Common questions</h2>
                <Faq items={content.faqs} />
              </>
            )}

          </div>
        </section>
      )}

      {/* Related categories and internal links */}
      <section className="st-section">
        <div className="st-wrap">

          <h2>
            {isProduct ? 'Explore more products' : 'Explore more services'}
          </h2>

          <ul className="st-chips">

            {related.map((c) => (
              <li key={c.slug}>
                <Link to={`/${kind}/${c.slug}`}>
                  {c.name}
                </Link>
              </li>
            ))}

            <li>
              <Link to={isProduct ? '/services' : '/products'}>
                {isProduct ? 'Repairs & services' : 'Shop products'}
              </Link>
            </li>

            <li>
              <Link to="/store">
                Visit our physical store in Mile 12
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact SoTech IT Solutions
              </Link>
            </li>

          </ul>

          {/* Service coverage information */}
          <div className="st-note">
            <h3>Serving customers in Lagos and beyond</h3>

            <p>
              SoTech IT Solutions operates from Mile 12,
              Kosofe, Lagos. Although our physical office is
              located in Mile 12, our IT solutions and services
              extend to individuals, businesses, schools and
              organisations across Lagos State and other parts
              of Nigeria.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
