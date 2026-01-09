import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import WhySection from "@/components/sections/Why";
import TestimonialsSection from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhySection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
