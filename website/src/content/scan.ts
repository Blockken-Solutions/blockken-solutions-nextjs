import type { ScanPageContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const scanPage: ScanPageContent = {
  seo: {
    title: "Gratis Website Scan — Kost uw site u klanten?",
    description:
      "Test gratis of uw website bezoekers verliest door trage laadtijd of slechte vindbaarheid. Vul uw URL in en ontvang binnen 30 seconden een duidelijk rapport — geen registratie nodig.",
  },
  heading: "Kost uw huidige website u klanten? Test het in 30 seconden.",
  subheading:
    "Ontdek of trage laadtijd, slechte vindbaarheid of technische fouten bezoekers en leads kosten. Vul uw URL in en ontvang direct een helder rapport.",
  painPoints: [
    "Trage laadtijd laat bezoekers afhaken vóór ze contact opnemen",
    "Slechte vindbaarheid betekent minder aanvragen via Google",
    "Technische fouten ondermijnen vertrouwen en conversie",
  ],
  intro: {
    heading: "Wat kost u dit?",
    items: [
      {
        title: "Bezoekers die afhaken",
        description:
          "Elke seconde laadtijd telt. Trage pagina's zorgen ervoor dat potentiële klanten vertrekken voordat ze iets kopen of contact opnemen.",
      },
      {
        title: "Minder Google-verkeer",
        description:
          "Sites die slecht scoren op snelheid en structuur worden minder goed gevonden — en missen daardoor aanvragen en omzet.",
      },
      {
        title: "Gemiste leads",
        description:
          "Onzichtbare technische problemen (broken links, ontbrekende meta-data) kosten u aanvragen zonder dat u het merkt.",
      },
      {
        title: "Smaller bereik",
        description:
          "Toegankelijkheidsproblemen sluiten een deel van uw doelgroep uit — en schaden uw imago als professioneel bedrijf.",
      },
    ],
  },
  howItWorks: [
    {
      step: 1,
      title: "Vul uw URL in",
      description:
        "Geef het adres van uw website op — bijvoorbeeld https://uw-website.be.",
    },
    {
      step: 2,
      title: "Automatische analyse",
      description:
        "We scannen uw pagina op snelheid, vindbaarheid, toegankelijkheid en technische kwaliteit.",
    },
    {
      step: 3,
      title: "Bekijk uw rapport",
      description:
        "U ziet direct uw scores en de belangrijkste verbeterpunten — gratis en zonder registratie.",
    },
  ],
  form: {
    inputPlaceholder: "https://uw-website.be",
    buttonLabel: "Start Scan →",
    helperText: "Geen registratie. Resultaat in 10–30 seconden.",
    errorMessage: "Voer een geldige website-URL in (bijv. https://uw-website.be).",
  },
  cta: {
    heading: "Wilt u uw website laten optimaliseren?",
    subheading:
      "Plan een gratis strategiegesprek en ontdek wat wij concreet voor uw bedrijf kunnen verbeteren.",
    primary: {
      label: "Plan een gratis gesprek →",
      href: contactPlanSection(),
    },
    secondary: {
      label: "Veelgestelde vragen over scores",
      href: "/faq#scan-bereik",
    },
  },
};
