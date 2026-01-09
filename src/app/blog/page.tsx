import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";

const posts = [
    {
        title: "Kenapa baterai iPhone cepat drop?",
        excerpt: "Beberapa penyebab umum: health menurun, background activity, suhu, dan charger.",
        date: "2026-01-01",
    },
    {
        title: "Layar retak: ganti kaca atau ganti LCD?",
        excerpt: "Tergantung kerusakan. Kalau touch/warna bermasalah biasanya perlu ganti LCD.",
        date: "2026-01-02",
    },
    {
        title: "Tips perawatan port charger",
        excerpt: "Bersihkan debu dengan aman dan hindari kabel yang longgar.",
        date: "2026-01-03",
    },
];

export default function BlogPage() {
    return (
        <main>
            <Container className="py-14">
                <SectionTitle
                    eyebrow="Blog"
                    title="Artikel & Tips"
                    subtitle="Contoh blog statis (frontend-only)."
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {posts.map((p) => (
                        <article
                            key={p.title}
                            className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition"
                        >
                            <div className="text-xs text-white/60">{p.date}</div>
                            <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                            <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
                            <div className="mt-5 inline-flex text-xs text-white/70">
                                Read more →
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </main>
    );
}
