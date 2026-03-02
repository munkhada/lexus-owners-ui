import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:4000";

export default function Login() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const sendOtp = async () => {
        setError("");

        try {
            const res = await fetch(`${API}/check-phone?phone=${encodeURIComponent(phone)}`);
            const data = await res.json();

            if (!data.success) {
                setError(data.message || "Нэвтрэх боломжгүй");
                return;
            }

            const otpRes = await fetch(`${API}/send-otp?phone=${encodeURIComponent(phone)}`);
            const otpData = await otpRes.json();

            if (!otpData.success) {
                setError(otpData.message || "OTP илгээж чадсангүй");
                return;
            }

            setStep(2);
        } catch (e) {
            setError("Backend-тэй холбогдож чадсангүй");
        }
    };

    const verifyOtp = async () => {
        setError("");

        try {
            const res = await fetch(
                `${API}/verify-otp?phone=${encodeURIComponent(phone)}&otp=${encodeURIComponent(otp)}`
            );
            const data = await res.json();

            if (!data.success) {
                setError(data.message || "Нэвтрэхэд алдаа гарлаа");
                return;
            }

            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/home");
        } catch {
            setError("Нэвтрэхэд алдаа гарлаа");
        }
    };

    return (
        <div className="center">
            <div className="card">
                <h1>LEXUS OWNERS</h1>

                {step === 1 && (
                    <>
                        <input
                            placeholder="Утасны дугаар"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button onClick={sendOtp}>OTP АВАХ</button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <input
                            placeholder="OTP код (123456)"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button onClick={verifyOtp}>НЭВТРЭХ</button>
                    </>
                )}

                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
}