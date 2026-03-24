import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API =
  import.meta.env.VITE_API_URL || "https://lexus-munkhada-1.onrender.com";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onlyDigits = (v) => v.replace(/\D/g, "");

  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");

    const normalized = onlyDigits(phone);

    if (normalized.length < 8) {
      setError("Утасны дугаараа зөв оруулна уу");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${API}/check-phone?phone=${encodeURIComponent(normalized)}`
      );
      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Нэвтрэх боломжгүй");
        return;
      }

      const otpRes = await fetch(
        `${API}/send-otp?phone=${encodeURIComponent(normalized)}`
      );
      const otpData = await otpRes.json();

      if (!otpData.success) {
        setError("OTP илгээж чадсангүй");
        return;
      }

      setPhone(normalized);
      setStep(2);
    } catch {
      setError("Серверийн алдаа");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const res = await fetch(
        `${API}/verify-otp?phone=${phone}&otp=${otp}`
      );
      const data = await res.json();

      if (!data.success) {
        setError("Буруу OTP");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/home");
    } catch {
      setError("Алдаа гарлаа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-bg"></div>

      <div className="login-container">
        {/* LEFT */}
        <div className="login-left">
          <p className="tag">VERIFIED COLLECTIVE</p>

          <h1 className="title">
            Welcome to the <br />
            <span>Lexus Munkhada</span>
            <br />
            Collective
          </h1>

          <p className="desc">
            Private access for verified owners only. A digital sanctuary for
            those who demand precision.
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <p className="small">AUTHENTICATION REQUIRED</p>

          {step === 1 ? (
            <form onSubmit={sendOtp}>
              <div className="input-line">
                <span>+976</span>
                <input
                  placeholder="00 000 000"
                  value={phone}
                  onChange={(e) =>
                    setPhone(onlyDigits(e.target.value))
                  }
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button className="btn">
                {loading ? "SENDING..." : "LOGIN"} →
              </button>
            </form>
          ) : (
            <form onSubmit={verifyOtp}>
              <div className="input-line">
                <input
                  placeholder="OTP CODE"
                  value={otp}
                  onChange={(e) => setOtp(onlyDigits(e.target.value))}
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button className="btn">
                {loading ? "VERIFYING..." : "LOGIN"} →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
