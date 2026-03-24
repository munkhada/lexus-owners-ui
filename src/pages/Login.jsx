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
    <div className="dark min-h-screen bg-[#131313] text-white overflow-hidden font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#1b1b1b_0%,#131313_100%)]">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            className="w-full h-full object-cover"
            alt="Abstract Lexus background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5DsUTodphcVmXkDHW1Qr6EH6NJ3SDwEw72AEyo_H24Rsk41BjIz4Ad5xepxHyGprp6oP0gySXuWtCd-0-ZvqIq91WrMiNuoJLNSWFR3IgfqDI_VeYqj_YMLXT8ksIDjXza0Y78h7M_atnqEiR-WNwGTRd68gCDE6r9otfxa2FURtAZbhalDPT_uVFDQa9USzO9bf6OTWpjea_imLx10UzUPsN2MNaJusVMS2MUl6yWt0xHVmyLV24M4rFG7YaqTtNsA4folCPX8"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#131313]" />
      </div>

      {/* Main */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-12">
        {/* Brand */}
        <div className="absolute top-12 left-12">
          <h1 className="text-xl font-black tracking-[0.3em] text-white">
            LEXUS MONGOLIA
          </h1>
        </div>

        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-20 items-end">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.4em] text-gray-500 opacity-60 block">
                Verified Collective
              </span>
              <h2 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter text-white">
                Welcome to the <br />
                <span className="font-extrabold italic">Lexus Mongolia</span>{" "}
                <br />
                Collective
              </h2>
            </div>

            <p className="max-w-sm text-lg leading-relaxed font-light text-gray-400">
              Private access for verified owners only. A digital sanctuary for
              those who demand precision.
            </p>
          </div>

          {/* Right form */}
          <div className="lg:col-span-5 w-full">
            <div className="space-y-12">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Authentication Required
                </p>
                <p className="text-sm text-gray-300 opacity-80">
                  {step === 1
                    ? "Enter your registered phone number to continue."
                    : "Enter the OTP code sent to your phone."}
                </p>
              </div>

              {step === 1 ? (
                <form className="space-y-10" onSubmit={sendOtp}>
                  <div className="relative w-full border-b border-white/10 focus-within:border-white transition-all duration-700 ease-in-out">
                    <label className="sr-only" htmlFor="phone">
                      Phone Number
                    </label>
                    <div className="flex items-center space-x-4 pb-4">
                      <span className="text-gray-500 text-2xl font-light">
                        +976
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="00 000 000"
                        value={phone}
                        onChange={(e) => setPhone(cleanPhone(e.target.value))}
                        className="bg-transparent border-none p-0 w-full text-2xl tracking-widest text-white focus:ring-0 focus:outline-none placeholder:text-gray-600 font-light"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 tracking-wide">{error}</p>
                  )}

                  <div className="flex flex-col space-y-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-white text-black py-6 px-12 font-bold uppercase tracking-[0.2em] text-sm flex justify-between items-center active:scale-[0.98] transition-all duration-300 disabled:opacity-60"
                    >
                      <span>{loading ? "Sending..." : "Get OTP"}</span>
                      <span className="text-lg">→</span>
                    </button>

                    <button
                      type="button"
                      className="inline-flex items-center space-x-4 text-left w-fit text-gray-500 hover:text-white transition-colors"
                    >
                      <div className="h-[1px] w-12 bg-gray-600" />
                      <span className="text-[10px] uppercase tracking-[0.3em]">
                        Request Access
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <form className="space-y-10" onSubmit={verifyOtp}>
                  <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                        Registered Number
                      </p>
                      <p className="text-xl tracking-widest text-white">
                        +976 {phone}
                      </p>
                    </div>

                    <div className="relative w-full border-b border-white/10 focus-within:border-white transition-all duration-700 ease-in-out">
                      <label className="sr-only" htmlFor="otp">
                        OTP
                      </label>
                      <div className="flex items-center space-x-4 pb-4">
                        <input
                          id="otp"
                          name="otp"
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(cleanPhone(e.target.value))}
                          className="bg-transparent border-none p-0 w-full text-2xl tracking-[0.4em] text-white focus:ring-0 focus:outline-none placeholder:text-gray-600 font-light"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-red-400 tracking-wide">{error}</p>
                  )}

                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-white text-black py-6 px-12 font-bold uppercase tracking-[0.2em] text-sm flex justify-between items-center active:scale-[0.98] transition-all duration-300 disabled:opacity-60"
                    >
                      <span>{loading ? "Verifying..." : "Login"}</span>
                      <span className="text-lg">→</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setOtp("");
                        setError("");
                      }}
                      className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                    >
                      ← Change phone number
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="absolute bottom-12 right-12 flex items-center space-x-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500">
            Encrypted Server Connection Stable
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-12 left-12 flex flex-col items-start space-y-2">
        <p className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">
          © 2024 LEXUS MONGOLIA. ALL RIGHTS RESERVED.
        </p>
        <div className="flex space-x-6">
          <a
            className="text-[9px] tracking-[0.2em] text-gray-500 uppercase hover:text-white transition-colors duration-400"
            href="#"
          >
            Terms
          </a>
          <a
            className="text-[9px] tracking-[0.2em] text-gray-500 uppercase hover:text-white transition-colors duration-400"
            href="#"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
