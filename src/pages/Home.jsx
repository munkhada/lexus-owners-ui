import "./Home.css";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showWomensPopup, setShowWomensPopup] = useState(false);

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
      localStorage.removeItem("loginExpiresAt");
      navigate("/");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("loginExpiresAt");
    navigate("/");
  };

  const profile = useMemo(() => {
    const firstname =
      user?.firstname || user?.firstName || user?.name || user?.["Нэр"] || "Хэрэглэгч";

    const lastname =
      user?.lastname || user?.lastName || user?.["Овог"] || "";

    const fullName =
      `${lastname ? `${lastname} ` : ""}${firstname}`.trim() || "Lexus Owner";

    const model =
      user?.model || user?.["Model-Detail"] || user?.vehicle || "LEXUS LX 600";

    const membership = user?.membership || "Гишүүнчлэл хүчинтэй";

    return {
      fullName: fullName.toUpperCase(),
      model: String(model).toUpperCase(),
      membership,
    };
  }, [user]);

  if (!user) return null;

  return (
    <div className="home-page">
      <div className="home-bg" />

      <nav className="home-nav">
        <div className="home-logo">LEXUS MUNKHADA</div>

        <div className="home-nav-links">
          <Link to="/home" className="active">
            НҮҮР ХУУДАС
          </Link>
          <Link to="/profile">МИНИЙ ХУУДАС</Link>
          <Link to="/service">ТӨЛӨӨЛӨГЧ</Link>
          <Link to="/promo">УРАМШУУЛАЛ</Link>
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
              <span>VERIFIED OWNER</span>
            </div>

            <h1 className="home-title">
              ТАВТАЙ МОРИЛ,
              <br />
              {profile.fullName}
            </h1>
          </div>

          <aside className="home-summary-card">
            <div className="home-summary-block">
              <div className="home-summary-label">ТАНЫ МАШИН</div>
              <div className="home-summary-value">{profile.model}</div>
            </div>

            <div className="home-summary-divider"></div>

            <div className="home-summary-block">
              <div className="home-summary-label">ГИШҮҮНЧЛЭЛ</div>
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
              <h2>МИНИЙ ХУУДАС</h2>
              <p>
                Таны автомашинтай холбоотой мэдээлэл тус хуудсанд байрших
                байна.
              </p>
            </div>
          </Link>

          <Link to="/service" className="home-card concierge-card-home">
            <div className="home-card-top">
              <span className="home-card-icon">⌕</span>
              <span className="home-card-number">02</span>
            </div>

            <div className="home-card-bottom">
              <h2>ТӨЛӨӨЛӨГЧ</h2>
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
          <div className="home-feature-image">
            <img src="/womens.jpg" alt="Womens club" />
          </div>

          <div className="home-feature-copy">
            <h3>
              ОНЦЛОХ
              <br />
              МЭДЭЭЛЭЛ
            </h3>

            <p>
              Лексусын эзэмшигчдэд зориулсан онцгой мэдээ, урилга, шинэ
              үйлчилгээ болон тусгай мэдээллийг эндээс хүлээн авна.
            </p>

            <button
              className="home-feature-btn"
              onClick={() => setShowWomensPopup(true)}
            >
              ДЭЛГЭРЭНГҮЙ
            </button>
          </div>

          <div className="home-feature-side-empty"></div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="home-footer-brand">LEXUS MUNKHADA</div>

        <div className="home-footer-links">
          <div>
            <a href="/">ЗАГВАРУУД</a>
            <a href="/">ТУРШЛАГА</a>
            <a href="/">ҮЙЛЧИЛГЭЭ</a>
          </div>

          <div>
            <a href="/">НУУЦЛАЛ</a>
            <a href="/">НӨХЦӨЛ</a>
            <a href="/">ХОЛБОО БАРИХ</a>
          </div>
        </div>

        <div className="home-footer-copy">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {showWomensPopup && (
        <div className="popup-overlay" onClick={() => setShowWomensPopup(false)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <h4>WOMEN'S CLUB</h4>
            <p>Тун удахгүй нээгдэнэ.</p>
            <button onClick={() => setShowWomensPopup(false)}>ХААХ</button>
          </div>
        </div>
      )}
    </div>
  );
}
