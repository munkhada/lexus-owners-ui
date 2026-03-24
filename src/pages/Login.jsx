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

  const cleanPhone = (value) => value.replace(/\D/g, "");

  const sendOtp = async (e) => {
    e.preventDefault();
    setError("");

    const normalizedPhone = cleanPhone(phone);

    if (!normalizedPhone) {
      setError("Утасны дугаараа оруулна уу");
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

      setPhone(normalizedPhone);
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

    const normalizedPhone = cleanPhone(phone);
    const normalizedOtp = cleanPhone(otp);

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
    <div className="dark min-h-screen bg-[#131313] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#1b1b1b_0%,#131313_100%)]">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5DsUTodphcVmXkDHW1Qr6EH6NJ3SDwEw72AEyo_H24Rsk41BjIz4Ad5xepxHyGprp6oP0gySXuWtCd-0-ZvqIq91WrMiNuoJLNSWFR3IgfqDI_VeYqj_YMLXT8ksIDjXza0Y78h7M_atnqEiR-WNwGTRd68gCDE6r9otfxa2FURtAZbhalDPT_uVFDQa9USzO9bf6OTWpjea_imLx10UzUPsN2MNaJusVMS2MNaJusVMS2MUl6yWt0xHVmyLV24M4rFG7YaqTtNsA4folCPX8"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#131313]" />
      </div>

      {/* Main */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-12">
        {/* Brand */}
        <div className="absolute top-12 left-12">
          <h1 className="text-xl font-black tracking-[0.3em]">
            LEXUS MONGOLIA
          </h1>
        </div>

        <div className="max-w-5xl w-full grid lg:grid-cols-12 gap-20 items-end">
          {/* Left */}
          <div className="lg:col-span-7 space-y-10">
            <span className="text-xs tracking-[0.4em] text-gray-500 uppercase">
              Verified Collective
            </span>

            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Welcome to the <br />
              <span className="font-extrabold italic">Lexus Mongolia</span>
              <br />
              Collective
            </h2>

            <p className="text-gray-400 max-w-sm">
              Private access for verified owners only.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-5">
            <div className="space-y-10">
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase">
                Authentication Required
              </p>

              {step === 1 ? (
                <form onSubmit={sendOtp} className="space-y-10">
                  {/* Phone */}
                  <div className="border-b border-white/10 pb-4 flex items-center gap-4">
                    <span className="text-gray-500 text-2xl">+976</span>
                    <input
                      type="tel"
                      placeholder="00 000 000"
                      value={phone}
                      onChange={(e) =>
                        setPhone(cleanPhone(e.target.value))
                      }
                      className="bg-transparent w-full text-2xl tracking-widest outline-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <div className="flex flex-col items-start gap-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white text-black py-4 px-10 font-bold uppercase text-sm flex items-center gap-4 w-fit min-w-[220px] hover:opacity-90 transition"
                    >
                      {loading ? "Sending..." : "Get OTP"} →
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={verifyOtp} className="space-y-10">
                  {/* Phone display */}
                  <div className="text-gray-400">
                    +976 {phone}
                  </div>

                  {/* OTP */}
                  <div className="border-b border-white/10 pb-4">
                    <input
                      type="text"
                      placeholder="OTP"
                      value={otp}
                      onChange={(e) =>
                        setOtp(cleanPhone(e.target.value))
                      }
                      className="bg-transparent w-full text-2xl tracking-[0.3em] outline-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <div className="flex flex-col items-start gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white text-black py-4 px-10 font-bold uppercase text-sm flex items-center gap-4 w-fit min-w-[220px] hover:opacity-90 transition"
                    >
                      {loading ? "Verifying..." : "Login"} →
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setOtp("");
                        setError("");
                      }}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      ← Change number
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
