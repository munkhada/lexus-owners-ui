import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");

    if (!saved) {
      navigate("/");
      return;
    }

    try {
      const parsed = JSON.parse(saved);
      setUser(parsed);
    } catch {
      localStorage.removeItem("user");
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const profile = useMemo(() => {
    const firstname =
      user?.firstname ||
      user?.firstName ||
      user?.name ||
      "Lexus";

    const lastname =
      user?.lastname ||
      user?.lastName ||
      "";

    const fullName =
      `${lastname} ${firstname}`.trim() || "Lexus Owner";

    const model =
      user?.model ||
      user?.vehicle ||
      user?.car_model ||
      user?.modelDetail ||
      "LEXUS RX";

    const phone = user?.phone || "99110000";
    const email = user?.email || "No email registered";
    const membership = user?.membership || "Гишүүнчлэл хүчинтэй";
    const plate = user?.plate || "0001 UBZ";
    const ownerDate = user?.ownerDate || user?.deliveryDate || "2024-12-01";

    const maskedPhone =
      phone.length >= 8 ? `+976 ${phone.slice(0, 4)} XXXX` : `+976 ${phone}`;

    const membershipId = `LX-${phone.slice(0, 4) || "9911"}-0001`;

    return {
      fullName,
      model,
      phone,
      email,
      membership,
      plate,
      ownerDate,
      maskedPhone,
      membershipId,
    };
  }, [user]);

  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-bg"></div>

      <nav className="profile-nav">
        <div className="profile-logo">LEXUS MONGOLIA</div>

        <div className="profile-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/profile" className="active">
            Profile
          </Link>
          <Link to="/service">Concierge</Link>
          <Link to="/promo">Benefits</Link>
        </div>

        <div className="profile-nav-actions">
          <button className="profile-account-btn" onClick={logout}>
            Sign Out
          </button>
        </div>
      </nav>

      <main className="profile-main">
        <header className="profile-hero">
          <div className="profile-hero-left">
            <p className="profile-eyebrow">Account Overview</p>
            <h1 className="profile-name">{profile.fullName}</h1>

            <div className="profile-owner-row">
              <span className="profile-owner-line"></span>
              <p>Verified Premium Owner</p>
            </div>
          </div>

          <div className="profile-hero-right">
            <p className="profile-mini-label">Membership ID</p>
            <p className="profile-membership-id">{profile.membershipId}</p>
          </div>
        </header>

        <section className="profile-grid">
          <div className="vehicle-card">
            <div className="vehicle-card-overlay"></div>

            <div className="vehicle-top">
              <h2>Registered Vehicle</h2>
              <p>Active ownership portfolio</p>
            </div>

            <div className="vehicle-bottom">
              <h3>{profile.model}</h3>

              <div className="vehicle-meta-row">
                <div>
                  <span className="vehicle-meta-label">Plate Number</span>
                  <strong>{profile.plate}</strong>
                </div>

                <button className="vehicle-outline-btn">
                  Service Records
                </button>
              </div>
            </div>
          </div>

          <div className="profile-side">
            <div className="contact-card">
              <div className="contact-icon">⌕</div>

              <div className="contact-block">
                <p className="profile-mini-label">Primary Contact</p>
                <p className="contact-value">{profile.maskedPhone}</p>
              </div>

              <div className="contact-block">
                <p className="profile-mini-label">Email Association</p>
                <p className="contact-email">{profile.email}</p>
              </div>
            </div>

            <div className="membership-card">
              <div className="membership-top-row">
                <span className="membership-badge">✦</span>
                <span className="membership-legacy">LEGACY</span>
              </div>

              <h4>
                Premium
                <br />
                Access
              </h4>

              <div className="membership-bottom-row">
                <p>{profile.membership}</p>
                <span>→</span>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-info-grid">
          <div className="info-column">
            <h5>Security</h5>
            <ul>
              <li>Biometric Authentication</li>
              <li>Encryption Keys</li>
            </ul>
          </div>

          <div className="info-column">
            <h5>Preferences</h5>
            <ul>
              <li>Concierge Language</li>
              <li>Unit System</li>
            </ul>
          </div>

          <div className="info-column">
            <h5>Documents</h5>
            <ul>
              <li>Digital Warranty</li>
              <li>Ownership Certificate</li>
            </ul>
          </div>
        </section>

        <section className="profile-concierge-cta">
          <div className="profile-concierge-copy">
            <h3>The Lexus Concierge</h3>
            <p>
              Personalized assistance for your {profile.model}, including
              maintenance scheduling and premium owner support.
            </p>
          </div>

          <Link to="/service" className="profile-cta-btn">
            Contact Personal Assistant
          </Link>
        </section>
      </main>

      <footer className="profile-footer">
        <div className="profile-footer-logo">LEXUS MONGOLIA</div>

        <div className="profile-footer-links">
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Contact</a>
        </div>

        <div className="profile-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
