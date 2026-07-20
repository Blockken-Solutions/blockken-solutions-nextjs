import type { ScanPageContent } from "@/content/types";
import { homeSection } from "@/lib/paths";

export const scanPage: ScanPageContent = {
  seo: {
    title: "Gratis Website Scan — Performance, SEO & Laadtijd",
    description:
      "Test uw website gratis op laadtijd, SEO en performance. Vul uw URL in en ontvang binnen 10–30 seconden een Lighthouse-analyse — geen registratie nodig.",
  },
  heading: "Gratis Website Scan",
  subheading:
    "Ontdek hoe uw website scoort op performance, SEO, toegankelijkheid en laadtijd. Google Lighthouse analyseert uw pagina en geeft u direct inzicht in verbeterpunten.",
  intro: {
    heading: "Wat analyseren we?",
    items: [
      {
        title: "Performance",
        description:
          "We meten hoe snel uw pagina laadt en hoe goed de technische basis is opgebouwd — cruciaal voor conversie en Google-ranking.",
      },
      {
        title: "SEO",
        description:
          "We controleren meta-tags, structuur, vindbaarheid en content-kwaliteit zodat uw site beter scoort in zoekmachines en AI-antwoorden.",
      },
      {
        title: "Laadtijd",
        description:
          "We brengen de werkelijke laadtijd in kaart en identificeren knelpunten die bezoekers kunnen doen afhaken.",
      },
      {
        title: "Toegankelijkheid",
        description:
          "We controleren contrast, labels, structuur en andere toegankelijkheidsaspecten zodat uw site bruikbaar is voor iedereen.",
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
      title: "Lighthouse-analyse",
      description:
        "Google Lighthouse scant uw pagina op performance, SEO, toegankelijkheid en best practices.",
    },
    {
      step: 3,
      title: "Bekijk uw rapport",
      description:
        "U ziet direct uw scores en concrete verbeterpunten — gratis en zonder registratie.",
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
      href: homeSection("contact"),
    },
    secondary: {
      label: "Veelgestelde vragen over scores",
      href: "/faq#scan-bereik",
    },
  },
};
