import ReactGA from "react-ga4";

// Initialize my Measurement ID
ReactGA.initialize("G-8YFX2MVKXL");

// Track my initial page view
ReactGA.send({ hitType: "pageview", page: window.location.pathname });