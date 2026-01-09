import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer
            className="relative mt-0 border-t border-white/10"
            style={{
                backgroundImage: "url(/images/footer.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/65" />

            <div className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-10 md:grid-cols-4 text-sm">
                    <div>
                        <div className="text-white/90 font-semibold tracking-[0.15em] mb-4">
                            Quick Links
                        </div>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="/lokasi" className="hover:text-white">Lokasi Kami</Link></li>
                            <li><Link href="#" className="hover:text-white">Garansi</Link></li>
                            <li><Link href="#" className="hover:text-white">Tentang Kami</Link></li>
                            <li><Link href="#" className="hover:text-white">Kebijakan Refund</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Lowongan Kerja Teknisi</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-white/90 font-semibold tracking-[0.15em] mb-4">
                            Quick Links
                        </div>
                        <ul className="space-y-2 text-white/70">
                            <li><Link href="/service-iphone" className="hover:text-white">Service iPhone</Link></li>
                            <li><Link href="/service-ipad" className="hover:text-white">Service iPad</Link></li>
                            <li><Link href="/service-macbook" className="hover:text-white">Service Mac</Link></li>
                            <li><Link href="/service-apple-watch" className="hover:text-white">Service Apple Watch</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-white/90 font-semibold tracking-[0.15em] mb-4">
                            Our Stores
                        </div>
                        <ul className="space-y-2 text-white/70">
                            <li>Jakarta Selatan - Kuningan</li>
                            <li>Jakarta Selatan - Blok M</li>
                            <li>Jakarta Timur</li>
                            <li>Depok</li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-white/90 font-semibold tracking-[0.15em] mb-4">
                            Follow Us
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:bg-white/90"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                href="#"
                                className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:bg-white/90"
                                aria-label="Facebook"
                            >
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a
                                href="#"
                                className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:bg-white/90"
                                aria-label="YouTube"
                            >
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/50">
                    © {new Date().getFullYear()} AREPAIR — Frontend Mock
                </div>
            </div>
        </footer>
    );
}
