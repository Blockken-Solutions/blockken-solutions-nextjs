import type { HomeContent } from "@/content/types";
import { homeSection } from "@/lib/paths";

import { customAgent } from "./custom-agent";
import { pricing } from "./pricing";

export const home: HomeContent = {
  hero: {
    badge: "Web · AI · Automatisering voor KMO's",
    headlineLines: [
      "Is uw website traag? Kost administratie u te veel tijd?",
    ],
    headlineHighlight: "Wij lossen dit op!",
    subheadline:
      "Wij bouwen razendsnelle websites en slimme AI-agents die repetitief werk overnemen — zodat u zich kunt focussen op uw klanten.",
    summary:
      "Veilig, op maat en persoonlijk begeleid door een professional uit België.",
    primaryCta: {
      label: "Gratis Website Scan →",
      href: homeSection("gratis-scan"),
    },
    secondaryCta: {
      label: "Bekijk Onze Agents",
      href: homeSection("ai-agents"),
    },
    trustBarItems: [
      "EUROPESE HOSTING",
      "GDPR-PROOF",
      "OP MAAT GEBOUWD",
      "RAZENDSNELLE WEBSITES",
    ],
  },
  services: {
    sectionLabel: "OPLOSSINGEN",
    heading: "Wat we voor uw bedrijf bouwen.",
    items: [
      {
        title: "Razendsnelle Websites",
        description:
          "We bouwen moderne, op maat gemaakte websites die direct laden en er prachtig uitzien. Geen trage standaardthema's, maar een snelle ervaring die van bezoekers klanten maakt.",
        icon: "zap",
      },
      {
        title: "Slimme AI-Automatisering",
        description:
          "We automatiseren uw saaie beheer. Van offertes genereren tot facturen inlezen — onze AI-systemen nemen uw handmatige werk over.",
        icon: "bot",
      },
      {
        title: "Vindbaarheid (Google & AI)",
        description:
          "We zorgen dat uw bedrijf bovenaan staat — niet alleen in Google, maar ook als antwoord in AI-chatbots zoals ChatGPT.",
        icon: "search",
      },
    ],
  },
  pricing,
  agents: {
    sectionLabel: "AI AGENTS",
    heading: "Klare AI-werknemers, direct inzetbaar.",
    subheading:
      "Ontdek kant-en-klare AI-agents die direct inzetbaar zijn. Transparante prijs, geen technische kennis nodig.",
    marketplaceLink: {
      label: "Alle agents bekijken →",
      href: "/agents",
    },
    filterCategories: ["Alle", "Klantenservice", "Boekhouding", "Sales"],
    agents: [
      {
        slug: "support-agent-247",
        title: "Support Agent 24/7",
        description:
          "Beantwoordt klantvragen automatisch via chat en e-mail.",
        price: "Vanaf €49/mnd",
        category: "Klantenservice",
        icon: "message-circle",
      },
      {
        slug: "factuur-extractor",
        title: "Factuur Extractor",
        description:
          "Leest automatisch PDF-facturen in naar uw boekhouding.",
        price: "Vanaf €49/mnd",
        category: "Boekhouding",
        icon: "file-text",
      },
      {
        slug: "offerte-generator",
        title: "Offerte Generator",
        description:
          "Maakt professionele offertes op basis van uw templates en klantgegevens.",
        price: "Vanaf €59/mnd",
        category: "Sales",
        icon: "clipboard-list",
      },
      {
        slug: "triage-agenda-planner",
        title: "Triage & Agenda Planner",
        description:
          "Analyseert klantverzoeken en plant automatisch afspraken in uw kalender.",
        price: "Vanaf €59/mnd",
        category: "Klantenservice",
        icon: "calendar-days",
      },
      {
        slug: "lead-pre-kwalificator",
        title: "Lead Pre-kwalificator",
        description:
          "Kwalificeert websitebezoekers via intake-vragen en levert gestructureerde leadprofielen af.",
        price: "Vanaf €59/mnd",
        category: "Sales",
        icon: "user-check",
      },
      {
        slug: "upsell-bestel-assistent",
        title: "Upsell & Bestel Assistent",
        description:
          "Begeleidt klanten door uw assortiment en verhoogt uw gemiddelde bestelwaarde.",
        price: "Vanaf €59/mnd",
        category: "Sales",
        icon: "shopping-cart",
      },
      {
        slug: "storing-nazorg-bot",
        title: "Storing & Nazorg Bot",
        description:
          "Voert eerstelijns diagnose uit bij defecten en bereidt reparatie-intakes voor.",
        price: "Vanaf €49/mnd",
        category: "Klantenservice",
        icon: "wrench",
      },
    ],
    customAgent,
  },
  scan: {
    sectionLabel: "GRATIS SCAN",
    heading: "Kost uw huidige website u klanten? Test het direct.",
    description:
      "Vul uw URL in en zie live hoe onze AI uw pagina scant op laadtijd, SEO en teksten.",
    inputPlaceholder: "https://uw-website.be",
    buttonLabel: "Start Scan →",
    helperText: "Geen registratie. Resultaat in < 10 seconden.",
    errorMessage:
      "Voer een geldige website-URL in (bijv. https://uw-website.be).",
  },
  about: {
    sectionLabel: "OVER MIJ",
    heading: "Gebouwd door een professional, niet door een marketingbureau.",
    body: "Hoi, ik ben Wouter. Als fullstack developer zag ik KMO's worstelen met dure, logge systemen en trage websites. Mijn missie: professionele automatisering toegankelijk maken voor uw bedrijf — persoonlijk, veilig en volledig op maat.",
    portrait: "/images/wouter-portrait.jpg",
    portraitAlt: "Wouter Blockken, fullstack developer",
    credentials: [
      {
        type: "Diploma",
        label: "AI Technology Architect",
        icon: "graduation-cap",
      },
      {
        type: "Gecertificeerd",
        label: "Fullstack Developer",
        icon: "scroll-text",
      },
    ],
    skills: [
      "Volledige websites van ontwerp tot oplevering",
      "AI-agents die uw administratie automatiseren",
      "Veilige hosting binnen Europa (GDPR-proof)",
    ],
    sameAs: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/wouter-blockken",
        icon: "linkedin",
      },
    ],
  },
  faqTeaser: {
    heading: "Veelgestelde vragen",
    subheading:
      "Antwoorden op de vragen die Belgische KMO-eigenaars het vaakst stellen.",
    items: [
      {
        id: "kosten-ai-agent",
        question: "Wat kost een AI-agent voor mijn KMO?",
        answer:
          "Kant-en-klare agents starten vanaf €49 per maand. Maatwerk begint typisch rond €2.500 eenmalig.",
      },
      {
        id: "gdpr",
        question: "Is mijn data veilig (GDPR)?",
        answer:
          "Ja. Alle data wordt verwerkt conform GDPR, met EU-hosting en encryptie in transit en at rest.",
      },
      {
        id: "chatgpt-verschil",
        question: "Wat is het verschil tussen ChatGPT en een custom AI-agent?",
        answer:
          "Een custom agent kent uw processen, is gekoppeld aan uw systemen en voert concrete taken uit — niet enkel chatten.",
      },
      {
        id: "website-live",
        question: "Hoe snel kan mijn website live?",
        answer:
          "Een marketingwebsite staat gemiddeld binnen 2 tot 4 weken live na een gratis strategiegesprek.",
      },
    ],
    cta: {
      label: "Alle vragen bekijken →",
      href: "/faq",
    },
  },
  footerCta: {
    heading: "Klaar om uren per week te besparen?",
    subheading:
      "Vertel kort waar u mee zit — ik denk graag vrijblijvend mee over wat haalbaar is voor uw bedrijf.",
    buttonLabel: "Plan een gratis strategiegesprek →",
    buttonHref: homeSection("contact"),
  },
};
