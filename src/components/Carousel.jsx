import { useEffect, useRef, useState, useCallback, useId } from 'react';
import { IoChevronBack, IoChevronForward, IoPause, IoPlay } from 'react-icons/io5';

// Lightweight scroll-snap carousel: native touch swipe, arrow buttons, dots, keyboard arrows.
// Optional autoplay pauses on hover/focus/touch, is off for reduced-motion users, and has a pause button.
export default function Carousel({ label, children, autoplay = false }) {
  const trackRef = useRef(null);
  const id = useId();
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [playing, setPlaying] = useState(autoplay && !reduce);
  const [hold, setHold] = useState(false);

  const measure = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    setPages(Math.max(1, Math.round(t.scrollWidth / t.clientWidth)));
    setPage(Math.round(t.scrollLeft / t.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, children]);

  const go = useCallback((p) => {
    const t = trackRef.current;
    if (!t) return;
    const n = Math.max(0, Math.min(pages - 1, p));
    t.scrollTo({ left: n * t.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
  }, [pages, reduce]);

  useEffect(() => {
    if (!playing || hold) return undefined;
    const timer = setInterval(() => go(page + 1 >= pages ? 0 : page + 1), 5000);
    return () => clearInterval(timer);
  }, [playing, hold, page, pages, go]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(page + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(page - 1); }
  };

  return (
    <section className="st-carousel" aria-roledescription="carousel" aria-label={label}
      onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)} onBlur={() => setHold(false)} onTouchStart={() => setHold(true)}>
      <div ref={trackRef} id={id} className="st-track" tabIndex={0} onKeyDown={onKey} onScroll={measure}
        aria-live={playing && !hold ? 'off' : 'polite'}>
        {children}
      </div>
      <div className="st-carousel-controls">
        <button type="button" className="st-iconbtn" onClick={() => go(page - 1)} disabled={page === 0} aria-controls={id} aria-label={`Previous ${label} slides`}><IoChevronBack aria-hidden="true" /></button>
        <div className="st-dots">
          {Array.from({ length: pages }, (_, i) => (
            <button key={i} type="button" className={`st-dot${i === page ? ' active' : ''}`} onClick={() => go(i)} aria-label={`Go to slide group ${i + 1} of ${pages}`} aria-current={i === page ? 'true' : undefined} />
          ))}
        </div>
        <button type="button" className="st-iconbtn" onClick={() => go(page + 1)} disabled={page >= pages - 1} aria-controls={id} aria-label={`Next ${label} slides`}><IoChevronForward aria-hidden="true" /></button>
        {autoplay && !reduce && (
          <button type="button" className="st-iconbtn" onClick={() => setPlaying((p) => !p)} aria-label={playing ? `Pause ${label} auto-scroll` : `Start ${label} auto-scroll`}>
            {playing ? <IoPause aria-hidden="true" /> : <IoPlay aria-hidden="true" />}
          </button>
        )}
      </div>
    </section>
  );
}
