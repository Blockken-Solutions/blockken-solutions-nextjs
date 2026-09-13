import type { FaqItem, FaqPageContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\([^)]+\)/g;

export function stripFaqAnswerMarkdown(answer: string): string {
  return answer.replace(MARKDOWN_LINK_PATTERN, "$1");
}

export const faqPage: FaqPageContent = {
  heading: "Veelgestelde vragen",
  subheading:
    "Antwoorden op de meest gestelde vragen van Belgische bedrijven over websites en Blocks.",
  seo: {
    title: "Veelgestelde vragen — Web, Blocks & online tools voor KMO's",
    description:
      "Antwoorden op vragen over kosten, doorlooptijd, GDPR, Blocks en websites voor Belgische KMO's.",
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
            "KMO staat voor kleine of middelgrote onderneming. In België gaat het meestal om bedrijven met minder dan 250 medewerkers en een beperkte omzet. blockken.solutions richt zich specifiek op deze ondernemers die een professionele website en online tools nodig hebben zonder grote bedrijfsbudgetten.",
        },
        {
          id: "wat-is-ai-vindbaarheid",
          question: "Wat betekent gevonden worden in ChatGPT?",
          answer:
            "Steeds meer klanten zoeken via ChatGPT, Gemini en vergelijkbare tools — niet alleen via Google. Wij zorgen dat uw bedrijf daar correct en duidelijk wordt vermeld, met heldere content en de juiste technische basis op uw website.",
        },
        {
          id: "wat-is-block",
          question: "Wat is een Block?",
          answer:
            "Een Block is een hapklare extra op uw website — bijvoorbeeld online bestellen, cadeaubonnen verkopen, klantvragen beantwoorden of reviews beantwoorden. U kiest wat past bij uw zaak; wij bouwen het in. Blocks zijn beschikbaar vanaf het pakket [Website + Blocks](/#prijzen). Bekijk onze [Blocks-bibliotheek](/blocks) of [sectorpagina's](/sectoren).",
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
            "Ons instappakket Digitale fundering start vanaf € 999 setup en € 49/mnd. Bekijk alle pakketten op de prijzenpagina.",
          answer:
            "Ons instappakket [Digitale fundering](/#prijzen) start vanaf € 999 eenmalige setup en € 49/mnd voor hosting en onderhoud — een snelle website zonder Blocks. [Website + Blocks](/#prijzen) (met één Block inbegrepen en vindbaarheid in ChatGPT) start vanaf € 1.899 setup en € 149/mnd. [Digitaal maatwerk](/#prijzen) vanaf € 3.500 setup en € 299/mnd. Na een gratis kennismakingsgesprek ontvangt u een offerte op maat.",
        },
        {
          id: "verschil-pakketten",
          question: "Wat is het verschil tussen de drie pakketten?",
          teaser:
            "Digitale fundering levert een website; Website + Blocks voegt Blocks en ChatGPT-vindbaarheid toe; Digitaal maatwerk bouwt verder met koppelingen aan uw bestaande tools.",
          answer:
            "[Digitale fundering](/#prijzen) levert een snelle, professionele website met basis SEO, cookiebanner, GDPR-basissetup en EU-hosting — zonder Blocks. [Website + Blocks](/#prijzen) voegt daar één [Block naar keuze](/blocks), vindbaarheid in Google én ChatGPT (en vergelijkbare tools), en mooie voorvertoning in WhatsApp en LinkedIn aan toe. [Digitaal maatwerk](/#prijzen) bouwt verder met koppelingen aan uw bestaande software en Blocks op maat.",
        },
        {
          id: "kosten-blocks",
          question: "Wat kost een Block voor mijn bedrijf?",
          teaser:
            "Blocks zijn beschikbaar vanaf Website + Blocks — één Block zit inbegrepen.",
          answer:
            "[Blocks](/blocks) zijn beschikbaar vanaf het pakket [Website + Blocks](/#prijzen). Eén Block naar keuze zit inbegrepen; extra Blocks kosten vanaf € 399 eenmalig plus € 15/mnd. Online betaal-Blocks rekenen transactiekosten via de betaalprovider — wij vermelden dit transparant in uw offerte.",
        },
        {
          id: "block-zonder-website",
          question: "Kan ik een Block afnemen zonder nieuwe website?",
          answer:
            "Blocks zijn ontworpen als onderdeel van een blockken.solutions-website. Heeft u al een website en wilt u een specifieke functie? [Plan een gesprek](/plan-gesprek) — we bekijken samen wat past bij uw situatie.",
        },
        {
          id: "abonnement-inhoud",
          question: "Wat zit er in het maandelijks abonnement?",
          answer:
            "Het basisabonnement (€ 49/mnd) omvat EU-hosting, back-ups en onderhoud van uw website. Het Website + Blocks-abonnement (€ 149/mnd) voegt daar onderhoud van uw Blocks en alles uit het basisabonnement aan toe. Digitaal maatwerk (€ 299/mnd) voegt beheer van softwarekoppelingen en prioritaire support met vaste contactpersoon toe.",
        },
        {
          id: "cookie-gdpr",
          question: "Zit een cookiebanner in mijn pakket?",
          teaser:
            "Ja — elk pakket bevat een GDPR-conforme cookiebanner en basissetup.",
          answer:
            "Ja. Elk [pakket](/#prijzen) bevat een GDPR-conforme cookiebanner en basissetup, inclusief contactformulier en koppeling naar uw privacyverklaring — zodat uw website voldoet aan Belgische en Europese privacywetgeving.",
        },
        {
          id: "content-aanpassen",
          question: "Kan ik mijn website zelf aanpassen, of doet u dat voor mij?",
          teaser:
            "Elk pakket bevat een beheersysteem om zelf teksten en afbeeldingen aan te passen. Liever doorsturen? Wij passen teksten voor u aan vanaf € 49/mnd.",
          answer:
            "Ja, op beide manieren. Elk pakket bevat een gebruiksvriendelijk beheersysteem waarmee u zelf teksten en afbeeldingen aanpast — zonder technische kennis. Tijdens de onboarding leren we u hoe dat werkt. Liever dat wij het doen? Wij passen teksten en afbeeldingen voor u aan vanaf € 49/mnd — doorgaans binnen 5 werkdagen. Grotere wijzigingen, zoals een nieuwe pagina of herstructurering, behandelen we apart als projectwerk.",
        },
        {
          id: "pilot-programma",
          question: "Wat is het pilot-programma?",
          teaser:
            "We zoeken 2–3 proefklanten per sector tegen scherp tarief — met extra begeleiding en invloed op het product.",
          answer:
            "blockken.solutions is nieuw. Daarom zoeken we per [sector](/sectoren) 2–3 proefklanten. Als proefklant krijgt u 30% korting op de setup, extra onboarding en directe invloed op hoe het product wordt uitgebouwd. In ruil vragen we feedback na 1 en 3 maanden, en toestemming voor een klantverhaal zodra uw project live staat. [Plan een vrijblijvend gesprek](/plan-gesprek).",
        },
        {
          id: "website-live",
          question: "Hoe snel kan mijn website live?",
          answer:
            "Een marketingwebsite staat gemiddeld binnen 2 tot 4 weken live. Complexere websites met koppelingen aan andere systemen duren 6 tot 12 weken. Na een gratis kennismakingsgesprek ontvangt u een concrete planning.",
        },
        {
          id: "opzeggen-block",
          question: "Wat als ik wil stoppen met een Block?",
          answer:
            "Blocks op maandbasis zijn maandelijks opzegbaar. Bij maatwerk leveren we altijd de broncode en documentatie op, zodat u niet vastzit aan één leverancier. We helpen desgewenst met een nette overdracht.",
        },
      ],
    },
    {
      id: "blocks",
      label: "Blocks",
      items: [
        {
          id: "welke-blocks",
          question: "Welke Blocks zijn er beschikbaar?",
          answer:
            "Onze standaardbibliotheek omvat [Aanvraagfilter](/blocks/aanvraagfilter), [Review-hulp](/blocks/review-hulp), [Digitale receptie](/blocks/digitale-receptie), [Bestel & afhaal](/blocks/bestel-afhaal) en [Cadeaubon](/blocks/cadeaubon). Bekijk per [sector](/sectoren) welke combinatie het best past. Past het niet in onze bibliotheek? Dan bouwen we een [Block op maat](/blocks).",
        },
        {
          id: "blocks-per-sector",
          question: "Welke Blocks passen bij mijn sector?",
          answer:
            "Dat hangt af van uw zaak. Bakkers en slagers profiteren vaak van [Bestel & afhaal](/blocks/bestel-afhaal) en [Cadeaubon](/blocks/cadeaubon). Garages en kappers kiezen vaker [Digitale receptie](/blocks/digitale-receptie) en [Aanvraagfilter](/blocks/aanvraagfilter). Bekijk onze [sectorpagina's](/sectoren) voor concrete aanbevelingen.",
        },
        {
          id: "fair-use-ai",
          question: "Wat betekent normaal gebruik inbegrepen?",
          answer:
            "In het [Website + Blocks-abonnement](/#prijzen) zijn de kosten voor normaal dagelijks gebruik inbegrepen — denk aan dagelijkse klantvragen, review-antwoorden of filteren van aanvragen. Bij uitzonderlijk hoog volume bespreken we vooraf een passend plan, zodat u nooit voor verrassingen staat.",
        },
        {
          id: "onboarding-block",
          question: "Hoe lang duurt de start van een Block?",
          answer:
            "Een standaard Block uit onze [bibliotheek](/blocks) is doorgaans binnen 1 tot 2 weken live na een korte intake. Blocks op maat duren 3 tot 6 weken, afhankelijk van complexiteit — bespreken we in uw kennismakingsgesprek.",
        },
        {
          id: "wat-doet-blockken",
          question: "Wat doet blockken.solutions precies?",
          answer:
            "blockken.solutions bouwt razendsnelle websites met hapklare Blocks voor Belgische KMO's — bakkers, garages, kappers, horeca en dienstverleners. U kiest wat past bij uw zaak; wij bouwen het in.",
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
            "Standaard-Blocks werken standalone op uw website. Heeft u diepere koppeling nodig met boekhouding, CRM, agenda, webshop of andere bedrijfssoftware? Dat bekijken we op maat in [Digitaal maatwerk](/#prijzen).",
        },
        {
          id: "seo-ai-vindbaarheid",
          question: "Biedt u ook SEO en vindbaarheid in ChatGPT?",
          answer:
            "Ja. Basis SEO, cookie/GDPR-basis en lokale vindbaarheid zitten in elk websitepakket. Gevonden worden in ChatGPT en vergelijkbare tools is inbegrepen vanaf [Website + Blocks](/#prijzen). We optimaliseren uw site voor Google én voor tools zoals ChatGPT en Gemini.",
        },
        {
          id: "eigendom-website",
          question: "Behoud ik eigendom van mijn website en data?",
          answer:
            "Ja. U blijft eigenaar van uw content en bedrijfsdata. Bij stopzetten leveren we broncode en documentatie op. Uw data wordt nooit verkocht of gedeeld met derden, behalve wanneer nodig voor de werking van uw Blocks of wettelijk verplicht.",
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
            "Ja. Alle data wordt verwerkt conform GDPR. Hosting gebeurt binnen de EU, met encryptie in transit en at rest. We sluiten verwerkersovereenkomsten af waar nodig en documenteren welke data elke Block gebruikt.",
        },
        {
          id: "data-opslag",
          question: "Waar worden mijn gegevens opgeslagen?",
          answer:
            "Ja. Alle data — website, e-mails en Block-gegevens — wordt gehost binnen de Europese Unie. We werken uitsluitend met GDPR-conforme hostingpartners en sluiten verwerkersovereenkomsten af waar nodig.",
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
  "kosten-blocks",
  "kosten-website",
  "verschil-pakketten",
  "gdpr",
] as const;
