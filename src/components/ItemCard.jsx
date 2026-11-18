// import { Link } from 'react-router-dom';
// import ResponsiveImage from './ResponsiveImage';

// export default function ItemCard({ item, cta = 'Enquire' }) {
//   return (
//     <article className="st-card" role="group" aria-roledescription="slide" aria-label={item.name}>
//       <ResponsiveImage imageKey={item.image.key} alt={item.image.alt} />
//       <div className="st-card-body">
//         <h3>{item.name}</h3>
//         <p>{item.desc}</p>
//         <Link
//   className="st-btn st-btn-small"
//   to={`${cta === 'Book' ? '/book-service' : '/contact'}?service=${encodeURIComponent(item.enquiry)}&item=${encodeURIComponent(item.name)}`}
// >
//   {cta}<span className="visually-hidden"> about {item.name}</span>
// </Link>
//       </div>
//     </article>
//   );
// }

import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';
import { WHATSAPP_ENQUIRY, WHATSAPP_ACADEMY, waTo } from '../data/site';

export default function ItemCard({ item, cta = 'Enquire' }) {
  const isBook = cta === 'Book';
  const isAcademy = cta === 'Enquire to enrol';

  const whatsappHref = isAcademy
    ? waTo(WHATSAPP_ACADEMY, `Hello SoTech Coding Academy, I would like to enrol my child for: ${item.name}. Please share the details.`)
    : waTo(WHATSAPP_ENQUIRY, `Hello SoTech IT Solutions, I would like to enquire about: ${item.name}. Is it available?`);

  return (
    <article className="st-card" role="group" aria-roledescription="slide" aria-label={item.name}>
      <ResponsiveImage imageKey={item.image.key} alt={item.image.alt} />
      <div className="st-card-body">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        {isBook ? (
          <Link
            className="st-btn st-btn-small"
            to={`/book-service?service=${encodeURIComponent(item.enquiry)}&item=${encodeURIComponent(item.name)}`}
          >
            {cta}<span className="visually-hidden"> about {item.name}</span>
          </Link>
        ) : (
          <a
            className="st-btn st-btn-small"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta}<span className="visually-hidden"> {item.name} on WhatsApp (opens in a new tab)</span>
          </a>
        )}
      </div>
    </article>
  );
}