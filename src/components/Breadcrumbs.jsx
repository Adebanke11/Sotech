import { Link } from 'react-router-dom';
export default function Breadcrumbs({ trail }) {
  return (
    <nav className="st-crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((t, i) => (
          <li key={t.path}>{i === trail.length - 1 ? <span aria-current="page">{t.name}</span> : <Link to={t.path}>{t.name}</Link>}</li>
        ))}
      </ol>
    </nav>
  );
}
