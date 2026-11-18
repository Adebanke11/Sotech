import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import BookingForm from '../BookingForm';
import { breadcrumbs } from '../lib/schema';

export default function BookPage() {
  const trail = [{ name: 'Home', path: '/' }, { name: 'Book a Service', path: '/book-service' }];
  return (
    <>
      <Seo title="Book a Repair or Service | SoTech IT Solutions, Mile 12, Lagos" path="/book-service"
        description="Book a laptop, phone or computer repair, installation or other service with SoTech IT Solutions in Mile 12, Kosofe, Lagos."
        jsonLd={[breadcrumbs(trail)]} />
      <PageHero title="Book a Service" trail={trail} lead="Tell us what you need and we will get back to you." />
      <section className="st-section">
        <div className="st-wrap st-narrow"><BookingForm /></div>
      </section>
    </>
  );
}