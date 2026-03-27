import { Link, useNavigate } from "react-router-dom";
import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const model =
    user?.model ||
    user?.["Model-Detail"] ||
    "LEXUS LX";

  const lastname =
    user?.lastname ||
    user?.["Овог"] ||
    "BAT";

  const firstname =
    user?.firstname ||
    user?.["Нэр"] ||
    "ERDENE";

  const fullName = `${lastname} ${firstname}`.toUpperCase();

  const phone =
    user?.phone ||
    user?.["Утасны дугаар"] ||
    "9911XXXX";

  const email =
    user?.email ||
    user?.["И-мэйл хаяг"] ||
    "xxxxx@xxxxxx";

  const vinNumber =
    user?.vinNumber ||
    user?.["Vin number"] ||
    "VIN NOT FOUND";

  const getCarImage = (value) => {
    if (!value) return "/LX.jpg";
    const m = String(value).toLowerCase();

    if (m.includes("rx500")) return "/RX500h.jpg";
    if (m.includes("rx350h")) return "/RX350h.jpg";
    if (m.includes("rx350")) return "/RX350.jpg";
    if (m.includes("rx")) return "/RX.jpg";
    if (m.includes("gx")) return "/GX.png";
    if (m.includes("lm")) return "/LM.jpg";
    if (m.includes("nx")) return "/NX.jpg";
    if (m.includes("lx")) return "/LX.jpg";

    return "/LX.jpg";
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginExpiresAt");
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-bg" />

      <nav className="profile-nav">
        <div className="profile-logo">LEXUS MONGOLIA</div>

        <div className="profile-nav-links">
          <Link to="/home">HOME</Link>
          <Link to="/profile" className="active">
            PROFILE
          </Link>
          <Link to="/service">CONCIERGE</Link>
          <Link to="/promo">BENEFITS</Link>
        </div>

        <button className="profile-account-btn" onClick={logout}>
          SIGN OUT
        </button>
      </nav>

      <main className="profile-main">
        <section className="profile-hero">
          <div className="profile-hero-left">
            <p className="profile-eyebrow">ACCOUNT OVERVIEW</p>
            <h1 className="profile-name">{fullName}</h1>

            <div className="profile-owner-row">
              <span className="profile-owner-line" />
              <p>VERIFIED PREMIUM OWNER</p>
            </div>
          </div>

          <div className="profile-hero-right">
            <p className="profile-mini-label">MEMBERSHIP ID</p>
            <p className="profile-membership-id">LX-9911-0001</p>
          </div>
        </section>

        <section className="profile-grid">
          <div
            className="vehicle-card"
            style={{ backgroundImage: `url(${getCarImage(model)})` }}
          >
            <div className="vehicle-card-overlay" />

            <div className="vehicle-top">
              <h2>REGISTERED VEHICLE</h2>
              <p>Active Subscription Portfolio</p>
            </div>

            <div className="vehicle-bottom">
              <h3>{String(model).toUpperCase()}</h3>

              <div className="vehicle-meta-row">
                <div>
                  <span className="vehicle-meta-label">VIN NUMBER</span>
                  <strong>{vinNumber}</strong>
                </div>

                <button className="vehicle-outline-btn">
                  SERVICE RECORDS
                </button>
              </div>
            </div>
          </div>

          <div className="profile-side">
            <div className="contact-card">
              <div className="contact-icon">⌕</div>

              <div className="contact-block">
                <p className="profile-mini-label">PRIMARY CONTACT</p>
                <p className="contact-value">+976 {phone}</p>
              </div>

              <div className="contact-block">
                <p className="profile-mini-label">EMAIL ASSOCIATION</p>
                <p className="contact-email">{email}</p>
              </div>
            </div>

            <div className="membership-card">
              <div className="membership-top-row">
                <span className="membership-badge">✦</span>
                <span className="membership-legacy">LEGACY</span>
              </div>

              <h4>
                PREMIUM
                <br />
                ACCESS
              </h4>

              <div className="membership-bottom-row">
                <p>EXPIRES DEC 2025</p>
                <span>→</span>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-info-grid">
          <div className="info-column">
            <h5>SECURITY</h5>
            <ul>
              <li>Biometric Authentication</li>
              <li>Encryption Keys</li>
            </ul>
          </div>

          <div className="info-column">
            <h5>PREFERENCES</h5>
            <ul>
              <li>Concierge Language</li>
              <li>Unit System</li>
            </ul>
          </div>

          <div className="info-column">
            <h5>DOCUMENTS</h5>
            <ul>
              <li>Digital Warranty</li>
              <li>Ownership Certificate</li>
            </ul>
          </div>
        </section>

        <section className="profile-concierge-cta">
          <div className="profile-concierge-copy">
            <h3>THE LEXUS CONCIERGE</h3>
            <p>
              Personalized assistance for your vehicle, including maintenance
              scheduling and exclusive event access, available 24/7.
            </p>
          </div>

          <Link to="/service" className="profile-cta-btn">
            CONTACT PERSONAL ASSISTANT
          </Link>
        </section>
      </main>

      <footer className="profile-footer">
        <div className="profile-footer-logo">LEXUS MONGOLIA</div>

        <div className="profile-footer-links">
          <a href="/">PRIVACY</a>
          <a href="/">TERMS</a>
          <a href="/">CONTACT</a>
        </div>

        <div className="profile-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
