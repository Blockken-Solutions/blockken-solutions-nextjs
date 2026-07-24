import type { HomeContent } from "@/content/types";
import { contactPlanSection, homeSection } from "@/lib/paths";

import { getAgentPreviewItems } from "./agents";
import { customAgent } from "./custom-agent";
import { faqTeaserItemIds, getFaqItemsByIds } from "./faq";
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
      label: "Bekijk onze agents",
      href: homeSection("ai-agents"),
    },
    trustBarItems: [
      "EUROPESE HOSTING",
      "GDPR-VEILIG",
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
        href: "/#prijzen",
        linkLabel: "Bekijk pakketten →",
      },
      {
        title: "Slimme AI-Automatisering",
        description:
          "We automatiseren uw saaie beheer via kant-en-klare AI-agents — van offertes genereren tot facturen inlezen. Inbegrepen in Slimme Groei of apart af te nemen naast uw website.",
        icon: "bot",
        href: "/agents",
        linkLabel: "Bekijk agents →",
      },
      {
        title: "Vindbaarheid (Google & AI)",
        description:
          "Basis SEO zit in elk websitepakket. Vanaf Slimme Groei optimaliseren we ook voor AI-chatbots zoals ChatGPT — zodat uw bedrijf bovenaan staat, online én in antwoordmachines.",
        icon: "search",
        href: "/gratis-scan",
        linkLabel: "Start gratis scan →",
      },
    ],
  },
  pricing,
  howWeWork: {
    sectionLabel: "HOE HET WERKT",
    heading: "Van eerste contact tot live — in vier duidelijke stappen.",
    subheading:
      "Geen verrassingen, geen jargon. U weet altijd waar u aan toe bent.",
    steps: [
      {
        step: 1,
        title: "Gratis scan of gesprek",
        description:
          "Start met een website scan of plan een kort strategiegesprek — geheel vrijblijvend.",
        icon: "scan-search",
      },
      {
        step: 2,
        title: "Voorstel op maat",
        description:
          "We brengen uw situatie in kaart en stellen een concreet plan en pakket voor.",
        icon: "clipboard-list",
      },
      {
        step: 3,
        title: "Bouw & integratie",
        description:
          "Wij bouwen uw website of AI-agent, koppelen systemen en houden u op de hoogte.",
        icon: "hammer",
      },
      {
        step: 4,
        title: "Live & ondersteund",
        description:
          "U gaat live met persoonlijke onboarding. Daarna zorgen wij voor hosting, updates en support.",
        icon: "rocket",
      },
    ],
    primaryCta: {
      label: "Start gratis scan →",
      href: homeSection("gratis-scan"),
    },
    secondaryCta: {
      label: "Plan een gesprek →",
      href: contactPlanSection(),
    },
  },
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
    agents: getAgentPreviewItems(),
    customAgent,
  },
  scan: {
    sectionLabel: "GRATIS SCAN",
    heading: "Kost uw huidige website u klanten? Test het direct.",
    description:
      "Vul uw URL in en zie live hoe Google Lighthouse uw pagina scant op laadtijd, SEO en performance.",
    inputPlaceholder: "https://uw-website.be",
    buttonLabel: "Start Scan →",
    helperText: "Geen registratie. Resultaat in 10–30 seconden.",
    errorMessage:
      "Voer een geldige website-URL in (bijv. https://uw-website.be).",
  },
  about: {
    sectionLabel: "OVER MIJ",
    heading: "5 jaar ervaring, één aanspreekpunt — geen marketingbureau.",
    body: "Hoi, ik ben Wouter. Al meer dan vijf jaar bouw ik als fullstack developer performante webapplicaties voor organisaties in de publieke sector, de zorg en het bedrijfsleven. Ik zag KMO's worstelen met trage websites en logge systemen — terwijl ik bij grotere projecten juist moderne JAMstack-architecturen, cloud-optimalisatie en UX-verbeteringen implementeerde. Met blockken.solutions zet ik die expertise in voor Belgische KMO's: razendsnelle websites, slimme AI-automatisering en persoonlijk contact — van intake tot oplevering.",
    portrait: "/images/wouter-portrait.jpg",
    portraitAlt: "Wouter Blockken, fullstack developer en oprichter van blockken.solutions",
    credentials: [
      {
        type: "Diploma",
        label: "AI Technology Architect",
        issuer: "Hogeschool PXL",
        year: "2026",
        icon: "graduation-cap",
      },
      {
        type: "Gecertificeerd",
        label: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        year: "2025",
        icon: "scroll-text",
      },
      {
        type: "Diploma",
        label: "Toegepaste Informatica",
        issuer: "Hogeschool PXL",
        year: "2021",
        icon: "graduation-cap",
      },
    ],
    skills: [
      "Performante websites met moderne architectuur — van ontwerp tot live",
      "Cloud & AWS — veilige hosting binnen Europa (GDPR-conform)",
      "AI-automatisering en direct contact — één developer, geen tussenpersonen",
    ],
    portfolioLink: {
      label: "Bekijk mijn volledige portfolio →",
      href: "https://wouterblockken.me/",
    },
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
      "Antwoorden op de vragen die Belgische bedrijven het vaakst stellen.",
    items: getFaqItemsByIds([...faqTeaserItemIds]),
    cta: {
      label: "Alle vragen bekijken →",
      href: "/faq",
    },
  },
  footerCta: {
    heading: "Klaar om uren per week te besparen?",
    subheading:
      "Kies hoe u contact opneemt — direct, via een kennismakingsgesprek of met een bericht.",
    directContact: {
      heading: "Direct contact",
      description:
        "Liever niet wachten? Neem rechtstreeks contact op via onderstaande kanalen.",
    },
    calendly: {
      heading: "Kennismakingsgesprek inplannen",
      description:
        "Kies direct een vrij moment voor een gratis strategiegesprek van 30 minuten — langer indien nodig.",
      ctaLabel: "Kies een moment →",
    },
    form: {
      heading: "Stuur een bericht",
      description: "Vul het formulier in en ik neem contact met u op.",
    },
    buttonLabel: "Plan een gratis strategiegesprek →",
    buttonHref: contactPlanSection(),
  },
};
