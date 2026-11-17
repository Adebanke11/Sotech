import { Link } from 'react-router-dom';
import { SITE, waLink } from '../data/site';
export default function EnquiryButtons({ service = '', label = 'Send an enquiry' }) {
  return (
    <div className="st-actions">
      <Link className="st-btn" to={`/contact${service ? `?service=${encodeURIComponent(service)}` : ''}`}>{label}</Link>
      <a className="st-btn st-btn-ghost" href={waLink(`Hi SoTech, I'd like to ask about: ${service || 'your services'}`)} target="_blank" rel="noopener noreferrer">WhatsApp us<span className="visually-hidden"> (opens in a new tab)</span></a>
      <a className="st-btn st-btn-ghost" href={`tel:${SITE.phones[0].tel}`}>Call {SITE.phones[0].display}</a>
    </div>
  );
}
