import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ".//src/index.css";

const API =
  import.meta.env.VITE_API_URL || "https://lexus-munkhada-1.onrender.com";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onlyDigits = (value) => value.replace(/\D/g, "");

  const formatPhone = (value) => {
    const digits = onlyDigits(value).slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`;
    return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");

    const normalizedPhone = onlyDigits(phone);

    if (!normalizedPhone || normalizedPhone.length < 8) {
      setError("Утасны 8 оронтой дугаараа оруулна уу");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${API}/check-phone?phone=${encodeURIComponent(normalizedPhone)}`
      );
      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Нэвтрэх боломжгүй");
        return;
      }

      const otpRes = await fetch(
        `${API}/send-otp?phone=${encodeURIComponent(normalizedPhone)}`
      );
      const otpData = await otpRes.json();

      if (!otpData.success) {
        setError(otpData.message || "OTP илгээж чадсангүй");
        return;
      }

      setPhone(formatPhone(normalizedPhone));
      setStep(2);
    } catch (e) {
      setError("Backend-тэй холбогдож чадсангүй");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    const normalizedPhone = onlyDigits(phone);
    const normalizedOtp = onlyDigits(otp);

    if (!normalizedOtp) {
      setError("OTP кодоо оруулна уу");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${API}/verify-otp?phone=${encodeURIComponent(
          normalizedPhone
        )}&otp=${encodeURIComponent(normalizedOtp)}`
      );
      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Нэвтрэхэд алдаа гарлаа");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch (e) {
      setError("Нэвтрэхэд алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-bg">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5DsUTodphcVmXkDHW1Qr6EH6NJ3SDwEw72AEyo_H24Rsk41BjIz4Ad5xepxHyGprp6oP0gySXuWtCd-0-ZvqIq91WrMiNuoJLNSWFR3IgfqDI_VeYqj_YMLXT8ksIDjXza0Y78h7M_atnqEiR-WNwGTRd68gCDE6r9otfxa2FURtAZbhalDPT_uVFDQa9USzO9bf6OTWpjea_imLx10UzUPsN2MNaJusVMS2MUl6yWt0xHVmyLV24M4rFG7YaqTtNsA4folCPX8"
          alt="Lexus background"
        />
        <div className="login-overlay" />
      </div>

      <header className="login-brand">LEXUS MONGOLIA</header>

      <main className="login-main">
        <section className="login-left">
          <div className="eyebrow">VERIFIED COLLECTIVE</div>

          <h1 className="login-title">
            Welcome to the <br />
            <span>Lexus</span>
            <br />
            <span>Mongolia</span>
            <br />
            Collective
          </h1>

          <p className="login-desc">
            Private access for verified owners only. A digital sanctuary for
            those who demand precision.
          </p>
        </section>

        <section className="login-right">
          <div className="auth-label">AUTHENTICATION REQUIRED</div>
          <div className="auth-desc">
            {step === 1
              ? "Enter your registered phone number to continue."
              : "Enter the OTP code sent to your phone."}
          </div>

          {step === 1 ? (
            <form className="auth-form" onSubmit={sendOtp}>
              <div className="phone-line">
                <span className="country-code">+976</span>
                <input
                  type="tel"
                  placeholder="00 000 000"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="phone-input"
                />
              </div>

              {error ? <div className="auth-error">{error}</div> : null}

              <button type="submit" className="login-btn" disabled={loading}>
                <span>{loading ? "SENDING..." : "LOGIN"}</span>
                <span className="arrow">→</span>
              </button>

              <button type="button" className="request-access">
                <span className="request-line" />
                <span>REQUEST ACCESS</span>
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={verifyOtp}>
              <div className="phone-line readonly-line">
                <span className="country-code">+976</span>
                <div className="readonly-phone">{phone}</div>
              </div>

              <div className="phone-line otp-line">
                <input
                  type="text"
                  placeholder="OTP CODE"
                  value={otp}
                  onChange={(e) => setOtp(onlyDigits(e.target.value))}
                  className="phone-input otp-input"
                />
              </div>

              {error ? <div className="auth-error">{error}</div> : null}

              <button type="submit" className="login-btn" disabled={loading}>
                <span>{loading ? "VERIFYING..." : "LOGIN"}</span>
                <span className="arrow">→</span>
              </button>

              <button
                type="button"
                className="change-number"
                onClick={() => {
                  setStep(1);
                  setOtp("");
                  setError("");
                }}
              >
                ← Change number
              </button>
            </form>
          )}
        </section>
      </main>

      <footer className="login-footer">
        <div className="footer-left">
          <div>© 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.</div>
          <div className="footer-links">
            <a href="/">TERMS</a>
            <a href="/">PRIVACY</a>
          </div>
        </div>

        <div className="footer-right">
          <span className="status-dot" />
          <span>ENCRYPTED SERVER CONNECTION STABLE</span>
        </div>
      </footer>
    </div>
  );
}
