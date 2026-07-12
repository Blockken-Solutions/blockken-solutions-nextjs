import { AboutSection } from "@/components/landing/about-section";
import { AgentPreview } from "@/components/landing/agent-preview";
import { FaqTeaser } from "@/components/landing/faq-teaser";
import { FooterCta } from "@/components/landing/footer-cta";
import { Hero } from "@/components/landing/hero";
import { ScanLeadMagnet } from "@/components/landing/scan-lead-magnet";
import { ServicesBento } from "@/components/landing/services-bento";
import { home } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero content={home.hero} />
      <ServicesBento content={home.services} />
      <AgentPreview content={home.agents} />
      <ScanLeadMagnet content={home.scan} />
      <AboutSection content={home.about} />
      <FaqTeaser content={home.faqTeaser} />
      <FooterCta content={home.footerCta} />
    </>
  );
}
