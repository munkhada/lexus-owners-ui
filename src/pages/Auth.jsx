import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fullPhone = "976" + phone;

  // ✅ Backend base URL (Vercel env -> VITE_API_URL)
  const API_BASE =
    import.meta.env.VITE_API_URL || "https://lexus-munkhada-1.onrender.com";

  // 1️⃣ утас шалгах
  const checkPhone = async () => {
    try {
      setError("");

      const res = await fetch(`${API_BASE}/check-phone?phone=${fullPhone}`);
      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Бүртгэлгүй дугаар");
        return;
      }

      const otpRes = await fetch(`${API_BASE}/send-otp?phone=${fullPhone}`);
      const otpData = await otpRes.json();

      if (!otpData.success) {
        setError(otpData.message || "OTP илгээж чадсангүй");
        return;
      }

      setStep(2);
    } catch (e) {
      console.error(e);
      setError("Backend-тэй холбогдож чадсангүй");
    }
  };

  // 2️⃣ OTP шалгах
  const verifyOtp = async () => {
    try {
      setError("");

      const res = await fetch(
        `${API_BASE}/verify-otp?phone=${fullPhone}&otp=${otp}`
      );
      const data = await res.json();

      if (!data.success) {
        setError(data.message || "OTP буруу");
        return;
      }

      navigate("/profile?phone=" + fullPhone);
    } catch (e) {
      console.error(e);
      setError("Backend-тэй холбогдож чадсангүй");
    }
  };

  return (
    <div style={{ color: "#fff" }}>
      <h2>LEXUS OWNERS</h2>

      {step === 1 && (
        <>
          <div>
            +976{" "}
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="99112222"
            />
          </div>
          <button onClick={checkPhone}>Код авах</button>
        </>
      )}

      {step === 2 && (
        <>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP код"
          />
          <button onClick={verifyOtp}>Нэвтрэх</button>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
