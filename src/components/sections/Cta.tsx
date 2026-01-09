import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CtaSection() {
    return (
        <section className="bg-black">
            <div className="mx-auto max-w-6xl px-6 py-24 text-center">
                <h2 className="text-3xl md:text-5xl font-light tracking-[0.25em]">
                    PUNYA MASALAH DENGAN IPHONE <br /> ATAU IPAD?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-sm text-white/65 leading-relaxed">
                    Perbaiki sekarang. Konsultasi dulu biar jelas langkahnya (mock text).
                </p>

                <div className="mt-10 flex justify-center text-white/70 text-4xl">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className="mt-6 flex justify-center text-white/70 text-5xl">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>

                <Link
                    href="/lokasi"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-600 px-10 py-4 text-xs font-semibold tracking-[0.22em] text-white hover:bg-sky-500"
                >
                    HUBUNGI KAMI
                </Link>
            </div>
        </section>
    );
}
