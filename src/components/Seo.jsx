import { useEffect } from 'react';
import { SITE } from '../data/site';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', content);
};

// Per-page title, description, canonical, Open Graph, robots and JSON-LD.
// Set VITE_OG_IMAGE in .env to a full https URL of a 1200x630 image to enable social/AI preview images.
export default function Seo({ title, description, path = '/', jsonLd = [], image = import.meta.env.VITE_OG_IMAGE, noindex = false }) {
  useEffect(() => {
    const url = SITE.url + (path === '/' ? '/' : path);
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:locale', 'en_NG');
    setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (image) { setMeta('property', 'og:image', image); setMeta('name', 'twitter:image', image); }
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = url;
    document.head.querySelectorAll('script[data-seo]').forEach((n) => n.remove());
    jsonLd.forEach((obj) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json'; s.dataset.seo = '1'; s.text = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }, [title, description, path, image, noindex, JSON.stringify(jsonLd)]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
}
