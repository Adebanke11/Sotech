import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';

export default function ItemCard({ item, cta = 'Enquire' }) {
  return (
    <article className="st-card" role="group" aria-roledescription="slide" aria-label={item.name}>
      <ResponsiveImage imageKey={item.image.key} alt={item.image.alt} />
      <div className="st-card-body">
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
        <Link className="st-btn st-btn-small" to={`/contact?service=${encodeURIComponent(item.enquiry)}&item=${encodeURIComponent(item.name)}`}>
          {cta}<span className="visually-hidden"> about {item.name}</span>
        </Link>
      </div>
    </article>
  );
}
