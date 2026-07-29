import type { PricingContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const pricing: PricingContent = {
  sectionLabel: "Prijzen & pakketten",
  heading: "Transparante pakketten voor elke fase van uw groei.",
  subheading:
    "Kies het pakket dat past bij uw ambities — van een solide online basis tot volledig digitaal maatwerk.",
  extraAgentNote:
    "AI-agents zijn beschikbaar vanaf Slimme groei. Eén kant-en-klare agent zit inbegrepen; elke extra agent kost € 499 setup plus € 49/mnd bovenop uw Slimme groei-abonnement.",
  extraContentNote:
    "Liever dat wij het doen? Content support vanaf € 49/mnd — wij passen teksten en afbeeldingen voor u aan (tot 2 wijzigingsrondes per maand, doorgaans binnen 5 werkdagen).",
  tiers: [
    {
      id: "digitale-fundering",
      name: "Digitale fundering",
      audience:
        "Voor bedrijven die een snelle, professionele website willen — zonder AI-automatisering.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 999",
        features: [
          "Volledig op maat gemaakt (Next.js)",
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
      id: "slimme-groei",
      name: "Slimme groei",
      audience:
        "Voor bedrijven die handwerk willen elimineren met slimme automatisering.",
      setup: {
        label: "Setup (eenmalig)",
        price: "Vanaf € 1.899",
        features: [
          "Alles uit Digitale fundering",
          "Vindbaar in Google én AI-chatbots (ChatGPT, Gemini, e.a.)",
          "Professionele linkpreviews per pagina (LinkedIn, WhatsApp)",
          "1 AI-assistent inbegrepen (keuze uit bibliotheek)",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 149",
        features: [
          "Alles uit het basisabonnement",
          "AI-infrastructuur inbegrepen (fair-use systeemkosten & monitoring)",
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
          "Alles uit Slimme groei",
          "Koppelingen met uw bestaande software (boekhouding, CRM, agenda, webshop, …)",
          "AI & functionaliteiten op maat",
        ],
      },
      subscription: {
        label: "Abonnement (maandelijks)",
        price: "Vanaf € 299",
        features: [
          "Alles uit het Slimme groei-abonnement",
          "API- & connectiebeheer",
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
