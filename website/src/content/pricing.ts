import type { PricingContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const websiteVisibilityFeature =
  "Gevonden worden in Google, lokaal online, en in AI-zoektools zoals ChatGPT (en vergelijkbare tools) — met een mooie voorvertoning als u uw link deelt via WhatsApp of LinkedIn";

const websiteBaseSetupFeatures = [
  "Volledig op maat — geen standaardtemplate",
  websiteVisibilityFeature,
  "Cookiebanner & GDPR-conforme basissetup (incl. contactformulier)",
  "Persoonlijke onboarding",
];

const hostingSubscriptionFeatures = [
  "100% veilige EU-hosting",
  "Zorgeloos onderhoud (back-ups & updates)",
];

export const pricing: PricingContent = {
  sectionLabel: "Prijzen & pakketten",
  heading: "Transparante pakketten — kies wat past bij uw situatie.",
  subheading:
    "Van een website die wij voor u beheren tot zelf beheren met een CMS, of maatwerk met automatisering.",
  pricingNote:
    "Exacte prijs na een kort gesprek — onderstaande bedragen zijn richtprijzen, behalve bij maatwerk (op aanvraag).",
  tiers: [
    {
      id: "volledig-beheerd",
      name: "Volledig beheerd",
      audience:
        "Voor wie een professionele website wil zonder zelf in te loggen — wij passen teksten en foto's voor u aan.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 999",
        features: [
          ...websiteBaseSetupFeatures,
          "Geen CMS — wij regelen content-updates voor u",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 99",
        features: [
          ...hostingSubscriptionFeatures,
          "Content-updates door ons (limieten in offerte)",
        ],
      },
      cta: {
        label: "Plan een gesprek →",
        href: contactPlanSection(),
      },
    },
    {
      id: "zelf-beheren",
      name: "Zelf beheren",
      audience:
        "Voor wie zelf teksten en afbeeldingen wil aanpassen via een eenvoudig beheersysteem.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 999",
        features: [
          ...websiteBaseSetupFeatures,
          "Eenvoudig CMS om zelf content aan te passen",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 49",
        features: hostingSubscriptionFeatures,
      },
      isPopular: true,
      cta: {
        label: "Plan een gesprek →",
        href: contactPlanSection(),
      },
    },
    {
      id: "maatwerk-automatisering",
      name: "Maatwerk & automatisering",
      audience:
        "Voor bedrijven met koppelingen, eigen flows of slimme hulp waar repetitief werk tijd kost.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Op aanvraag",
        features: [
          "Alles wat past bij uw situatie — websites, koppelingen en maatwerk",
          "Koppelingen met uw bestaande software (agenda, CRM, boekhouding, …)",
          "Praktische automatisering en AI waar het tijd wint",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Op aanvraag",
        features: [
          "EU-hosting en onderhoud op maat",
          "Beheer van koppelingen en maatwerk",
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
