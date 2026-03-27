import { Link, useNavigate } from "react-router-dom";
import "./promo.css";

export default function Promo() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginExpiresAt");
    navigate("/");
  };

  const mapEmbedUrl =
    "https://www.google.com/maps?q=Munkhada&output=embed";

  return (
    <div className="benefits-page">
      <div className="benefits-bg" />

      <nav className="benefits-nav">
        <div className="benefits-logo">LEXUS MUNKHADA</div>

        <div className="benefits-nav-links">
          <Link to="/home">НҮҮР ХУУДАС</Link>
          <Link to="/profile">МИНИЙ ХУУДАС</Link>
          <Link to="/service">ТӨЛӨӨЛӨГЧ</Link>
          <Link to="/promo" className="active">
            УРАМШУУЛАЛ
          </Link>
        </div>

        <button className="benefits-account-btn" onClick={logout}>
          ГАРАХ
        </button>
      </nav>

      <main className="benefits-main">
        <section className="benefits-hero">
          <div className="benefits-hero-left">
            <p className="benefits-eyebrow">LEXUS УРАМШУУЛАЛ</p>
            <h1 className="benefits-title">
              ОНЦГОЙ
              <br />
              ДАВУУ
              <br />
              ЭРХ
            </h1>
          </div>

          <div className="benefits-hero-right">
            <p>
              Лексусын эзэмшигчдэд зориулсан тусгай хөнгөлөлт, урилга, хамтрагч
              байгууллагын давуу эрхийн мэдээлэл.
            </p>
          </div>
        </section>

        <section className="benefits-feature-row">
          <div className="benefits-large-feature">
            <img src="/mulounge.jpg" alt="MU Lounge" />
            <div className="benefits-large-overlay">
              <span>TEST</span>
            </div>
          </div>

          <div className="benefits-large-feature">
            <img src="/emerge.jpg" alt="Emerge" />
            <div className="benefits-large-overlay">
              <span>TEST</span>
            </div>
          </div>
        </section>

        <section className="benefits-card-grid">
          <div className="benefits-mini-card-item">
            <div className="benefits-mini-media">
              <img src="/airport lounge.jpg" alt="Airport Lounge" />
              <div className="benefits-mini-overlay">
                <span>TEST</span>
              </div>
            </div>
          </div>

          <div className="benefits-mini-card-item">
            <div className="benefits-mini-media">
              <img src="/owner benefit.jpg" alt="Owner Benefit" />
              <div className="benefits-mini-overlay">
                <span>TEST</span>
              </div>
            </div>
          </div>

          <div className="benefits-mini-card-item">
            <div className="benefits-mini-media">
              <img src="/cryo.jpg" alt="Cryo" />
              <div className="benefits-mini-overlay">
                <span>TEST</span>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-map-section">
          <div className="benefits-map-copy">
            <p className="benefits-section-label">GOOGLE MAP ХАЯГ</p>
            <h3>MUNKHADA COMPANY</h3>
            <p>
              Доорх газрын зураг дээрээс Munkhada компанийн байршлыг харж,
              шууд map нээх боломжтой.
            </p>
            <a
              className="benefits-map-link"
              href="https://maps.app.goo.gl/XtMS57ZjXTTNUfoo7"
              target="_blank"
              rel="noreferrer"
            >
              GOOGLE MAP НЭЭХ
            </a>
          </div>

          <div className="benefits-map-card">
            <iframe
              title="Munkhada Map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="benefits-directory">
          <div className="benefits-directory-header">
            <p className="benefits-section-label">
              ТУН УДАХГҮЙ ХЭРЭГЖИХ УРАМШУУЛАЛ
            </p>
            <span>УДАЛГҮЙ</span>
          </div>

          <div className="benefits-directory-list">
            <div className="benefits-directory-row">
              <span>01</span>
              <strong>TEST</strong>
              <p>Тун удахгүй нэмэгдэх шинэ урамшууллын мэдээлэл.</p>
              <a href="/">ХҮЛЭЭГДЭЖ БАЙНА</a>
            </div>

            <div className="benefits-directory-row">
              <span>02</span>
              <strong>TEST</strong>
              <p>Лексусын эзэмшигчдэд зориулсан шинэ хамтрагч санал.</p>
              <a href="/">ХҮЛЭЭГДЭЖ БАЙНА</a>
            </div>

            <div className="benefits-directory-row">
              <span>03</span>
              <strong>TEST</strong>
              <p>Тусгай эрх, урилга, хөнгөлөлтийн дараагийн шат.</p>
              <a href="/">ХҮЛЭЭГДЭЖ БАЙНА</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="benefits-footer">
        <div className="benefits-footer-brand">LEXUS MUNKHADA</div>

        <div className="benefits-footer-links">
          <div>
            <a href="/">ТУРШЛАГА</a>
            <a href="/">УРАМШУУЛАЛ</a>
            <a href="/">МЭДЭЭЛЭЛ</a>
            <a href="/">ӨВ СОЁЛ</a>
          </div>

          <div>
            <a href="/">НУУЦЛАЛ</a>
            <a href="/">НӨХЦӨЛ</a>
            <a href="/">ХОЛБОО БАРИХ</a>
          </div>
        </div>

        <div className="benefits-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
