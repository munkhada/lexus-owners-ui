import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import "./profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [manualOpen, setManualOpen] = useState(false);

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
    "И-мэйл бүртгэлгүй";

  const vinNumber =
    user?.vinNumber ||
    user?.["Vin number"] ||
    "VIN NOT FOUND";

  const ownerDate =
    user?.ownerDate ||
    user?.["Автомашин хүлээлгэн өгсөн огноо"] ||
    "Огноо байхгүй";

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

  const manualUrl = useMemo(() => {
    const m = String(model).toLowerCase();

    if (m.includes("gx")) return "https://heyzine.com/flip-book/b2bfd2fd3b.html";
    if (m.includes("rx350h")) return "https://heyzine.com/flip-book/82883d2628.html";
    if (m.includes("rx350")) return "https://heyzine.com/flip-book/08e87f3b55.html";
    if (m.includes("rx500")) return "https://heyzine.com/flip-book/e15cbff4f9.html";
    if (m.includes("lx")) return "https://heyzine.com/flip-book/78a93d8ca6.html";
    if (m.includes("nx")) return "https://heyzine.com/flip-book/0faf118dd8.html";

    return "";
  }, [model]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginExpiresAt");
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-bg" />

      <nav className="profile-nav">
        <div className="profile-logo">LEXUS MUNKHADA</div>

        <div className="profile-nav-links">
          <Link to="/home">НҮҮР ХУУДАС</Link>
          <Link to="/profile" className="active">
            МИНИЙ ХУУДАС
          </Link>
          <Link to="/service">ТӨЛӨӨЛӨГЧ</Link>
          <Link to="/promo">УРАМШУУЛАЛ</Link>
        </div>

        <button className="profile-account-btn" onClick={logout}>
          ГАРАХ
        </button>
      </nav>

      <main className="profile-main">
        <section className="profile-hero">
          <div className="profile-hero-left">
            <p className="profile-eyebrow">ЕРӨНХИЙ МЭДЭЭЛЭЛ</p>
            <h1 className="profile-name">{fullName}</h1>

            <div className="profile-owner-row">
              <span className="profile-owner-line" />
              <p>ГИШҮҮНЧЛЭЛ ХҮЧИНТЭЙ</p>
            </div>
          </div>
        </section>

        <section className="profile-grid">
          <div
            className="vehicle-card"
            style={{ backgroundImage: `url(${getCarImage(model)})` }}
          >
            <div className="vehicle-card-overlay" />

            <div className="vehicle-top">
              <h2>БҮРТГЭЛТЭЙ МАШИН</h2>
              <p>Таны идэвхтэй автомашины мэдээлэл</p>
            </div>

            <div className="vehicle-bottom">
              <h3>{String(model).toUpperCase()}</h3>

              <div className="vehicle-meta-row">
                <div>
                  <span className="vehicle-meta-label">VIN NUMBER</span>
                  <strong>{vinNumber}</strong>
                </div>

                <button
                  className="vehicle-outline-btn"
                  onClick={() => {
                    if (manualUrl) {
                      setManualOpen(true);
                    } else {
                      alert("Энэ загварт гарын авлага бүртгэгдээгүй байна.");
                    }
                  }}
                >
                  ЗАСВАРЫН ТҮҮХ
                </button>
              </div>
            </div>
          </div>

          <div className="profile-side">
            <div className="contact-card">
              <div className="contact-icon">⌕</div>

              <div className="contact-block">
                <p className="profile-mini-label">ҮНДСЭН ХОЛБОО БАРИХ</p>
                <p className="contact-value">+976 {phone}</p>
              </div>

              <div className="contact-block">
                <p className="profile-mini-label">И-МЭЙЛ ХАЯГ</p>
                <p className="contact-email">{email}</p>
              </div>
            </div>

            <div className="membership-card">
              <div className="membership-top-row">
                <span className="membership-badge">✦</span>
                <span className="membership-legacy">ГИШҮҮН</span>
              </div>

              <h4>
                ГИШҮҮНЧЛЭЛ
                <br />
                ЭХЭЛСЭН ОГНОО
              </h4>

              <div className="membership-bottom-row">
                <p>{ownerDate}</p>
                <span>→</span>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-info-grid">
          <div className="info-column">
            <h5>АЮУЛГҮЙ БАЙДАЛ</h5>
            <ul>
              <li>Biometric Authentication</li>
              <li>Encryption Keys</li>
            </ul>
          </div>

          <div className="info-column">
            <h5>ТОХИРГОО</h5>
            <ul>
              <li>Concierge Language</li>
              <li>Unit System</li>
            </ul>
          </div>

          <div className="info-column">
            <h5>БАРИМТ БИЧИГ</h5>
            <ul>
              <li>Digital Warranty</li>
              <li>Ownership Certificate</li>
            </ul>
          </div>
        </section>

        <section className="profile-concierge-cta">
          <div className="profile-concierge-copy">
            <h3>ЛЕКСУС ТӨЛӨӨЛӨГЧ</h3>
            <p>
              Таны автомашинтай холбоотой тусламж, үйлчилгээ, арга хэмжээний
              мэдээллийг эндээс авах боломжтой.
            </p>
          </div>

          <Link to="/service" className="profile-cta-btn">
            ТӨЛӨӨЛӨГЧТЭЙ ХОЛБОГДОХ
          </Link>
        </section>
      </main>

      <footer className="profile-footer">
        <div className="profile-footer-logo">LEXUS MUNKHADA</div>

        <div className="profile-footer-links">
          <a href="/">НУУЦЛАЛ</a>
          <a href="/">НӨХЦӨЛ</a>
          <a href="/">ХОЛБОО БАРИХ</a>
        </div>

        <div className="profile-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {manualOpen && (
        <div className="manual-overlay" onClick={() => setManualOpen(false)}>
          <div className="manual-modal" onClick={(e) => e.stopPropagation()}>
            <div className="manual-header">
              <h4>{String(model).toUpperCase()} ГАРЫН АВЛАГА</h4>
              <div className="manual-actions">
                <a
                  href={manualUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="manual-open-link"
                >
                  ШИНЭ ЦОНХООР НЭЭХ
                </a>
                <button
                  className="manual-close-btn"
                  onClick={() => setManualOpen(false)}
                >
                  ХААХ
                </button>
              </div>
            </div>

            <div className="manual-body">
              <iframe
                src={manualUrl}
                title="Heyzine Manual"
                className="manual-iframe"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
