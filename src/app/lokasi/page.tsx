import Container from "@/components/sections/Container";
import SectionTitle from "@/components/sections/SectionTitle";
import LocationCard from "@/components/sections/LocationCard";
import { locations } from "@/data/locations";

export default function LokasiPage() {
    return (
        <main>
            <Container className="py-14">
                <SectionTitle
                    eyebrow="Lokasi"
                    title="Lokasi / Hubungi Kami"
                    subtitle="Pilih cabang terdekat untuk konsultasi (tombol WA masih placeholder)."
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {locations.map((l) => (
                        <LocationCard key={l.title} item={l} />
                    ))}
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
                    <div className="text-lg font-semibold">
                        Datang, Dicek, Dikerjain, Beres.
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                        Ini hanya mock UI. Nanti kalau kamu sudah siap backend + DB, kita sambungkan tombol, form,
                        dan data dinamisnya.
                    </p>
                </div>
            </Container>
        </main>
    );
}
