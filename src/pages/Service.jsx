import Header from "../components/Header";

export default function Service() {
    return (
        <div style={styles.page}>
            <Header />

            <div style={styles.container}>
                {/* HERO */}
                <section style={styles.hero}>
                    <h1 style={styles.title}>Үйлчилгээ</h1>
                    <p style={styles.subtitle}>
                        Lexus автомашинд зориулагдсан баталгаат болон урсгал үйлчилгээ
                    </p>

                    <div style={styles.badges}>
                        <span style={styles.badge}>Баталгаа</span>
                        <span style={styles.badge}>Урсгал</span>
                        <span style={styles.badge}>Интервал</span>
                    </div>
                </section>

                {/* БАТАЛГАА */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Үйлдвэрийн баталгаат засвар</h2>
                    <p style={styles.text}>
                        Шинэ автомашины баталгаат хугацаа нь <b>3 жил эсвэл 100,000 км</b>
                        – аль түрүүлж дууссанаар хүчинтэй.
                    </p>

                    <ul style={styles.list}>
                        <li>Үйлдвэрийн гэмтэлтэй эд ангид хамаарна</li>
                        <li>Албан ёсны төвд үйлчилгээ хийлгэсэн байх</li>
                    </ul>
                </section>

                {/* БҮТЭН ЭД АНГИ */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Бүтэн эд анги солих</h2>
                    <p style={styles.text}>
                        Баталгаат засвараар зөвхөн гэмтэлтэй эд ангийг солино. Бүтнээр солих
                        тохиолдолд бүрэн оношилгоо шаардлагатай.
                    </p>

                    <ul style={styles.list}>
                        <li>Хөдөлгүүр</li>
                        <li>Блок</li>
                        <li>Хурдны хайрцаг (автомат / механик)</li>
                    </ul>
                </section>

                {/* УРСГАЛ ҮЙЛЧИЛГЭЭ */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Урсгал үйлчилгээ</h2>

                    <div style={styles.cards}>
                        <div style={styles.card}>
                            <h4>Давуу тал</h4>
                            <ul>
                                <li>Ирээдүйн өндөр зардлаас сэргийлнэ</li>
                                <li>Дахин борлуулах үнэ цэнийг хадгална</li>
                            </ul>
                        </div>

                        <div style={styles.card}>
                            <h4>30,000 км хүртэл</h4>
                            <ul>
                                <li>Хөдөлгүүрийн тос солих</li>
                                <li>Тосны шүүр солих</li>
                                <li>Явах эд ангийн оношилгоо</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ИНТЕРВАЛ */}
                <section style={styles.section}>
                    <h2 style={styles.sectionTitle}>Үйлчилгээний интервал</h2>

                    <div style={styles.table}>
                        {[
                            ["1,000 км", "2,500 км дотор"],
                            ["5,000 км", "2,500 – 7,500 км"],
                            ["10,000 км", "7,500 – 12,500 км"],
                            ["15,000 км", "12,500 – 17,500 км"],
                            ["20,000 км", "17,500 – 22,500 км"],
                            ["30,000 км", "27,500 – 32,500 км"],
                        ].map(([a, b], i) => (
                            <div key={i} style={styles.row}>
                                <span>{a}</span>
                                <span style={{ opacity: 0.7 }}>{b}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACT */}
                <section style={styles.contact}>
                    <p>📞 7595-4444</p>
                    <p>Лексусын төлөөлөгчөөр дамжуулан цаг захиална</p>
                </section>
            </div>
        </div>
    );
}

/* ================= STYLES ================= */

const styles = {
    page: {
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Montserrat, sans-serif",
    },

    container: {
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 40px",
    },

    hero: {
        marginBottom: 80,
    },

    title: {
        fontSize: 44,
        fontWeight: 600,
        marginBottom: 12,
    },

    subtitle: {
        opacity: 0.7,
        marginBottom: 24,
    },

    badges: {
        display: "flex",
        gap: 10,
    },

    badge: {
        padding: "6px 12px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.08)",
        fontSize: 12,
    },

    section: {
        marginBottom: 70,
    },

    sectionTitle: {
        fontSize: 24,
        marginBottom: 16,
    },

    text: {
        opacity: 0.75,
        lineHeight: 1.7,
        marginBottom: 16,
    },

    list: {
        paddingLeft: 20,
        opacity: 0.8,
        lineHeight: 1.8,
    },

    cards: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
    },

    card: {
        background: "rgba(255,255,255,0.05)",
        padding: 20,
        borderRadius: 14,
        lineHeight: 1.7,
    },

    table: {
        borderTop: "1px solid rgba(255,255,255,0.1)",
    },

    row: {
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
    },

    contact: {
        marginTop: 80,
        opacity: 0.7,
    },
};
