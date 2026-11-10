import { Header } from "@/components/global/header";
import { Footer } from "@/components/global/footer";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ApproachSection } from "@/components/home/approach-section";
import { ServicesSection } from "@/components/home/services-section";
import { JurisdictionSection } from "@/components/home/jurisdiction-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ConsultationSection } from "@/components/home/consultation-section";
import { FaqSection } from "@/components/home/faq-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <JurisdictionSection />
      <WhyChooseSection />
      <ConsultationSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}