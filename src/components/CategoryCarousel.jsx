import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import ItemCard from './ItemCard';

export default function CategoryCarousel({ title, intro, items, to, headingLevel = 2, autoplay = false, cta }) {
  const H = `h${headingLevel}`;
  return (
    <section className="st-section" aria-labelledby={`h-${title.replace(/\W+/g, '-')}`}>
      <div className="st-wrap">
        <div className="st-section-head">
          <div>
            <H id={`h-${title.replace(/\W+/g, '-')}`}>{title}</H>
            {intro && <p>{intro}</p>}
          </div>
          {to && <Link className="st-link" to={to}>See all {title}</Link>}
        </div>
        <Carousel label={title} autoplay={autoplay}>
          {items.map((it) => <ItemCard key={it.id} item={it} cta={cta} />)}
        </Carousel>
      </div>
    </section>
  );
}
