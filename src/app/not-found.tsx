import Link from "next/link";
import Container from "@/components/sections/Container";

export default function NotFound() {
    return (
        <Container className="py-24">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
                <h1 className="text-3xl font-semibold">Halaman tidak ditemukan</h1>
                <p className="mt-2 text-white/70">
                    Route yang kamu buka tidak ada.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                    Kembali ke Home
                </Link>
            </div>
        </Container>
    );
}
