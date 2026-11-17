import Breadcrumbs from './Breadcrumbs';
export default function PageHero({ title, lead, trail, children }) {
  return (
    <header className="st-pagehero">
      <div className="st-wrap">
        {trail && <Breadcrumbs trail={trail} />}
        <h1>{title}</h1>
        {lead && <p className="st-lead">{lead}</p>}
        {children}
      </div>
    </header>
  );
}
