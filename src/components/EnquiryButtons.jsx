import { SITE, WHATSAPP_ENQUIRY, WHATSAPP_ACADEMY, waTo } from '../data/site';

export default function EnquiryButtons({ service = '', label = 'Send an enquiry', academy = false }) {
  const number = academy ? WHATSAPP_ACADEMY : WHATSAPP_ENQUIRY;
  const message = academy
    ? 'Hello SoTech Coding Academy, I would like to enrol my child. Please share the details.'
    : `Hello SoTech IT Solutions, I would like to enquire about: ${service || 'your products and services'}.`;

  return (
    <div className="st-actions">
      <a className="st-btn" href={waTo(number, message)} target="_blank" rel="noopener noreferrer">
        {label}<span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
      </a>
      <a className="st-btn st-btn-ghost" href={`tel:${SITE.phones[0].tel}`}>Call {SITE.phones[0].display}</a>
    </div>
  );
}