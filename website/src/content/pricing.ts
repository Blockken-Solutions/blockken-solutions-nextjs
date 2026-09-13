import type { PricingContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const pricing: PricingContent = {
  sectionLabel: "Prijzen & pakketten",
  heading: "Transparante pakketten — kies wat past bij uw situatie.",
  subheading:
    "Van een snelle website tot een volledig digitaal maatwerk met koppelingen aan uw bestaande tools.",
  extraBlockNote:
    "Blocks zijn beschikbaar vanaf het pakket Website + Blocks. Eén Block zit inbegrepen; extra Blocks kosten vanaf € 399 eenmalig plus € 15/mnd.",
  extraContentNote:
    "Liever dat wij het doen? Wij passen teksten en afbeeldingen voor u aan vanaf € 49/mnd (tot 2 wijzigingsrondes per maand, doorgaans binnen 5 werkdagen).",
  blocksCatalogLink: {
    label: "Bekijk de catalogus →",
    href: "/blocks",
  },
  tiers: [
    {
      id: "digitale-fundering",
      name: "Digitale fundering",
      audience:
        "Voor bedrijven die een snelle, professionele website willen — zonder Blocks.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 999",
        features: [
          "Volledig op maat — geen standaardtemplate",
          "Zelf teksten & afbeeldingen aanpassen",
          "Basis vindbaarheid (SEO)",
          "Lokale SEO-setup",
          "Cookiebanner & GDPR-conforme basissetup (incl. contactformulier)",
          "Persoonlijke onboarding",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 49",
        features: [
          "100% veilige EU-hosting",
          "Zorgeloos onderhoud (back-ups & updates)",
        ],
      },
      cta: {
        label: "Plan een gesprek →",
        href: contactPlanSection(),
      },
    },
    {
      id: "website-plus-blocks",
      name: "Website + Blocks",
      audience:
        "Voor bedrijven die online bestellen, klantvragen beantwoorden of reviews willen aanpakken — met één Block inbegrepen.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 1.899",
        features: [
          "Alles uit Digitale fundering",
          "Gevonden worden in Google én ChatGPT (en vergelijkbare tools)",
          "Mooie voorvertoning als u uw link deelt via WhatsApp of LinkedIn",
          "1 Block naar keuze inbegrepen",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 149",
        features: [
          "Alles uit het basisabonnement",
          "Wij onderhouden uw Blocks — updates en hosting inbegrepen",
        ],
      },
      isPopular: true,
      cta: {
        label: "Plan een gesprek →",
        href: contactPlanSection(),
      },
    },
    {
      id: "digitaal-maatwerk",
      name: "Digitaal maatwerk",
      audience:
        "Voor bedrijven met complexe processen en bestaande software.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 3.500",
        features: [
          "Alles uit Website + Blocks",
          "Koppelingen met uw bestaande software (boekhouding, CRM, agenda, webshop, …)",
          "Blocks & functionaliteiten op maat",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 299",
        features: [
          "Alles uit het Website + Blocks-abonnement",
          "Koppelingen met uw bestaande software beheren wij voor u",
          "Prioritaire support (vaste contactpersoon)",
        ],
      },
      cta: {
        label: "Plan een gesprek →",
        href: contactPlanSection(),
      },
    },
  ],
};
