import Header from "../components/Header";

import gxImg from "../assets/cars/GX.png";
import lmImg from "../assets/cars/LM.png";
import lxImg from "../assets/cars/LX.png";
import nxImg from "../assets/cars/NX.png";
import rx350Img from "../assets/cars/RX350.png";
import rx350hImg from "../assets/cars/RX350H.png";
import rx500hImg from "../assets/cars/RX500H.png";

export default function MyCar() {
    const user = JSON.parse(localStorage.getItem("user"));

    // ===== MODEL → BROCHURE MAP =====
    const brochureMap = {
        LX: "https://heyzine.com/flip-book/78a93d8ca6.html", // LX600
        RX_350: "https://heyzine.com/flip-book/08e87f3b55.html", // RX350 (benzine)
        RX_HYBRID: "https://heyzine.com/flip-book/82883d2628.html", // RX500h + RX350h
        NX: "https://heyzine.com/flip-book/0faf118dd8.html", // NX
        GX: "https://heyzine.com/flip-book/b2bfd2fd3b.html", // GX550
        LM: "https://heyzine.com/flip-book/78a93d8ca6.html", // түр (LM-н гарын авлага байхгүй бол LX рүү түр холбож байна)
    };

    // ===== MODEL → IMAGE MAP =====
    const imageMap = {
        LX: lxImg,
        NX: nxImg,
        GX: gxImg,
        LM: lmImg,
        RX_350: rx350Img,
        RX_HYBRID: rx350hImg, // hybrid-д нэг зураг (хэрвээ хүсвэл rx500hImg болгоод сольж болно)
    };

    // ===== MODEL-ООС KEY ТОДОРХОЙЛОХ =====
    const getModelKey = (model = "") => {
        const m = String(model).toUpperCase().replace(/\s+/g, "");

        // RX hybrid (эхэлж шалгана)
        if (m.includes("RX") && (m.includes("500H") || m.includes("350H"))) {
            return "RX_HYBRID";
        }

        // RX350 (benzine)
        if (m.includes("RX") && m.includes("350")) {
            return "RX_350";
        }

        // other models
        if (m.includes("LX")) return "LX";
        if (m.includes("NX")) return "NX";
        if (m.includes("GX")) return "GX";
        if (m.includes("LM")) return "LM";

        return null;
    };

    const modelKey = getModelKey(user?.model);
    const brochureUrl = modelKey ? brochureMap[modelKey] : null;
    const carImg = modelKey ? imageMap[modelKey] : null;

    return (
        <div style={styles.page}>
            <Header />

            <div style={styles.container}>
                <div style={styles.top}>
                    <div>
                        <h1 style={styles.title}>Хэрэглэгчийн гарын авлага</h1>
                        <p style={styles.subtitle}>
                            {user?.model ? `${user.model} автомашины ашиглалтын гарын авлага` : "Таны автомашины ашиглалтын гарын авлага"}
                        </p>
                    </div>

                    <div style={styles.pill}>
                        {user?.model ? user.model : "Lexus"}
                    </div>
                </div>

                {/* CAR HERO IMAGE */}
                {carImg && (
                    <div style={styles.hero}>
                        <img src={carImg} alt={user?.model || "Lexus"} style={styles.heroImg} />
                    </div>
                )}

                {/* BROCHURE VIEWER */}
                {brochureUrl ? (
                    <div style={styles.viewer}>
                        <iframe
                            src={brochureUrl}
                            allow="clipboard-write"
                            allowFullScreen
                            scrolling="no"
                            style={styles.iframe}
                            title="Lexus Owner Manual"
                        />
                    </div>
                ) : (
                    <div style={styles.empty}>
                        <p style={{ fontSize: 16, margin: 0 }}>
                            Таны автомашины гарын авлага удахгүй нэмэгдэнэ
                        </p>
                        <p style={{ opacity: 0.6, marginTop: 10 }}>
                            ({user?.model || "Unknown model"})
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Montserrat, sans-serif",
    },

    container: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "56px 40px",
    },

    top: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 20,
        marginBottom: 28,
    },

    title: {
        fontSize: 42,
        fontWeight: 700,
        margin: 0,
        letterSpacing: 0.5,
    },

    subtitle: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 10,
        marginBottom: 0,
    },

    pill: {
        background: "#fff",
        color: "#000",
        borderRadius: 999,
        padding: "10px 16px",
        fontWeight: 700,
        fontSize: 13,
        whiteSpace: "nowrap",
        alignSelf: "flex-start",
    },

    hero: {
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
        background:
            "radial-gradient(80% 120% at 70% 50%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.0) 75%)",
        padding: "22px 22px 10px",
        marginBottom: 18,
    },

    heroImg: {
        width: "100%",
        height: "260px",
        objectFit: "contain",
        display: "block",
        filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.65))",
    },

    viewer: {
        background: "#0b0b0b",
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
    },

    iframe: {
        width: "100%",
        height: "78vh",
        border: "none",
        display: "block",
        background: "#0b0b0b",
    },

    empty: {
        border: "1px dashed rgba(255,255,255,0.20)",
        borderRadius: 22,
        padding: 60,
        textAlign: "center",
    },
};