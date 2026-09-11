import Hero from './Hero';
import Services from './Services';
import ExpertiseSection from './ExpertiseSection';
import Testimonials from './Testimonials';

function Theapp() {
  return (
    <div className='home-content'>
       <Hero />
       <Services />
       <ExpertiseSection />
       <Testimonials />
    </div>
  );
}

export default Theapp;