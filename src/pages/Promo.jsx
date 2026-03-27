import { Link, useNavigate } from "react-router-dom";
import "./promo.css";

export default function Promo() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginExpiresAt");
    navigate("/");
  };

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
              Лексусын эзэмшигчдэд зориулсан тусгай урамшуулал, хөнгөлөлт,
              урилга, давуу эрхийн мэдээлэл энэ хэсэгт байрлана.
            </p>
          </div>
        </section>

        <section className="benefits-feature-card">
          <div className="benefits-feature-image" />

          <div className="benefits-feature-content">
            <h2>Тусгай урилга</h2>
            <p>УЛААНБААТАР — ХААЛТТАЙ АРГА ХЭМЖЭЭ</p>
            <button>УРИЛГА ХҮСЭХ</button>
          </div>
        </section>

        <section className="benefits-grid">
          <div className="benefits-left-copy">
            <p className="benefits-section-label">01 / LIFESTYLE</p>
            <h3>
              ХАМТРАГЧ
              <br />
              ДАВУУ ЭРХ
            </h3>

            <p className="benefits-section-text">
              Тансаг хэрэглээ, ресторан, аялал, wellness үйлчилгээ болон
              Лексусын эзэмшигчдэд зориулсан бусад онцгой саналууд.
            </p>

            <div className="benefits-links-list">
              <a href="/">Shangri-La Boutique Collection →</a>
              <a href="/">Blue Sky Culinary Suite →</a>
            </div>
          </div>

          <div className="benefits-lounge-card">
            <div className="benefits-lounge-top">
              <p>Lexus Lounge Access</p>
              <span>ЧИНГИС ХААН ОЛОН УЛСЫН НИСЭХ БУУДАЛ</span>
            </div>

            <div className="benefits-lounge-center">
              <p>01 LEXUS LOUNGE</p>
              <p>02 SAFETY LOUNGE</p>
            </div>

            <div className="benefits-mini-card">
              <strong>Seamless Transit</strong>
              <p>
                Таны аяллыг илүү тухтай, амар болгох тусгай нэвтрэх боломж.
              </p>
            </div>
          </div>
        </section>

        <section className="benefits-service-block">
          <div className="benefits-service-copy">
            <div className="benefits-watermark">LEXUS</div>

            <h3>
              ДАВУУ
              <br />
              ҮЙЛЧИЛГЭЭ
            </h3>

            <p>
              Таны цаг хугацааг хэмнэх, илүү тав тухтай үйлчилгээ авах боломжийг
              Лексусын эзэмшигчдэд зориулан бэлдэв.
            </p>

            <div className="benefits-service-actions">
              <button className="primary-btn">ҮЙЛЧИЛГЭЭ ЗАХИАЛАХ</button>
              <button className="secondary-btn">ТӨЛӨӨЛӨГЧТЭЙ ХОЛБОГДОХ</button>
            </div>
          </div>

          <div className="benefits-service-image" />
        </section>

        <section className="benefits-directory">
          <div className="benefits-directory-header">
            <p className="benefits-section-label">БҮРЭН ЖАГСААЛТ</p>
            <span>ДЭЛГЭРЭНГҮЙ ҮЗЭХ</span>
          </div>

          <div className="benefits-directory-list">
            <div className="benefits-directory-row">
              <span>01</span>
              <strong>Үнэгүй valet үйлчилгээ</strong>
              <p>
                Сонгогдсон байршлуудад автомашинаа тухтай, хурдан хүлээлгэн
                өгөх боломж.
              </p>
              <a href="/">ҮЗЭХ</a>
            </div>

            <div className="benefits-directory-row">
              <span>02</span>
              <strong>Улирлын detailing</strong>
              <p>
                Автомашины цэвэрлэгээ, хамгаалалтын тусгай үйлчилгээний санал.
              </p>
              <a href="/">ҮЗЭХ</a>
            </div>

            <div className="benefits-directory-row">
              <span>03</span>
              <strong>Онцгой test drive</strong>
              <p>
                Шинэ загваруудыг бусдаас өмнө туршиж үзэх тусгай боломж.
              </p>
              <a href="/">ҮЗЭХ</a>
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
