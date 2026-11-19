
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

// Custom 404 page.
// Prevents search engines from indexing invalid URLs
// instead of redirecting every invalid URL to the homepage.

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | SoTech IT Solutions"
        description="The page you are looking for could not be found. Explore SoTech IT Solutions products, IT services or contact our team for assistance."
        path="/404"
        noindex
      />

      <section className="st-section">
        <div className="st-wrap st-narrow st-center">

          <h1>Oops! Page Not Found</h1>

          <p>
            The page you are looking for does not exist,
            may have been moved, or the link may be incorrect.
          </p>

          <p>
            Don't worry. You can explore our products and
            services or contact SoTech IT Solutions for assistance.
          </p>

          <div
            className="st-actions"
            style={{ justifyContent: 'center' }}
          >
            <Link className="st-btn" to="/">
              Go to Homepage
            </Link>

            <Link className="st-btn st-btn-ghost" to="/products">
              Browse Products
            </Link>

            <Link className="st-btn st-btn-ghost" to="/services">
              Explore IT Services
            </Link>

            <Link className="st-btn st-btn-ghost" to="/contact">
              Contact Us
            </Link>

            <Link className="st-btn st-btn-ghost" to="/store">
              Visit Our Store
            </Link>
          </div>

          <p className="st-note">
            SoTech IT Solutions is based in Mile 12, Kosofe,
            Lagos, serving customers across Lagos State
            and beyond.
          </p>

        </div>
      </section>
    </>
  );
}
