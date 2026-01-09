import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const testimonials = [
    {
        name: "Merlin P.",
        role: "Supervisor",
        text: "Awalnya panik karena device bermasalah. Setelah dicek, penyebabnya ketemu dan beres tanpa drama.",
        avatar: "https://i.pravatar.cc/80?img=32",
    },
    {
        name: "Rasya F.",
        role: "Mahasiswa",
        text: "Pengerjaan cepat dan komunikasinya enak. Dijelasin step-by-step jadi paham apa yang diperbaiki.",
        avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
        name: "Reza F.",
        role: "Guitarist",
        text: "Nggak janji manis. Estimasi jelas, dan selesai sesuai waktu yang dibilang.",
        avatar: "https://i.pravatar.cc/80?img=8",
    },
    {
        name: "Kiki",
        role: "Staff",
        text: "Diagnosa akurat. Setelah perbaikan, device normal lagi dan dicek bareng dulu sebelum pulang.",
        avatar: "https://i.pravatar.cc/80?img=5",
    },
];

export default function TestimonialsSection() {
    return (
        <section
            className="relative"
            style={{
                backgroundImage: "url(/images/testimonials.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative mx-auto max-w-6xl px-6 py-20">
                <div className="text-center">
                    <div className="text-xs tracking-[0.35em] text-white/70">TESTIMONIAL</div>
                    <h2 className="neon-title mt-5 text-3xl md:text-5xl font-extrabold tracking-[0.08em]">
                        PENDAPAT CUSTOMER <br /> KAMI
                    </h2>
                    <div className="section-divider-light" />
                </div>

                <div className="mt-12 space-y-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="font-extrabold tracking-[0.08em] text-black">
                                            {t.name.toUpperCase()}
                                        </div>
                                        <div className="mt-1 flex items-center gap-2 text-xs text-black/45">
                                            <div className="flex gap-1 text-amber-400">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={faStar} />
                                                ))}
                                            </div>
                                            <span className="uppercase tracking-[0.22em]">{t.role}</span>
                                        </div>
                                    </div>
                                </div>

                                <FontAwesomeIcon icon={faTwitter} className="text-sky-500" />
                            </div>

                            <p className="mt-4 text-sm text-black/70 leading-relaxed">
                                {t.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-xs text-white/70 text-center">
                    * Mau review kamu tampil juga? Hubungi CSO setelah perbaikan (placeholder).
                </div>
            </div>
        </section>
    );
}
