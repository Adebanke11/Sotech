// import { useEffect } from 'react'; 
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ScrollToTop from './ScrollToTop';
// import Theapp from "./home";
// import PrivacyPolicy from "./PrivacyPolicy"; 
// import About from "./About"
// import Navbar from './navbar';
// import Footer from './Footer';
// import ServicesDetail from './ServicesDetail';
// import AboutDetail from "./AboutDetail";
// import BookingForm from './BookingForm';
// import CaseStudies from './CaseStudies';


// function App() {
//   return (
  
//       // <Router basename="/Sotech">- for github pages
//       <BrowserRouter>
//       <ScrollToTop />
//       <div className='App-Wrapper' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//         {/* Navbar stays at the top of every page */}
//         <Navbar />

//         <main style={{ flex: '1 0 auto' }}>
//           <Routes>
//             {/* When the URL is "/", show the home content */}
//             <Route path="/" element={<Theapp />} />
            
//             {/* When the URL is "/privacy", show the privacy policy */}
//             <Route path="/privacy" element={<PrivacyPolicy />} />
//             <Route path="/AboutUs" element={<About />} />
//             <Route path="/Service" element={<ServicesDetail />} />
//             {/* The About Detail Route - This MUST match the navigate('/about-detail') above */}
//             <Route path="/about-detail" element={<AboutDetail />} />
//             <Route path="/book-service" element={<BookingForm />} />
//             <Route path="/case-studies" element={<CaseStudies />} />

//           </Routes>
//         </main>

//         {/* Footer stays at the bottom of every page */}
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import ScrollToTop from './ScrollToTop';
import Theapp from './home';
import PrivacyPolicy from './PrivacyPolicy';
import About from './About';
import Navbar from './navbar';
import Footer from './Footer';
import ServicesDetail from './ServicesDetail';
import AboutDetail from './AboutDetail';
import BookingForm from './BookingForm';
import CaseStudies from './CaseStudies';

function App() {
  return (
    <div
      className="App-Wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <ScrollToTop />
      <Navbar />

      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Theapp />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Service" element={<ServicesDetail />} />
          <Route path="/about-detail" element={<AboutDetail />} />
          <Route path="/book-service" element={<BookingForm />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
