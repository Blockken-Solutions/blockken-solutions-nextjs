import type { PricingContent } from "@/content/types";
import { homeSection } from "@/lib/paths";

export const pricing: PricingContent = {
  sectionLabel: "PRIJZEN & PAKKETTEN",
  heading: "Transparante pakketten voor elke fase van uw groei.",
  subheading:
    "Kies het pakket dat past bij uw ambities — van een solide online basis tot volledig digitaal maatwerk.",
  tiers: [
    {
      id: "digitale-fundering",
      name: "Digitale Fundering",
      audience:
        "Bedrijven die een snelle, professionele basis willen zonder technisch gedoe.",
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
        "Ondernemers die handwerk willen elimineren met slimme automatisering.",
      setup: {
        label: "Setup (Eenmalig)",
        price: "Vanaf € 1.899",
        features: [
          "Alles uit de Digitale Fundering",
          "AI-Vindbaarheid (AI SEO)",
          "Dynamische Social Previews",
          "1 AI-Assistent uit de bibliotheek (bijv. Factuur Extractor of 24/7 Klantenservice)",
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
        "Gevestigde KMO's met complexe processen en bestaande software.",
      setup: {
        label: "Setup (Eenmalig)",
        price: "Vanaf € 3.500",
        features: [
          "Alles uit Slimme Groei",
          "Systeem Integraties (Teamleader, Exact Online)",
          "Custom AI & Functionaliteiten",
        ],
      },
      subscription: {
        label: "Abonnement (Maandelijks)",
        price: "Vanaf € 299",
        features: [
          "Alles uit het Slimme Groei abonnement",
          "API & Connectie-beheer",
          "Priority Support",
        ],
      },
      cta: {
        label: "Plan een gesprek →",
        href: homeSection("contact"),
      },
    },
  ],
  addons: {
    heading: "Uitbreidingen & Add-ons",
    items: [
      {
        name: "Geautomatiseerde Lead Magneet",
        price: "+ € 250,- eenmalig",
      },
      {
        name: "Extra Standaard AI-Agent",
        price: "+ € 499,- setup / + € 49,- per maand",
      },
      {
        name: "Volledig op maat gemaakte AI-Agent",
        price: "Prijs op aanvraag",
      },
    ],
  },
};
