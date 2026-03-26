import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-bg"></div>

      {/* NAV */}
      <nav className="profile-nav">
        <div className="profile-logo">LEXUS MONGOLIA</div>

        <div className="profile-nav-links">
          <Link to="/home">Home</Link>
          <Link to="/profile" className="active">Profile</Link>
          <Link to="/service">Concierge</Link>
          <Link to="/promo">Benefits</Link>
        </div>

        <button className="profile-account-btn" onClick={logout}>
          ○
        </button>
      </nav>

      <main className="profile-main">

        {/* HEADER */}
        <section className="profile-header">
          <div>
            <p className="profile-eyebrow">Account Overview</p>
            <h1 className="profile-name">BAT-ERDENE</h1>
            <p className="profile-status">Verified Premium Owner</p>
          </div>

          <div className="profile-id">
            <p>Membership ID</p>
            <strong>LX-9911-0001</strong>
          </div>
        </section>

        {/* GRID */}
        <section className="profile-grid">

          {/* CAR */}
          <div className="profile-car">
            <div className="profile-car-image"></div>

            <div className="profile-car-content">
              <h2>2024 LX 600</h2>
              <p>Plate: 0001 UBZ</p>
              <button>Service Records</button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="profile-side">

            <div className="profile-contact">
              <p>Primary Contact</p>
              <strong>+976 9911XXXX</strong>

              <p>Email</p>
              <strong>b.erdene@lexus.mn</strong>
            </div>

            <div className="profile-card">
              <p className="tag">LEGACY</p>
              <h3>Premium Access</h3>
              <span>Expires Dec 2025 →</span>
            </div>

          </div>

        </section>

        {/* BOTTOM */}
        <section className="profile-bottom">
          <div>
            <h4>Security</h4>
            <p>Biometric Authentication</p>
            <p>Encryption Keys</p>
          </div>

          <div>
            <h4>Preferences</h4>
            <p>Concierge Language</p>
            <p>Unit System</p>
          </div>

          <div>
            <h4>Documents</h4>
            <p>Digital Warranty</p>
            <p>Ownership Certificate</p>
          </div>
        </section>

      </main>
    </div>
  );
}
