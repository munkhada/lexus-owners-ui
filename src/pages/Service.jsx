import { Link, useNavigate } from "react-router-dom";
import "./service.css";

export default function Service() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginExpiresAt");
    navigate("/");
  };

  const advisorNameRaw =
    user?.advisor ||
    user?.["Лексусын төлөөлөгч"] ||
    "Т.Цэцэнхүү";

  const advisorName = String(advisorNameRaw).trim();

  const getAdvisorData = (name) => {
    const n = name.toLowerCase().replace(/\s+/g, "");

    if (n.includes("жавхлан")) {
      return {
        name: "Б.Жавхлан",
        phone: "99991514",
        email: "javkhlan@munkhada.com",
        image: "/Javkhlan.jpg",
      };
    }

    if (n.includes("цэцэнхүү")) {
      return {
        name: "Т.Цэцэнхүү",
        phone: "99994214",
        email: "tsetsenkhuu@munkhada.com",
        image: "/Tsetsenkhuu.jpg",
      };
    }

    if (n.includes("хулан")) {
      return {
        name: "Т.Хулан",
        phone: "99998997",
        email: "khulan@munkhada.com",
        image: "/Khulan.jpg",
      };
    }

    return {
      name: advisorName || "Лексусын төлөөлөгч",
      phone: "99994214",
      email: "tsetsenkhuu@munkhada.com",
      image: "/Tsetsenkhuu.jpg",
    };
  };

  const advisor = getAdvisorData(advisorName);

  return (
    <div className="service-page">
      <div className="service-bg" />

      <nav className="service-nav">
        <div className="service-logo">LEXUS MUNKHADA</div>

        <div className="service-nav-links">
          <Link to="/home">НҮҮР ХУУДАС</Link>
          <Link to="/profile">МИНИЙ ХУУДАС</Link>
          <Link to="/service" className="active">
            ТӨЛӨӨЛӨГЧ
          </Link>
          <Link to="/promo">УРАМШУУЛАЛ</Link>
        </div>

        <button className="service-account-btn" onClick={logout}>
          ГАРАХ
        </button>
      </nav>

      <main className="service-main">
        <section className="service-hero">
          <div className="service-hero-left">
            <h1>
              ТАНТАЙ
              <br />
              ХОЛБОГДСОН
              <br />
              ТӨЛӨӨЛӨГЧ
            </h1>

            <p>
              Таны автомашинтай холбоотой үйлчилгээ, зөвлөгөө, мэдээллийг
              хариуцсан Лексусын төлөөлөгчийн мэдээлэл.
            </p>
          </div>

          <div className="service-hero-right">
            <p className="service-status-label">ТӨЛӨВ</p>
            <p className="service-status-value">● ИДЭВХТЭЙ</p>
          </div>
        </section>

        <section className="service-advisor-card">
          <div
            className="service-advisor-image"
            style={{ backgroundImage: `url(${advisor.image})` }}
          />

          <div className="service-advisor-overlay">
            <div className="service-advisor-copy">
              <p className="service-advisor-label">ТАНЫ ХАРИУЦСАН ТӨЛӨӨЛӨГЧ</p>
              <h2>{advisor.name}</h2>
              <p className="service-advisor-subtext">
                Танд үйлчилгээ, зөвлөгөө, мэдээлэл хүргэх үндсэн төлөөлөгч
              </p>

              <div className="service-advisor-meta">
                <div>
                  <span>УТАС</span>
                  <strong>{advisor.phone}</strong>
                </div>

                <div>
                  <span>И-МЭЙЛ</span>
                  <strong>{advisor.email}</strong>
                </div>
              </div>
            </div>

            <div className="service-advisor-actions">
              <a className="service-call-btn" href={`tel:${advisor.phone}`}>
                ЗАЛГАХ
              </a>
              <a className="service-mail-btn" href={`mailto:${advisor.email}`}>
                И-МЭЙЛ ИЛГЭЭХ
              </a>
            </div>
          </div>
        </section>

        <section className="service-info-grid">
          <div className="service-info-card">
            <div className="service-icon">⌕</div>
            <h3>Холбоо барих</h3>
            <p>
              Та өөрийн хариуцсан төлөөлөгчтэй шууд холбогдож үйлчилгээтэй
              холбоотой мэдээлэл авч болно.
            </p>
          </div>

          <div className="service-info-card">
            <div className="service-icon">✦</div>
            <h3>Үйлчилгээний зөвлөгөө</h3>
            <p>
              Засвар үйлчилгээ, дагалдах хэрэгсэл, автомашины зөвлөмжийн талаар
              мэдээлэл авах боломжтой.
            </p>
          </div>
        </section>

        <section className="service-contact-panel">
          <div className="service-contact-left">
            <h3>ШУУД ХОЛБОО БАРИХ</h3>
            <p>
              Доорх товчоор утасдах эсвэл и-мэйл илгээх боломжтой.
            </p>
          </div>

          <div className="service-contact-right">
            <a className="service-big-action" href={`tel:${advisor.phone}`}>
              {advisor.phone} ДУГААР РУУ ЗАЛГАХ
            </a>
            <a
              className="service-big-action secondary"
              href={`mailto:${advisor.email}`}
            >
              {advisor.email} РУУ ИЛГЭЭХ
            </a>
          </div>
        </section>
      </main>

      <footer className="service-footer">
        <div className="service-footer-brand">LEXUS MUNKHADA</div>

        <div className="service-footer-grid">
          <div>
            <a href="/">НУУЦЛАЛ</a>
            <a href="/">НӨХЦӨЛ</a>
            <a href="/">ХОЛБОО БАРИХ</a>
          </div>

          <div>
            <p>ТӨЛӨӨЛӨГЧ</p>
            <span>{advisor.name}</span>
          </div>

          <div>
            <p>УТАС</p>
            <strong>{advisor.phone}</strong>
          </div>
        </div>

        <div className="service-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
