import type { PricingContent } from "@/content/types";
import { homeSection } from "@/lib/paths";

export const pricing: PricingContent = {
  sectionLabel: "PRIJZEN & PAKKETTEN",
  heading: "Transparante pakketten voor elke fase van uw groei.",
  subheading:
    "Kies het pakket dat past bij uw ambities — van een solide online basis tot volledig digitaal maatwerk.",
  extraAgentNote:
    "Een extra kant-en-klare agent kost vanaf € 499 eenmalige setup plus € 49/mnd — hetzelfde tarief als elke kant-en-klare agent uit onze bibliotheek. In Slimme Groei zit één kant-en-klare agent inbegrepen.",
  tiers: [
    {
      id: "digitale-fundering",
      name: "Digitale Fundering",
      audience:
        "Voor bedrijven die een snelle, professionele basis willen zonder technisch gedoe.",
      setup: {
        label: "Setup (Eenmalig)",
        price: "Vanaf € 999",
        features: [
          "Volledig op maat gemaakt (Next.js)",
          "Gebruiksvriendelijk Beheersysteem",
          "Basis Vindbaarheid (SEO)",
          "Lokale SEO Setup",
          "Persoonlijke Onboarding",
        ],
      },
      subscription: {
        label: "Abonnement (Maandelijks)",
        price: "Vanaf € 49",
        features: [
          "100% Veilige EU-Hosting",
          "Zorgeloos Onderhoud (back-ups & updates)",
        ],
      },
      cta: {
        label: "Plan een gesprek →",
        href: homeSection("contact"),
      },
    },
    {
      id: "slimme-groei",
      name: "Slimme Groei",
      audience:
        "Voor bedrijven die handwerk willen elimineren met slimme automatisering.",
      setup: {
        label: "Setup (Eenmalig)",
        price: "Vanaf € 1.899",
        features: [
          "Alles uit de Digitale Fundering",
          "AI-Vindbaarheid (AI SEO)",
          "Dynamische Social Previews",
          "1 AI-Assistent uit de bibliotheek (bijv. Factuur Extractor of Support Agent 24/7)",
        ],
      },
      subscription: {
        label: "Abonnement (Maandelijks)",
        price: "Vanaf € 149",
        features: [
          "Alles uit het basisabonnement",
          "AI-Systeemkosten inbegrepen (fair-use)",
          "Kwaliteitsmonitoring van de AI",
        ],
      },
      isPopular: true,
      cta: {
        label: "Plan een gesprek →",
        href: homeSection("contact"),
      },
    },
    {
      id: "digitaal-maatwerk",
      name: "Digitaal Maatwerk",
      audience:
        "Voor bedrijven met complexe processen en bestaande software.",
      setup: {
        label: "Setup (Eenmalig)",
        price: "Vanaf € 3.500",
        features: [
          "Alles uit Slimme Groei",
          "Systeem Integraties (Teamleader, Exact Online, Yuki, Billit)",
          "Custom AI & Functionaliteiten",
        ],
      },
      subscription: {
        label: "Abonnement (Maandelijks)",
        price: "Vanaf € 299",
        features: [
          "Alles uit het Slimme Groei abonnement",
          "API & Connectie-beheer",
          "Prioritaire support",
        ],
      },
      cta: {
        label: "Plan een gesprek →",
        href: homeSection("contact"),
      },
    },
  ],
};
