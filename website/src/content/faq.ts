import type { FaqItem, FaqPageContent } from "@/content/types";
import { contactPlanSection, homeSection } from "@/lib/paths";

import { websiteVisibilityFeature } from "./pricing";

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\([^)]+\)/g;

const prijzenLink = homeSection("prijzen");

export function stripFaqAnswerMarkdown(answer: string): string {
  return answer.replace(MARKDOWN_LINK_PATTERN, "$1");
}

export const faqPage: FaqPageContent = {
  heading: "Veelgestelde vragen",
  subheading:
    "Antwoorden op de meest gestelde vragen van Belgische bedrijven over websites en samenwerking.",
  seo: {
    title: "Veelgestelde vragen — Websites voor Belgische KMO's",
    description:
      "Antwoorden op vragen over kosten, pakketten, doorlooptijd, GDPR en websites voor Belgische KMO's.",
  },
  categories: [
    {
      id: "begrippen",
      label: "Begrippen",
      items: [
        {
          id: "wat-is-kmo",
          question: "Wat is een KMO?",
          answer:
            "KMO staat voor kleine of middelgrote onderneming. In België gaat het meestal om bedrijven met minder dan 250 medewerkers en een beperkte omzet. blockken.solutions richt zich specifiek op deze ondernemers die een professionele website nodig hebben zonder grote bedrijfsbudgetten.",
        },
        {
          id: "wat-is-ai-vindbaarheid",
          question: "Wat betekent gevonden worden in ChatGPT?",
          answer:
            "Steeds meer klanten zoeken via ChatGPT, Gemini en vergelijkbare AI-tools — niet alleen via Google. Wij zorgen dat uw bedrijf daar correct en duidelijk wordt vermeld, met heldere content en de juiste technische basis op uw website.",
        },
        {
          id: "wat-doet-blockken",
          question: "Wat doet blockken.solutions precies?",
          answer:
            "blockken.solutions bouwt razendsnelle websites voor Belgische KMO's — volledig door ons beheerd, met een CMS om zelf content aan te passen, of met maatwerk en automatisering waar dat tijd wint. Eén aanspreekpunt van intake tot nazorg.",
        },
      ],
    },
    {
      id: "prijzen",
      label: "Prijzen & planning",
      items: [
        {
          id: "kosten-website",
          question: "Wat kost een website?",
          teaser:
            "Volledig beheerd start vanaf € 999 setup en € 99/mnd. Zelf beheren met CMS vanaf € 999 en € 49/mnd.",
          answer:
            `Volledig beheerd start vanaf € 999 eenmalige setup en € 99/mnd — wij passen teksten en foto's voor u aan, zonder CMS. Zelf beheren start vanaf € 999 setup en € 49/mnd — u past zelf content aan via een eenvoudig beheersysteem. Beide pakketten omvatten gevonden worden in Google en in AI-tools zoals ChatGPT. Maatwerk & automatisering is op aanvraag. Bekijk onze [pakketten en prijzen](${prijzenLink}). Na een gratis kennismakingsgesprek ontvangt u een offerte op maat.`,
        },
        {
          id: "verschil-pakketten",
          question: "Wat is het verschil tussen de drie pakketten?",
          teaser:
            "Volledig beheerd: wij regelen content. Zelf beheren: u gebruikt een CMS. Maatwerk: koppelingen en automatisering op aanvraag.",
          answer:
            `Volledig beheerd levert een snelle website waarbij wij teksten en afbeeldingen voor u aanpassen — u hoeft niet in te loggen. Zelf beheren levert dezelfde basis (Google, ChatGPT/AI-tools, GDPR, EU-hosting) met een CMS om zelf content te wijzigen. Maatwerk & automatisering is voor koppelingen met bestaande software, eigen flows en praktische automatisering — prijs en scope bespreken we in een gesprek. Meer detail staat bij onze [pakketten](${prijzenLink}).`,
        },
        {
          id: "verschil-beheerd-cms",
          question:
            "Wat is het verschil tussen volledig beheerd en zelf beheren?",
          answer:
            "Bij Volledig beheerd heeft u geen beheersysteem nodig: u stuurt wijzigingen door en wij zetten ze op de site — binnen afgesproken limieten in uw offerte. Bij Zelf beheren krijgt u een eenvoudig CMS om zelf teksten en afbeeldingen aan te passen wanneer het u uitkomt. Beide pakketten zijn even snel, veilig en vindbaar in Google en ChatGPT; het verschil zit in wie de content bijhoudt.",
        },
        {
          id: "maatwerk-automatisering",
          question: "Wat valt onder maatwerk en automatisering?",
          answer:
            "Alles wat verder gaat dan een standaard website: koppelingen met agenda, CRM of boekhouding, eigen formulieren of flows, en praktische hulp (inclusief AI) waar repetitief werk tijd kost — bijvoorbeeld sneller antwoorden op veelgestelde vragen of aanvragen structureren. Scope en prijs zijn op aanvraag; we werken dit uit na een kennismakingsgesprek.",
        },
        {
          id: "abonnement-inhoud",
          question: "Wat zit er in het maandelijks abonnement?",
          answer:
            "Bij Zelf beheren (€ 49/mnd) omvat het abonnement EU-hosting, back-ups en onderhoud van uw website. Bij Volledig beheerd (€ 99/mnd) komt daar content-updates door ons bij — binnen wat we in uw offerte afspreken. Bij maatwerk is het abonnement op aanvraag en hangt af van koppelingen en onderhoud.",
        },
        {
          id: "cookie-gdpr",
          question: "Zit een cookiebanner in mijn pakket?",
          teaser:
            "Ja — elk pakket bevat een GDPR-conforme cookiebanner en basissetup.",
          answer:
            "Ja. Elk pakket bevat een GDPR-conforme cookiebanner en basissetup, inclusief contactformulier en koppeling naar uw privacyverklaring — zodat uw website voldoet aan Belgische en Europese privacywetgeving.",
        },
        {
          id: "content-aanpassen",
          question: "Kan ik mijn website zelf aanpassen, of doet u dat voor mij?",
          teaser:
            "Kies Zelf beheren (CMS) of Volledig beheerd — wij passen dan content voor u aan.",
          answer:
            "Dat kiest u via het pakket. Zelf beheren geeft u een gebruiksvriendelijk CMS — tijdens onboarding leren we u hoe dat werkt. Volledig beheerd betekent dat wij teksten en afbeeldingen voor u aanpassen; u stuurt door wat er moet veranderen. Grotere wijzigingen, zoals een nieuwe pagina of herstructurering, behandelen we apart als projectwerk.",
        },
        {
          id: "website-live",
          question: "Hoe snel kan mijn website live?",
          answer:
            "Een marketingwebsite staat gemiddeld binnen 2 tot 4 weken live. Complexere websites met koppelingen aan andere systemen duren 6 tot 12 weken. Na een gratis kennismakingsgesprek ontvangt u een concrete planning.",
        },
      ],
    },
    {
      id: "techniek",
      label: "Koppelingen & techniek",
      items: [
        {
          id: "ondersteunde-tools",
          question: "Met welke software kunt u koppelen?",
          answer:
            "Standaard websitepakketten werken standalone. Heeft u koppeling nodig met boekhouding, CRM, agenda, webshop of andere bedrijfssoftware? Dat bekijken we op maat in het pakket Maatwerk & automatisering — prijs en scope op aanvraag.",
        },
        {
          id: "seo-ai-vindbaarheid",
          question: "Biedt u ook SEO en vindbaarheid in ChatGPT?",
          answer:
            `Ja. Bij Volledig beheerd en Zelf beheren is dit inbegrepen: ${websiteVisibilityFeature}. Cookie/GDPR-basis zit in elk websitepakket.`,
        },
        {
          id: "eigendom-website",
          question: "Behoud ik eigendom van mijn website en data?",
          answer:
            "Ja. U blijft eigenaar van uw content en bedrijfsdata. Bij stopzetten leveren we broncode en documentatie op. Uw data wordt nooit verkocht of gedeeld met derden, behalve wanneer nodig voor de werking van uw website of wettelijk verplicht.",
        },
        {
          id: "gratis-scan",
          question: "Kan ik eerst een gratis scan laten uitvoeren?",
          answer:
            "Ja. Via onze [gratis website scan](/gratis-scan) ziet u direct hoe uw huidige site scoort op laadtijd, vindbaarheid en toegankelijkheid. Geen registratie nodig — vul uw URL in en ontvang binnen 10–30 seconden een duidelijk rapport met snelheidsscore en verbeterpunten.",
        },
        {
          id: "scan-bereik",
          question: "Wat analyseert de gratis scan precies?",
          answer:
            "De scan analyseert één pagina-URL via Google PageSpeed Insights (mobiel). U ontvangt scores voor snelheid, vindbaarheid, toegankelijkheid en technische kwaliteit. Voor een volledige site-audit plannen we een apart gesprek.",
        },
      ],
    },
    {
      id: "privacy",
      label: "Privacy & vertrouwen",
      items: [
        {
          id: "gdpr",
          question: "Is mijn data veilig (GDPR)?",
          teaser:
            "Ja. Alle data wordt verwerkt conform GDPR, met EU-hosting en encryptie.",
          answer:
            "Ja. Alle data wordt verwerkt conform GDPR. Hosting gebeurt binnen de EU, met encryptie in transit en at rest. We sluiten verwerkersovereenkomsten af waar nodig en documenteren welke gegevens uw website verwerkt.",
        },
        {
          id: "data-opslag",
          question: "Waar worden mijn gegevens opgeslagen?",
          answer:
            "Alle data — website en contactformulieren — wordt gehost binnen de Europese Unie. We werken uitsluitend met GDPR-conforme hostingpartners en sluiten verwerkersovereenkomsten af waar nodig.",
        },
        {
          id: "aanspreekpunt",
          question: "Wie is mijn aanspreekpunt?",
          answer:
            "U werkt rechtstreeks met Wouter Blockken, fullstack developer en oprichter van blockken.solutions. Geen accountmanagers of callcenters — één aanspreekpunt van intake tot oplevering en nazorg.",
        },
      ],
    },
  ],
  cta: {
    heading: "Staat uw vraag er niet bij?",
    subheading:
      "Plan een gratis kennismakingsgesprek — concreet advies over uw website, geen verkooppraat.",
    primary: {
      label: "Plan een gratis kennismakingsgesprek →",
      href: contactPlanSection(),
    },
    secondary: {
      label: "Mail ons direct",
      href: "mailto:wouter@blockken.solutions",
    },
  },
};

export function getAllFaqItems(): FaqItem[] {
  return faqPage.categories.flatMap((category) => category.items);
}

export function getFaqItemsByIds(ids: string[]): FaqItem[] {
  const allItems = getAllFaqItems();

  return ids.map((id) => {
    const item = allItems.find((faqItem) => faqItem.id === id);
    if (!item) {
      throw new Error(`FAQ item not found: ${id}`);
    }
    return item;
  });
}

export const faqTeaserItemIds = [
  "kosten-website",
  "verschil-pakketten",
  "seo-ai-vindbaarheid",
  "gdpr",
] as const;
