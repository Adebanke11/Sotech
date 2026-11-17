// import { Routes, Route } from 'react-router-dom';
// import ReactGA from 'react-ga4';
// import ScrollToTop from './ScrollToTop';
// import Theapp from './home';
// import PrivacyPolicy from './PrivacyPolicy';
// import About from './About';
// import Navbar from './navbar';
// import Footer from './Footer';
// import ServicesDetail from './ServicesDetail';
// import AboutDetail from './AboutDetail';
// import BookingForm from './BookingForm';
// import CaseStudies from './CaseStudies';

// function App() {
//   return (
//     <div
//       className="App-Wrapper"
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//       }}
//     >
//       <ScrollToTop />
//       <Navbar />

//       <main style={{ flex: '1 0 auto' }}>
//         <Routes>
//           <Route path="/" element={<Theapp />} />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//           <Route path="/AboutUs" element={<About />} />
//           {/* <Route path="/Service" element={<ServicesDetail />} /> */}
//            <Route path="/Service" element={<ServicesDetail />} />
//           <Route path="/about-detail" element={<AboutDetail />} />
//           <Route path="/book-service" element={<BookingForm />} />
//           <Route path="/case-studies" element={<CaseStudies />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ReactGA from './analytics';
import ScrollToTop from './ScrollToTop';
import Navbar from './navbar';
import Footer from './Footer';
import Theapp from './home';

// Code splitting: only the home page is in the main bundle.
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));
const About = lazy(() => import('./About'));
const AboutDetail = lazy(() => import('./AboutDetail'));
const CaseStudies = lazy(() => import('./CaseStudies'));
const IndexPage = lazy(() => import('./pages/IndexPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const DivisionPage = lazy(() => import('./pages/DivisionPage'));
const StorePage = lazy(() => import('./pages/StorePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function PageViews() {
  const { pathname, search } = useLocation();
  useEffect(() => { ReactGA.send({ hitType: 'pageview', page: pathname + search }); }, [pathname, search]);
  return null;
}

function App() {
  return (
    <div className="App-Wrapper">
      <ScrollToTop />
      <PageViews />
      <Navbar />
      <main id="main" tabIndex={-1} style={{ flex: '1 0 auto' }}>
        <Suspense fallback={<p className="st-loading" role="status">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Theapp />} />
            <Route path="/products" element={<IndexPage kind="products" />} />
            <Route path="/products/:slug" element={<CategoryPage kind="products" />} />
            <Route path="/services" element={<IndexPage kind="services" />} />
            <Route path="/services/:slug" element={<CategoryPage kind="services" />} />
            <Route path="/web-digital-solutions" element={<DivisionPage which="digital" />} />
            <Route path="/coding-academy" element={<DivisionPage which="academy" />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/about-detail" element={<AboutDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* Preserved legacy URLs */}
            <Route path="/Service" element={<Navigate to="/services" replace />} />
            <Route path="/book-service" element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
export default App;

