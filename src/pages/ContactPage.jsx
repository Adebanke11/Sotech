import PageHero from '../components/PageHero';
import EnquiryButtons from '../components/EnquiryButtons';
import ItemCard from '../components/ItemCard';
import Seo from '../components/Seo';
import Faq from '../components/Faq';
import { breadcrumbs, service, faq } from '../lib/schema';
import { DIGITAL, ACADEMY, digitalItems, academyItems } from '../data/catalog';

const PAGES = {
  digital: {
    group: DIGITAL, items: digitalItems, path: '/web-digital-solutions',
    title: 'Website Development & Digital Solutions in Lagos | SoTech IT Solutions',
    desc: 'Website design, development and maintenance, domain registration, business email setup and email marketing for businesses in Lagos and across Nigeria.',
    h1: 'Web & Digital Solutions',
    lead: 'Get your business online and professional: websites, domains, business email and digital tools.',
    faq: [
      ['Which businesses do you build websites for?', 'We work with individuals, entrepreneurs, startups, small businesses and established organisations. Tell us what you need and we will advise.'],
      ['Can you set up a business email address?', 'Yes. We set up and configure professional email on your own domain.'],
      ['Can you move or register my domain?', 'Yes. We handle domain registration and transfers. Contact us with your domain name.'],
    ],
  },
  academy: {
    group: ACADEMY, items: academyItems, path: '/coding-academy',
    title: 'Coding Classes for Children in Lagos (Ages 6–16) | SoTech Coding Academy',
    desc: 'Coding, computer literacy, web development basics and creative design classes for children aged 6–16 at SoTech IT Solutions, Mile 12, Lagos.',
    h1: 'Coding & Design Academy',
    lead: 'Practical technology education for children aged 6–16: coding, computer literacy and creative design.',
    faq: [
      ['What ages do you teach?', 'Our Coding & Design Academy is for children aged 6 to 16.'],
      ['How do I enrol my child?', 'Send an enrolment enquiry or call us. We will explain the programmes, schedules and fees directly.'],
    ],
  },
};

export default function DivisionPage({ which }) {
  const p = PAGES[which];
  const trail = [{ name: 'Home', path: '/' }, { name: p.h1, path: p.path }];
  return (
    <>
      <Seo title={p.title} description={p.desc} path={p.path} jsonLd={[breadcrumbs(trail), service(p.h1, p.desc, p.path), faq(p.faq)]} />
      <PageHero title={p.h1} lead={p.lead} trail={trail}>
        <EnquiryButtons service={p.group.enquiry} label={which === 'academy' ? 'Enrolment enquiry' : 'Send an enquiry'} />
      </PageHero>
      <section className="st-section"><div className="st-wrap">
        <h2>{which === 'academy' ? 'What we teach' : 'What we offer'}</h2>
        <div className="st-grid">{p.items().map((it) => <ItemCard key={it.id} item={it} cta={which === 'academy' ? 'Enquire to enrol' : 'Enquire'} />)}</div>
      </div></section>
      <section className="st-section st-alt"><div className="st-wrap">
        <h2>Frequently asked questions</h2>
        <Faq items={p.faq} />
      </div></section>
    </>
  );
}
