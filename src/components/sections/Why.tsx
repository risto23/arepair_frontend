import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faChartLine, faTrophy, faCheck } from "@fortawesome/free-solid-svg-icons";

const reasons = [
    {
        icon: faBolt,
        title: "ANTRIAN YANG\nCEPAT",
        desc:
            "Biar kamu nggak buang waktu. Proses dibuat ringkas dan jelas dari awal.",
    },
    {
        icon: faChartLine,
        title: "ANALISA YANG\nAKURAT",
        desc:
            "Pengecekan teliti supaya solusi tepat, bukan tebak-tebakan.",
    },
    {
        icon: faTrophy,
        title: "SUDAH\nTERBUKTI",
        desc:
            "Kualitas pengerjaan konsisten dan banyak yang balik lagi karena puas.",
    },
    {
        icon: faCheck,
        title: "GRATIS\nKONSULTASI",
        desc:
            "Kamu bisa tanya dulu, jelasin gejala, baru putuskan langkah berikutnya.",
    },
];

export default function WhySection() {
    return (
        <section
            className="relative"
            style={{
                backgroundImage: "url(/images/pcb.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* putih transparan seperti screenshot */}
            <div className="absolute inset-0 bg-white/85" />

            <div className="relative">
                {/* header why */}
                <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
                    <div className="text-xs tracking-[0.35em] text-black/50">INILAH ALASAN</div>
                    <h2 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-[0.08em] text-black">
                        MENGAPA AREPAIR <br className="hidden md:block" />
                        ADALAH JASA SERVICE <br className="hidden md:block" />
                        IPHONE TERBAIK
                    </h2>
                    <div className="section-divider" />
                </div>

                {/* grid 4 alasan */}
                <div className="mx-auto max-w-6xl px-6 pb-24">
                    <div className="mx-auto grid gap-10 md:grid-cols-4 text-center">
                        {reasons.map((r) => (
                            <div key={r.title} className="text-black">
                                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center">
                                    <FontAwesomeIcon icon={r.icon} className="text-5xl text-black/80" />
                                </div>

                                <h3 className="whitespace-pre-line text-lg font-extrabold tracking-[0.08em]">
                                    {r.title}
                                </h3>

                                <p className="mt-4 text-sm text-black/60 leading-relaxed">
                                    {r.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
