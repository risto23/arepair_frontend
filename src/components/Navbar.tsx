"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

const nav = [
    { href: "/", label: "HOME" },
    { href: "/service-iphone", label: "SERVICE IPHONE" },
    { href: "/service-ipad", label: "SERVICE IPAD" },
    { href: "/service-apple-watch", label: "SERVICE APPLE WATCH" },
    { href: "/service-macbook", label: "SERVICE MACBOOK" },
    { href: "/blog", label: "BLOG" },
    { href: "/lokasi", label: "LOKASI/HUBUNGI KAMI" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2a2a2a]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-black/35 border border-white/10">
                        <FontAwesomeIcon icon={faCrown} className="text-white/90" />
                    </div>
                    <div className="leading-tight">
                        <div className="text-white font-semibold tracking-[0.2em]">AREPAIR</div>
                        <div className="text-[10px] text-white/60 tracking-[0.22em]">REPAIR SERVICE</div>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.18em]">
                    {nav.map((n) => {
                        const active = pathname === n.href;
                        return (
                            <Link
                                key={n.href}
                                href={n.href}
                                className={`pb-2 transition ${active
                                        ? "text-sky-300 border-b-2 border-sky-400"
                                        : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {n.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
