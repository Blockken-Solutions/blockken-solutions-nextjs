import dynamic from "next/dynamic";

import { AboutSection } from "@/components/landing/about-section";
import { FaqTeaser } from "@/components/landing/faq-teaser";
import { Hero } from "@/components/landing/hero";
import { HowWeWorkSection } from "@/components/landing/how-we-work-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ServicesBento } from "@/components/landing/services-bento";
import { JsonLd } from "@/components/seo/json-ld";
import { home } from "@/content/home";
import { buildHomeGraph } from "@/lib/structured-data";

const AgentPreview = dynamic(
  () =>
    import("@/components/landing/agent-preview").then((mod) => mod.AgentPreview),
);

const ScanLeadMagnet = dynamic(
  () =>
    import("@/components/landing/scan-lead-magnet").then(
      (mod) => mod.ScanLeadMagnet,
    ),
);

const FooterCta = dynamic(
  () => import("@/components/landing/footer-cta").then((mod) => mod.FooterCta),
);

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomeGraph()} />
      <Hero content={home.hero} />
      <ServicesBento content={home.services} />
      <PricingSection content={home.pricing} />
      <HowWeWorkSection content={home.howWeWork} />
      <AgentPreview content={home.agents} />
      <ScanLeadMagnet content={home.scan} />
      <AboutSection content={home.about} />
      <FaqTeaser content={home.faqTeaser} />
      <FooterCta content={home.footerCta} />
    </>
  );
}
