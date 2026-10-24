import ReactGA from "react-ga4";

// Initialize my Measurement ID
ReactGA.initialize("G-XXXXXXXXXX");

// Track my initial page view
ReactGA.send({ hitType: "pageview", page: window.location.pathname });