import "./Home.css";
import { useEffect, useMemo, useState } from "react";
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
      setUser(JSON.parse(saved));
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
      user?.firstname || user?.firstName || user?.name || "Owner";

    const lastname = user?.lastname || user?.lastName || "";

    const fullName =
      `${lastname ? `${lastname}, ` : ""}${firstname}`.trim() || "Lexus Owner";

    const model =
      user?.model || user?.vehicle || user?.car_model || "LEXUS LX 600";

    const membership = user?.membership || "Elite";

    return {
      fullName: fullName.toUpperCase(),
      model: String(model).toUpperCase(),
      membership,
    };
  }, [user]);

  if (!user) return null;

  return (
    <div className="home-page">
      <div className="home-bg"></div>

      <nav className="home-nav">
        <div className="home-logo">LEXUS MUNKHADA</div>

        <div className="home-nav-links">
          <Link to="/home" className="active">
            Нүүр хуудас
          </Link>
          <Link to="/profile">Миний хуудас</Link>
          <Link to="/service">Төлөөлөгч</Link>
          <Link to="/promo">Урамшуулал</Link>
        </div>

        <button className="home-account-btn" onClick={logout}>
          ГАРАХ
        </button>
      </nav>

      <main className="home-main">
        <section className="home-hero">
          <div className="home-hero-copy">
            <div className="home-verified">
              <span className="home-verified-dot"></span>
              <span>Verified Owner</span>
            </div>

            <h1 className="home-title">
              ТАВТАЙ МОРИЛ,
              <br />
              {profile.fullName}
            </h1>
          </div>

          <aside className="home-summary-card">
            <div className="home-summary-block">
              <div className="home-summary-label">Таны машин</div>
              <div className="home-summary-value">{profile.model}</div>
            </div>

            <div className="home-summary-divider"></div>

            <div className="home-summary-block">
              <div className="home-summary-label">Гишүүнчлэл</div>
              <div className="home-summary-value">★ {profile.membership}</div>
            </div>
          </aside>
        </section>

        <section className="home-cards">
          <Link to="/profile" className="home-card profile-card-home">
            <div className="home-card-top">
              <span className="home-card-icon">◉</span>
              <span className="home-card-number">01</span>
            </div>

            <div className="home-card-bottom">
              <h2>Миний хуудас</h2>
              <p>Таны автомшаинтай холбоотой мэдээлэл тус хуудаст байршиж байна.</p>
            </div>
          </Link>

          <Link to="/service" className="home-card concierge-card-home">
            <div className="home-card-top">
              <span className="home-card-icon">⌕</span>
              <span className="home-card-number">02</span>
            </div>

            <div className="home-card-bottom">
              <h2>
                ТӨЛӨӨЛӨГЧ
              </h2>
              <p>Тантай холбогдсон Лексусын төлөөлөгч.</p>
            </div>
          </Link>

          <Link to="/promo" className="home-card benefits-card-home">
            <div className="home-card-top">
              <span className="home-card-icon">✦</span>
              <span className="home-card-number">03</span>
            </div>

            <div className="home-card-bottom">
              <h2>
                LEXUS
                <br />
                УРАМШУУЛАЛ
              </h2>
              <p>Лексусын эзэмшигчдэд зориулсан үйлчилгээ.</p>
            </div>
          </Link>
        </section>

        <section className="home-feature-section">
          <div className="home-feature-image"></div>

          <div className="home-feature-copy">
            <h3>
              ОНЦЛОХ
              <br />
              МЭДЭЭЛЭЛ
            </h3>

            <p>
              Зөвхөн танд зориулсан урамшуулал, арга хэмжээний мэдээлэл.
            </p>

            <button className="home-feature-btn">ДАРАХE</button>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-footer-brand">LEXUS MUNKHADA</div>

        <div className="home-footer-links">
          <div>
            <a href="/">DISCOVER</a>
            <a href="/">MODELS</a>
            <a href="/">EXPERIENCE</a>
          </div>

          <div>
            <a href="/">LEGAL</a>
            <a href="/">PRIVACY</a>
            <a href="/">TERMS</a>
            <a href="/">CONTACT</a>
          </div>
        </div>

        <div className="home-footer-copy">
          © 2026 MUNKHADA LLC. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
