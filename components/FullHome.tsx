import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PackagesSection } from "@/components/PackagesSection";
import { DayToursSection } from "@/components/DayToursSection";
import { MaldivesSection } from "@/components/MaldivesSection";
import MapSection from "@/components/MapSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { HotelsSection } from "@/components/HotelsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CorporateSection } from "@/components/CorporateSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GallerySection } from "@/components/GalleryCard";

export default function FullHome() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <PackagesSection />
        <DayToursSection />
        <MaldivesSection />
        <MapSection />
        <ExperiencesSection />
        <HotelsSection />
        <GallerySection />
        <TestimonialsSection />
        <CorporateSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
