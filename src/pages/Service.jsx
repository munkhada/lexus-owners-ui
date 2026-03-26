import { Link, useNavigate } from "react-router-dom";
import "./service.css";

export default function Service() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="service-page">
      <div className="service-bg" />

      <nav className="service-nav">
        <div className="service-logo">LEXUS MONGOLIA</div>

        <div className="service-nav-links">
          <Link to="/home">HOME</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/service" className="active">
            CONCIERGE
          </Link>
          <Link to="/promo">BENEFITS</Link>
        </div>

        <button className="service-account-btn" onClick={logout}>
          ○
        </button>
      </nav>

      <main className="service-main">
        <section className="service-hero">
          <div className="service-hero-left">
            <h1>
              ALWAYS
              <br />
              AT YOUR
              <br />
              SERVICE.
            </h1>

            <p>
              Experience the ultimate expression of Omotenashi. Our concierge
              team is dedicated to providing seamless assistance across
              Mongolia.
            </p>
          </div>

          <div className="service-hero-right">
            <p className="service-status-label">STATUS</p>
            <p className="service-status-value">● 24/7 PRIORITY ACTIVE</p>
          </div>
        </section>

        <section className="service-roadside-card">
          <div className="service-roadside-image" />

          <div className="service-roadside-overlay">
            <div>
              <h2>Roadside Assistance</h2>
              <p>
                Immediate support for any vehicle incident, anywhere in
                Mongolia. Our recovery fleet is dispatched instantly.
              </p>
            </div>

            <button>REQUEST IMMEDIATE AID</button>
          </div>
        </section>

        <section className="service-dual-grid">
          <div className="service-info-card">
            <div className="service-icon">◫</div>
            <h3>Service Concierge</h3>
            <p>
              Maintain the peak performance of your Lexus. Schedule your
              seasonal maintenance or valet pick-up service directly.
            </p>

            <div className="service-actions-row">
              <a href="/">SCHEDULE MAINTENANCE →</a>
            </div>
          </div>

          <div className="service-info-card">
            <div className="service-icon">◪</div>
            <h3>Private Consultant</h3>
            <p>
              A dedicated Lexus representative ready to assist with technical
              queries, ownership benefits, or lifestyle requests.
            </p>

            <div className="service-actions-row">
              <a href="/">CALL REPRESENTATIVE</a>
              <a href="/">DIRECT CHAT</a>
            </div>
          </div>
        </section>

        <section className="service-centers-section">
          <div className="service-centers-copy">
            <div>
              <h3>Lexus Service Centers</h3>
            </div>

            <div>
              <p>
                Certified facilities equipped with the latest diagnostic
                technology and staffed by Lexus-trained technicians in
                Ulaanbaatar.
              </p>
              <button>VIEW ALL MAP LOCATIONS</button>
            </div>
          </div>

          <div className="service-centers-grid">
            <div className="service-center-card">
              <div className="service-center-image service-center-image-1" />
              <div className="service-center-text">
                <h4>Lexus Ulaanbaatar Central</h4>
                <p>
                  Khan-Uul District, 15th Khoroo, Mahatma Gandhi Street
                </p>
                <span>OPEN 09:00 - 20:00</span>
              </div>
            </div>

            <div className="service-center-card">
              <div className="service-center-image service-center-image-2" />
              <div className="service-center-text">
                <h4>Bayanzurkh Service Hub</h4>
                <p>Bayanzurkh District, Peace Avenue 45</p>
                <span>OPEN 10:00 - 19:00</span>
              </div>
            </div>

            <div className="service-center-card map-card">
              <div className="service-center-image service-center-image-3" />
              <div className="service-center-map-label">INTERACTIVE MAP</div>
            </div>
          </div>
        </section>

        <section className="service-master-section">
          <div className="service-master-image">
            <div className="service-master-overlay-card">
              <h4>Master Craftsmanship</h4>
              <p>
                Every service is performed by Takumi-trained technicians using
                only genuine Lexus components, ensuring your vehicle remains
                exactly as intended.
              </p>
              <span />
            </div>
          </div>
        </section>
      </main>

      <footer className="service-footer">
        <div className="service-footer-brand">LEXUS</div>

        <div className="service-footer-grid">
          <div>
            <a href="/">PRIVACY POLICY</a>
            <a href="/">TERMS OF SERVICE</a>
            <a href="/">CONTACT US</a>
          </div>

          <div>
            <p>ULAANBAATAR OFFICE</p>
            <span>Sukhbaatar Square 2, Central Tower, 12th Floor</span>
          </div>

          <div>
            <p>HOTLINE</p>
            <strong>+976 11 313313</strong>
          </div>
        </div>

        <div className="service-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
