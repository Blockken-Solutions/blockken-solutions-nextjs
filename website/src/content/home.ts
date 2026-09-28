import type { HomeContent } from "@/content/types";
import { contactPlanSection, homeSection } from "@/lib/paths";

import { authorCredentials } from "./author-credentials";
import { faqTeaserItemIds, getFaqItemsByIds } from "./faq";
import { pricing } from "./pricing";

export const home: HomeContent = {
  hero: {
    badge: "Momenteel beschikbaar",
    headlineLines: ["Professionele websites", "voor Belgische KMO's."],
    subheadline:
      "Snelle websites op maat: wij regelen alles voor u, u beheert zelf via een CMS, of we bouwen maatwerk met slimme automatisering.",
    summary:
      "Veilig, op maat en persoonlijk begeleid door een professional uit België.",
    primaryCta: {
      label: "Gratis website scan →",
      href: homeSection("gratis-scan"),
    },
    secondaryCta: {
      label: "Bekijk pakketten →",
      href: homeSection("prijzen"),
    },
    stats: ["5+ jaar ervaring", "Één aanspreekpunt", "Gebouwd in België"],
    serviceChips: [
      { label: "Volledig beheerd", href: homeSection("oplossingen") },
      { label: "Met CMS", href: homeSection("prijzen") },
      { label: "Maatwerk", href: contactPlanSection() },
    ],
    trustBarItems: [
      "Europese hosting",
      "GDPR-veilig",
      "Op maat gebouwd",
      "Razendsnelle websites",
    ],
    clientLogosLabel: "Ervaring bij o.a.",
    clientLogos: [
      {
        src: "/images/clients/dwg.svg",
        alt: "De Watergroep",
        client: "De Watergroep",
      },
      {
        src: "/images/clients/nexuzhealth.jpeg",
        alt: "Nexuzhealth",
        client: "Nexuzhealth",
      },
      {
        src: "/images/clients/vlaamse-overheid.png",
        alt: "Vlaamse Overheid",
        client: "Vlaamse Overheid (Onderwijs & Vorming)",
      },
      {
        src: "/images/clients/smals.jpg",
        alt: "Smals",
        client: "Smals",
      },
    ],
  },
  services: {
    sectionLabel: "Oplossingen",
    heading: "Wat we voor uw bedrijf bouwen.",
    items: [
      {
        title: "Website, volledig door ons",
        description:
          "Een snelle, professionele website zonder dat u moet inloggen. Wij passen teksten en foto's voor u aan — inclusief gevonden worden in Google en in AI-tools zoals ChatGPT, plus cookie/GDPR-basis en hosting in Europa.",
        icon: "zap",
        href: homeSection("prijzen"),
        linkLabel: "Bekijk pakketten →",
      },
      {
        title: "Website met CMS",
        description:
          "Dezelfde kwaliteit: gevonden in Google, lokaal online en in AI-zoektools zoals ChatGPT. U past zelf teksten en afbeeldingen aan via een eenvoudig beheersysteem.",
        icon: "file-text",
        href: homeSection("prijzen"),
        linkLabel: "Bekijk pakketten →",
      },
      {
        title: "Maatwerk & automatisering",
        description:
          "Koppelingen met uw bestaande tools, eigen flows en praktische hulp waar repetitief werk tijd kost — bespreken we samen in een gesprek.",
        icon: "bot",
        href: homeSection("prijzen"),
        linkLabel: "Plan een gesprek →",
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
          "Wij bouwen uw website, koppelen waar nodig met uw tools (agenda, betaling, …) en houden u op de hoogte.",
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
    body: "Hallo, ik ben Wouter. Al meer dan vijf jaar bouw ik websites en webapplicaties voor organisaties in de publieke sector, de zorg en het bedrijfsleven. Ik zag KMO's worstelen met trage websites, dure bureaus en systemen die niet meegroeien. Met blockken.solutions zet ik die ervaring in voor Belgische KMO's: snelle websites, persoonlijke begeleiding, en één aanspreekpunt van intake tot oplevering.",
    portrait: "/images/wouter-portrait.jpg",
    portraitAlt: "Wouter Blockken, oprichter van blockken.solutions",
    credentials: authorCredentials,
    skills: [
      "Websites die in seconden laden — geen trage templates",
      "Veilige hosting in Europa, GDPR-conform",
      "Websites beheren, CMS, koppelingen en automatisering — één developer, geen tussenpersonen",
    ],
    portfolioHighlights: [
      {
        title: "De Watergroep Portal",
        client: "De Watergroep",
        outcome: "Klant- en medewerkersportaal voor duizenden gebruikers",
        href: "https://wouterblockken.me/projecten/de-watergroep-portal",
        logo: "/images/clients/dwg.svg",
        logoAlt: "De Watergroep",
      },
      {
        title: "Mynexuzhealth Patient Portal",
        client: "Nexuzhealth",
        outcome: "Patiëntenportaal — eenvoudig digitaal toegang tot medische gegevens",
        href: "https://wouterblockken.me/projecten/mynexuzhealth-patient-portal",
        logo: "/images/clients/nexuzhealth.jpeg",
        logoAlt: "Nexuzhealth",
      },
      {
        title: "Starttoets & Columbus Platform",
        client: "Vlaamse Overheid (Onderwijs & Vorming)",
        outcome: "Schaalbare toets- en registratieplatforms voor het Vlaamse onderwijs",
        href: "https://wouterblockken.me/projecten/starttoets-columbus-platform",
        logo: "/images/clients/vlaamse-overheid.png",
        logoAlt: "Vlaamse Overheid",
      },
      {
        title: "ZBO Zorgbudget",
        client: "Smals",
        outcome: "Digitaal platform waar burgers zelf aanvragen indienen",
        href: "https://wouterblockken.me/projecten/zbo-elderly-care-budget-platform",
        logo: "/images/clients/smals.jpg",
        logoAlt: "Smals",
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
