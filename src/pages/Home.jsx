import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
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

  const customerName =
    user?.name || user?.customer_name || user?.full_name || "Lexus Owner";

  const vehicle =
    user?.model || user?.vehicle || user?.car_model || "Lexus LX 600";

  const membership =
    user?.membership || user?.membership_level || "Elite";

  if (!user) return null;

  return (
    <div className="home-page">
      <div className="home-bg"></div>

      <nav className="home-nav">
        <div className="home-logo">LEXUS MONGOLIA</div>

        <div className="home-nav-links">
          <Link to="/home" className="active">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/service">Concierge</Link>
          <Link to="/promo">Benefits</Link>
        </div>

        <div className="home-nav-actions">
          <button onClick={logout} className="home-account-btn">
            Sign Out
          </button>
        </div>
      </nav>

      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-left">
            <div className="verified-row">
              <span className="verified-dot"></span>
              <span>Verified Owner</span>
            </div>

            <h1 className="home-title">
              Welcome Back,
              <br />
              {customerName}
            </h1>
          </div>

          <div className="summary-card">
            <div className="summary-block">
              <p className="summary-label">Current Vehicle</p>
              <p className="summary-value">{vehicle}</p>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-block">
              <p className="summary-label">Membership Level</p>
              <p className="summary-value">{membership}</p>
            </div>
          </div>
        </section>

        <section className="entry-grid">
          <Link to="/profile" className="entry-card">
            <div className="entry-top">
              <span className="entry-icon">◌</span>
              <span className="entry-number">01</span>
            </div>

            <div className="entry-bottom">
              <h2>Profile</h2>
              <p>
                Manage your personal data and digital garage settings.
              </p>
              <div className="entry-line"></div>
            </div>
          </Link>

          <Link to="/service" className="entry-card">
            <div className="entry-top">
              <span className="entry-icon">◌</span>
              <span className="entry-number">02</span>
            </div>

            <div className="entry-bottom">
              <h2>Support Concierge</h2>
              <p>
                Direct priority access to your personal Lexus advisor.
              </p>
              <div className="entry-line"></div>
            </div>
          </Link>

          <Link to="/promo" className="entry-card">
            <div className="entry-top">
              <span className="entry-icon">◌</span>
              <span className="entry-number">03</span>
            </div>

            <div className="entry-bottom">
              <h2>Lexus Benefits</h2>
              <p>
                Exclusive invitations and premium lifestyle rewards.
              </p>
              <div className="entry-line"></div>
            </div>
          </Link>
        </section>

        <section className="home-feature">
          <div className="feature-image"></div>

          <div className="feature-content">
            <h3>
              Craftsmanship
              <br />
              Reimagined
            </h3>

            <p>
              Experience the Omotenashi philosophy through every touchpoint of
              your ownership journey. Every detail is tailored for your needs.
            </p>

            <button className="feature-btn">Explore Heritage</button>
          </div>
        </section>
      </main>
    </div>
  );
}
