import "./profile.css";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const model = user?.model || user?.["Model-Detail"];
  const name = user?.name || `${user?.Овог || ""} ${user?.Нэр || ""}`;
  const phone = user?.["Утасны дугаар"];
  const email = user?.["И-мэйл хаяг"];

  const getCarImage = (model) => {
    if (!model) return "/LX.jpg";

    const m = model.toLowerCase();

    if (m.includes("lx")) return "/LX.jpg";
    if (m.includes("rx500")) return "/RX500h.jpg";
    if (m.includes("rx350h")) return "/RX350h.jpg";
    if (m.includes("rx350")) return "/RX350.jpg";
    if (m.includes("rx")) return "/RX.jpg";
    if (m.includes("gx")) return "/GX.png";
    if (m.includes("lm")) return "/LM.jpg";
    if (m.includes("nx")) return "/NX.jpg";

    return "/LX.jpg";
  };

  return (
    <div className="profile-page">

      <div className="header">
        <div>LEXUS MONGOLIA</div>
        <div>
          <a href="/home">HOME</a>
          <a href="/profile">PROFILE</a>
          <a href="/service">CONCIERGE</a>
          <a href="/promo">BENEFITS</a>
        </div>
      </div>

      <div className="profile-container">

        <div className="profile-left">
          <p className="small">ACCOUNT OVERVIEW</p>
          <h1 className="name">{name}</h1>
          <p className="tag">Verified Premium Owner</p>

          <div
            className="vehicle-card"
            style={{ backgroundImage: `url(${getCarImage(model)})` }}
          >
            <div className="vehicle-overlay">
              <p className="vehicle-title">REGISTERED VEHICLE</p>
              <h2>{model}</h2>
              <p>Plate: 0001 UBZ</p>
              <button>Service Records</button>
            </div>
          </div>

          <div className="info-grid">
            <div>
              <p className="label">Security</p>
              <p>Biometric Authentication</p>
              <p>Encryption Keys</p>
            </div>

            <div>
              <p className="label">Preferences</p>
              <p>Language</p>
              <p>Unit System</p>
            </div>

            <div>
              <p className="label">Documents</p>
              <p>Warranty</p>
              <p>Ownership Certificate</p>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <div className="contact-card">
            <p className="label">Primary Contact</p>
            <h3>{phone}</h3>

            <p className="label">Email</p>
            <h3>{email}</h3>
          </div>

          <div className="premium-card">
            <p>LEGACY</p>
            <h2>Premium Access</h2>
            <p>Expires Dec 2025 →</p>
          </div>
        </div>

      </div>
    </div>
  );
}
