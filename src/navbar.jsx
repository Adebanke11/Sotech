import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from './assets/logo.png';
import { PRODUCT_CATEGORIES, SERVICE_CATEGORIES } from './data/catalog';

// Accessible disclosure-style dropdowns: buttons with aria-expanded, Esc closes, works by touch and keyboard.
function Dropdown({ label, to, items, base }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const out = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('pointerdown', out);
    return () => document.removeEventListener('pointerdown', out);
  }, []);
  return (
    <li className="st-dd" ref={ref} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
      <NavLink to={to} className="st-navlink">{label}</NavLink>
      <button type="button" className="st-ddbtn" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className="visually-hidden">{label} categories</span><span aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="st-menu">
          {items.map((c) => <li key={c.slug}><Link to={`${base}/${c.slug}`}>{c.name}</Link></li>)}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <a className="st-skip" href="#main">Skip to main content</a>
      <header className="st-header">
        <div className="st-wrap st-headbar">
          <Link to="/" className="st-logo"><img src={logo} alt="SoTech IT Solutions home" width="100" height="40" /></Link>
          <button type="button" className="st-burger" aria-expanded={open} aria-controls="st-nav" onClick={() => setOpen(!open)}>
            <span className="visually-hidden">Menu</span><span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
          <nav id="st-nav" className={`st-nav${open ? ' open' : ''}`} aria-label="Main">
            <ul>
              <li><NavLink to="/" end className="st-navlink">Home</NavLink></li>
              <li><NavLink to="/AboutUs" className="st-navlink">About Us</NavLink></li>
              <Dropdown label="Products" to="/products" base="/products" items={PRODUCT_CATEGORIES} />
              <Dropdown label="Services" to="/services" base="/services" items={SERVICE_CATEGORIES} />
              <li><NavLink to="/web-digital-solutions" className="st-navlink">Web &amp; Digital Solutions</NavLink></li>
              <li><NavLink to="/coding-academy" className="st-navlink">Coding Academy</NavLink></li>
              <li><NavLink to="/store" className="st-navlink">Our Store</NavLink></li>
              {/* <li><NavLink to="/contact" className="st-btn st-btn-small">Contact Us</NavLink></li> */}
              <li>
  <a 
    href="https://wa.me/2348108594858?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20services." 
    className="st-btn st-btn-small" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Contact Us
  </a>
</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
