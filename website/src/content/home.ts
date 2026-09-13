import type { HomeContent } from "@/content/types";
import { contactPlanSection, homeSection } from "@/lib/paths";

import { blocksPage, getBlockPreviewItems } from "./blocks";
import { customBlock } from "./custom-block";
import { faqTeaserItemIds, getFaqItemsByIds } from "./faq";
import { pricing } from "./pricing";

export const home: HomeContent = {
  hero: {
    badge: "Web · Blocks · online tools voor KMO's",
    headlineLines: [
      "Is uw website traag? Kost administratie u te veel tijd?",
    ],
    headlineHighlight: "Wij lossen dit op!",
    subheadline:
      "Wij bouwen razendsnelle websites met hapklare Blocks die repetitief werk overnemen — zodat u zich kunt focussen op uw klanten.",
    summary:
      "Veilig, op maat en persoonlijk begeleid door een professional uit België.",
    primaryCta: {
      label: "Gratis website scan →",
      href: homeSection("gratis-scan"),
    },
    secondaryCta: {
      label: "Bekijk onze Blocks",
      href: homeSection("blocks"),
    },
    trustBarItems: [
      "Europese hosting",
      "GDPR-veilig",
      "Op maat gebouwd",
      "Razendsnelle websites",
    ],
  },
  services: {
    sectionLabel: "Oplossingen",
    heading: "Wat we voor uw bedrijf bouwen.",
    items: [
      {
        title: "Razendsnelle websites",
        description:
          "Een website die meteen laadt en er professioneel uitziet — op maat voor uw bedrijf, geen trage standaardtemplates. Bezoekers nemen vaker contact op en vullen vaker een formulier in. Meer klanten, minder gemiste kansen.",
        icon: "zap",
        href: "/#prijzen",
        linkLabel: "Meer over websites →",
      },
      {
        title: "Blocks op uw website",
        description:
          "Hapklare extra's op uw website — online bestellen, cadeaubonnen, klantvragen, review-antwoorden. Kies wat past bij uw zaak.",
        icon: "bot",
        href: "/blocks",
        linkLabel: "Bekijk Blocks →",
      },
      {
        title: "Gevonden worden — op Google én in ChatGPT",
        description:
          "Wij zorgen dat klanten u vinden via Google én via tools zoals ChatGPT. Inclusief basis SEO, cookiebanner en GDPR-basis — zodat u zichtbaar én in orde bent.",
        icon: "search",
        href: "/gratis-scan",
        linkLabel: "Start gratis scan →",
      },
    ],
  },
  pricing,
  howWeWork: {
    sectionLabel: "Hoe het werkt",
    heading: "Van eerste contact tot live — in vier duidelijke stappen.",
    subheading:
      "Geen verrassingen, geen jargon. U weet altijd waar u aan toe bent.",
    steps: [
      {
        step: 1,
        title: "Gratis scan of gesprek",
        description:
          "Start met een website scan of plan een kort kennismakingsgesprek — geheel vrijblijvend.",
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
          "Wij bouwen uw website en Blocks, koppelen met uw tools (agenda, betaling, …) en houden u op de hoogte.",
        icon: "hammer",
      },
      {
        step: 4,
        title: "Online met nazorg",
        description:
          "U gaat live met persoonlijke onboarding. Daarna zorgen wij voor hosting, updates en support — of u past zelf teksten en afbeeldingen aan via uw beheersysteem.",
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
  blocks: {
    sectionLabel: "Blocks",
    heading: "Extra's op uw website, klaar voor gebruik.",
    subheading:
      "Vanaf Website + Blocks zit één Block inbegrepen — kies wat past bij uw zaak.",
    catalogLink: {
      label: "Alle Blocks bekijken →",
      href: "/blocks",
    },
    filterCategories: blocksPage.filterCategories,
    blocks: getBlockPreviewItems(),
    customBlock,
  },
  scan: {
    sectionLabel: "Gratis scan",
    heading: "Kost uw huidige website u klanten? Test het direct.",
    description:
      "Vul uw URL in en ontdek binnen 30 seconden of uw website bezoekers kost — op snelheid, vindbaarheid en gebruiksgemak.",
    inputPlaceholder: "https://uw-website.be",
    buttonLabel: "Start scan →",
    helperText: "Geen registratie. Resultaat in 10–30 seconden.",
    errorMessage:
      "Voer een geldige website-URL in (bijv. https://uw-website.be).",
  },
  about: {
    sectionLabel: "Over mij",
    heading: "5 jaar ervaring, één aanspreekpunt — geen marketingbureau.",
    body: "Hallo, ik ben Wouter. Al meer dan vijf jaar bouw ik websites en webapplicaties voor organisaties in de publieke sector, de zorg en het bedrijfsleven. Ik zag KMO's worstelen met trage websites, dure bureaus en systemen die niet meegroeien. Met blockken.solutions zet ik die ervaring in voor Belgische KMO's: snelle websites, slimme Blocks die meewerken, en één aanspreekpunt van intake tot oplevering.",
    portrait: "/images/wouter-portrait.jpg",
    portraitAlt: "Wouter Blockken, oprichter van blockken.solutions",
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
        label: "AWS Certified AI Practitioner (AIF-C01)",
        issuer: "Amazon Web Services",
        year: "2026",
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
      "Websites die in seconden laden — geen trage templates",
      "Veilige hosting in Europa, GDPR-conform",
      "Online bestellen, vragen beantwoorden, reviews — één developer, geen tussenpersonen",
    ],
    portfolioHighlights: [
      {
        title: "De Watergroep Portal",
        client: "De Watergroep",
        outcome: "Klant- en medewerkersportaal voor duizenden gebruikers",
        href: "https://wouterblockken.me/projecten/de-watergroep-portal",
      },
      {
        title: "Mynexuzhealth Patient Portal",
        client: "Nexuzhealth",
        outcome: "Patiëntenportaal — eenvoudig digitaal toegang tot medische gegevens",
        href: "https://wouterblockken.me/projecten/mynexuzhealth-patient-portal",
      },
      {
        title: "Starttoets & Columbus Platform",
        client: "Vlaamse Overheid (Onderwijs & Vorming)",
        outcome: "Schaalbare toets- en registratieplatforms voor het Vlaamse onderwijs",
        href: "https://wouterblockken.me/projecten/starttoets-columbus-platform",
      },
      {
        title: "ZBO Zorgbudget",
        client: "Smals",
        outcome: "Digitaal platform waar burgers zelf aanvragen indienen",
        href: "https://wouterblockken.me/projecten/zbo-elderly-care-budget-platform",
      },
    ],
    portfolioLink: {
      label: "Bekijk alle projecten →",
      href: "https://wouterblockken.me/projecten",
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
    heading: "Klaar om tijd te winnen voor uw klanten?",
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
        "Kies direct een vrij moment voor een gratis kennismakingsgesprek van 30 minuten — langer indien nodig.",
      ctaLabel: "Kies een moment →",
    },
    form: {
      heading: "Stuur een bericht",
      description: "Vul het formulier in en ik neem contact met u op.",
    },
    buttonLabel: "Plan een gratis kennismakingsgesprek →",
    buttonHref: contactPlanSection(),
  },
};
