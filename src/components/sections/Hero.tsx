import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-[78vh] w-full"
            style={{
                backgroundImage: "url(/images/hero.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
                <h1 className="neon-title text-5xl md:text-6xl font-extrabold tracking-[0.25em]">
                    AREPAIR
                </h1>

                <div className="mt-5 w-10 h-[2px] bg-white/70" />

                <p className="mt-4 text-xs md:text-sm tracking-[0.35em] text-white/85">
                    JASA SERVICE IPHONE TERBAIK
                </p>

                <Link
                    href="/lokasi"
                    className="mt-10 inline-flex rounded-full bg-sky-600 px-10 py-4 text-xs font-semibold tracking-[0.22em] text-white hover:bg-sky-500"
                >
                    HUBUNGI KAMI
                </Link>
            </div>
        </section>
    );
}
