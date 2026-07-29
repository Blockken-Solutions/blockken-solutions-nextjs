import type { PricingContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const pricing: PricingContent = {
  sectionLabel: "PRIJZEN & PAKKETTEN",
  heading: "Transparante pakketten voor elke fase van uw groei.",
  subheading:
    "Kies het pakket dat past bij uw ambities — van een solide online basis tot volledig digitaal maatwerk.",
  extraAgentNote:
    "AI-agents zijn beschikbaar vanaf Slimme Groei. Eén kant-en-klare agent zit inbegrepen; elke extra agent kost € 499 setup plus € 49/mnd bovenop uw Slimme Groei-abonnement.",
  extraContentNote:
    "Liever dat wij het doen? Content Support vanaf € 49/mnd — wij passen teksten en afbeeldingen voor u aan (tot 2 wijzigingsrondes per maand, doorgaans binnen 5 werkdagen).",
  tiers: [
    {
      id: "digitale-fundering",
      name: "Digitale Fundering",
      audience:
        "Voor bedrijven die een snelle, professionele website willen — zonder AI-automatisering.",
      setup: {
        label: "Setup (Eenmalig)",
        price: "Vanaf € 999",
        features: [
          "Volledig op maat gemaakt (Next.js)",
          "Zelf teksten & afbeeldingen aanpassen",
          "Basis Vindbaarheid (SEO)",
          "Lokale SEO Setup",
          "Cookiebanner & GDPR-conforme basissetup (incl. contactformulier)",
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
        href: contactPlanSection(),
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
          "Vindbaar in Google én AI-chatbots (ChatGPT, Gemini, e.a.)",
          "Professionele linkpreviews per pagina (LinkedIn, WhatsApp)",
          "1 AI-assistent inbegrepen (keuze uit bibliotheek)",
        ],
      },
      subscription: {
        label: "Abonnement (Maandelijks)",
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
