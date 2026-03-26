import { Link, useNavigate } from "react-router-dom";
import "./promo.css";

export default function Promo() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="benefits-page">
      <div className="benefits-bg" />

      <nav className="benefits-nav">
        <div className="benefits-logo">LEXUS MONGOLIA</div>

        <div className="benefits-nav-links">
          <Link to="/home">HOME</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/service">CONCIERGE</Link>
          <Link to="/promo" className="active">
            BENEFITS
          </Link>
        </div>

        <button className="benefits-account-btn" onClick={logout}>
          ○
        </button>
      </nav>

      <main className="benefits-main">
        <section className="benefits-hero">
          <div className="benefits-hero-left">
            <p className="benefits-eyebrow">THE LEXUS RESERVE</p>
            <h1 className="benefits-title">
              BEYOND THE
              <br />
              STANDARD
            </h1>
          </div>

          <div className="benefits-hero-right">
            <p>
              Membership is an invitation to a world curated for those who seek
              precision in every facet of life. Explore your exclusive
              privileges across Mongolia and beyond.
            </p>
          </div>
        </section>

        <section className="benefits-feature-card">
          <div className="benefits-feature-image" />

          <div className="benefits-feature-content">
            <h2>Private Event Access</h2>
            <p>ULAANBAATAR — EXCLUSIVE INVITATIONS</p>
            <button>REQUEST INVITATION</button>
          </div>
        </section>

        <section className="benefits-grid">
          <div className="benefits-left-copy">
            <p className="benefits-section-label">01 / LIFESTYLE</p>
            <h3>
              Partner
              <br />
              Privileges
            </h3>

            <p className="benefits-section-text">
              Access a curated network of luxury boutiques, fine dining, and
              wellness retreats throughout Mongolia. Your Lexus key unlocks more
              than just your vehicle.
            </p>

            <div className="benefits-links-list">
              <a href="/">Shangri-La Boutique Collection →</a>
              <a href="/">Blue Sky Culinary Suite →</a>
            </div>
          </div>

          <div className="benefits-lounge-card">
            <div className="benefits-lounge-top">
              <p>Lexus Lounge Access</p>
              <span>CHINGGIS KHAAN INTERNATIONAL</span>
            </div>

            <div className="benefits-lounge-center">
              <p>01 LEXUS LOUNGE</p>
              <p>02 SAFETY LOUNGE</p>
            </div>

            <div className="benefits-mini-card">
              <strong>Seamless Transit</strong>
              <p>
                Relax in curated comfort before your journey. Complimentary for
                Black Tier members.
              </p>
            </div>
          </div>
        </section>

        <section className="benefits-service-block">
          <div className="benefits-service-copy">
            <div className="benefits-watermark">LEXUS</div>

            <h3>
              Priority
              <br />
              Service Booking
            </h3>

            <p>
              Your time is the ultimate luxury. Experience expedited maintenance
              and dedicated technical advisors at our Ulaanbaatar service
              center.
            </p>

            <div className="benefits-service-actions">
              <button className="primary-btn">BOOK SERVICE</button>
              <button className="secondary-btn">CALL CONCIERGE</button>
            </div>
          </div>

          <div className="benefits-service-image" />
        </section>

        <section className="benefits-directory">
          <div className="benefits-directory-header">
            <p className="benefits-section-label">THE FULL DIRECTORY</p>
            <span>SCROLL TO EXPLORE</span>
          </div>

          <div className="benefits-directory-list">
            <div className="benefits-directory-row">
              <span>01</span>
              <strong>Complimentary Valet</strong>
              <p>Premium valet parking at all major luxury venues in Ulaanbaatar.</p>
              <a href="/">LEARN MORE</a>
            </div>

            <div className="benefits-directory-row">
              <span>02</span>
              <strong>Seasonal Detailing</strong>
              <p>Quarterly deep-cleaning and protection treatment for your Lexus.</p>
              <a href="/">LEARN MORE</a>
            </div>

            <div className="benefits-directory-row">
              <span>03</span>
              <strong>Exclusive Test Drives</strong>
              <p>First access to pilot upcoming Lexus models before general release.</p>
              <a href="/">LEARN MORE</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="benefits-footer">
        <div className="benefits-footer-brand">LEXUS MONGOLIA</div>

        <div className="benefits-footer-links">
          <div>
            <a href="/">EXPERIENCE</a>
            <a href="/">THE RESERVE</a>
            <a href="/">INSPIRATIONS</a>
            <a href="/">HERITAGE</a>
          </div>

          <div>
            <a href="/">LEGAL</a>
            <a href="/">PRIVACY</a>
            <a href="/">TERMS</a>
            <a href="/">CONTACT</a>
          </div>
        </div>

        <div className="benefits-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
