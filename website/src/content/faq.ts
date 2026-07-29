import type { FaqItem, FaqPageContent } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\([^)]+\)/g;

export function stripFaqAnswerMarkdown(answer: string): string {
  return answer.replace(MARKDOWN_LINK_PATTERN, "$1");
}

export const faqPage: FaqPageContent = {
  heading: "Veelgestelde vragen",
  subheading:
    "Antwoorden op de meest gestelde vragen van Belgische bedrijven over websites, AI-agents en automatisering.",
  seo: {
    title: "Veelgestelde vragen — Web, AI & Automatisering voor KMO's",
    description:
      "Antwoorden op vragen over kosten, doorlooptijd, GDPR, softwarekoppelingen en custom AI-agents voor Belgische KMO's.",
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
            "KMO staat voor kleine of middelgrote onderneming. In België gaat het meestal om bedrijven met minder dan 250 medewerkers en een beperkte omzet. blockken.solutions richt zich specifiek op deze ondernemers die professionele digitalisering nodig hebben zonder enterprise-budgetten.",
        },
        {
          id: "wat-is-ai-vindbaarheid",
          question: "Wat is AI-vindbaarheid?",
          answer:
            "AI-vindbaarheid (ook wel AEO genoemd) is optimalisatie zodat uw bedrijf correct wordt genoemd in antwoordmachines zoals ChatGPT, Gemini, Google AI Overviews en andere AI-assistenten. Dat bereiken we via duidelijke content, gestructureerde data, llms.txt en een goed vindbare website.",
        },
        {
          id: "wat-is-llms-txt",
          question: "Wat is llms.txt?",
          answer:
            "llms.txt is een machine-leesbaar overzicht van uw bedrijf, diensten en contactgegevens op een vaste URL (bijv. /llms.txt). AI-systemen gebruiken dit om uw merk en aanbod correct te begrijpen en te citeren. Vanaf Slimme groei zetten wij dit voor u op.",
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
            "Ons instappakket [Digitale fundering](/#prijzen) start vanaf € 999 eenmalige setup en € 49/mnd voor hosting en onderhoud. [Slimme groei](/#prijzen) (met AI-agent en AI-vindbaarheid) start vanaf € 1.899 setup en € 149/mnd. [Digitaal maatwerk](/#prijzen) vanaf € 3.500 setup en € 299/mnd. Na een gratis strategiegesprek ontvangt u een offerte op maat.",
        },
        {
          id: "verschil-pakketten",
          question: "Wat is het verschil tussen de drie pakketten?",
          teaser:
            "Digitale fundering levert een website met cookie/GDPR-basis; Slimme groei voegt AI-vindbaarheid, infrastructuur en een agent toe; Digitaal maatwerk bouwt verder met koppelingen aan uw bestaande tools.",
          answer:
            "[Digitale fundering](/#prijzen) levert een snelle, professionele website met basis SEO, cookiebanner, GDPR-basissetup en EU-hosting — zonder AI-automatisering. [Slimme groei](/#prijzen) voegt daar vindbaarheid in Google én AI-chatbots (ChatGPT, Gemini, e.a.), linkpreviews, AI-infrastructuur en één kant-en-klare [AI-agent](/agents) aan toe. [Digitaal maatwerk](/#prijzen) bouwt verder met koppelingen aan uw bestaande software en custom AI-functionaliteiten op maat van uw processen.",
        },
        {
          id: "kosten-ai-agent",
          question: "Wat kost een AI-agent voor mijn bedrijf?",
          teaser:
            "Agents zijn beschikbaar vanaf Slimme groei — één inbegrepen, extra agents € 499 setup + € 49/mnd.",
          answer:
            "Kant-en-klare [agents](/agents) zijn beschikbaar vanaf [Slimme groei](/#prijzen). Eén agent zit inbegrepen; extra agents kosten € 499 setup plus € 49/mnd. Het Slimme groei-abonnement (€ 149/mnd) dekt de AI-infrastructuur (fair-use systeemkosten, kwaliteitsmonitoring) — losse agents zonder dit abonnement zijn niet beschikbaar. Een volledig op maat gebouwde agent begint typisch rond € 2.500 eenmalig, afhankelijk van gewenste koppelingen en complexiteit.",
        },
        {
          id: "waarom-slimme-groei-agent",
          question: "Waarom Slimme groei en niet Digitale fundering met een losse agent?",
          teaser:
            "AI-agents vereisen AI-infrastructuur — dat zit in het Slimme groei-abonnement, niet in Digitale fundering.",
          answer:
            "AI-agents draaien op dedicated infrastructuur: fair-use AI-kosten, kwaliteitsmonitoring en naadloze integratie met uw website. Dat zit in het [Slimme groei-abonnement](/#prijzen) (€ 149/mnd), niet in [Digitale fundering](/#prijzen) (€ 49/mnd — hosting en onderhoud only). Bij Slimme groei zit één agent inbegrepen; extra agents zijn € 499 setup plus € 49/mnd.",
        },
        {
          id: "agent-zonder-website",
          question: "Kan ik een agent afnemen zonder nieuwe website?",
          answer:
            "Agents zijn standaard onderdeel van [Slimme groei](/#prijzen) en hoger. Heeft u al een website en wilt u een agent koppelen? [Plan een gesprek](/plan-gesprek) — we bekijken samen wat technisch en commercieel haalbaar is.",
        },
        {
          id: "abonnement-inhoud",
          question: "Wat zit er in het maandelijks abonnement?",
          answer:
            "Het basisabonnement (€ 49/mnd) omvat EU-hosting, back-ups en onderhoud van uw website. Het Slimme groei-abonnement (€ 149/mnd) voegt daar AI-systeemkosten (fair-use), kwaliteitsmonitoring van de AI en alles uit het basisabonnement aan toe. Digitaal maatwerk (€ 299/mnd) voegt API-beheer en prioritaire support met vaste contactpersoon toe.",
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
          question: "Kan ik mijn website zelf aanpassen, of doen jullie dat?",
          teaser:
            "Elk pakket bevat een beheersysteem om zelf teksten en afbeeldingen aan te passen. Liever doorsturen? Content support vanaf € 49/mnd.",
          answer:
            "Ja, op beide manieren. Elk pakket bevat een gebruiksvriendelijk beheersysteem waarmee u zelf teksten en afbeeldingen aanpast — zonder technische kennis. Tijdens de onboarding leren we u hoe dat werkt. Liever dat wij het doen? Met content support (vanaf € 49/mnd) stuurt u uw wijzigingen door en passen wij ze doorgaans binnen 5 werkdagen aan. Grotere wijzigingen, zoals een nieuwe pagina of herstructurering, behandelen we apart als projectwerk.",
        },
        {
          id: "website-live",
          question: "Hoe snel kan mijn website live?",
          answer:
            "Een marketingwebsite staat gemiddeld binnen 2 tot 4 weken live. Complexere webapplicaties met koppelingen aan andere systemen duren 6 tot 12 weken. Na een gratis strategiegesprek ontvangt u een concrete planning.",
        },
        {
          id: "opzeggen",
          question: "Wat als ik wil stoppen met een agent?",
          answer:
            "Maandelijkse agents zijn maandelijks opzegbaar. Bij maatwerk leveren we altijd de broncode en documentatie op, zodat u niet vendor-locked bent. We helpen desgewenst met een nette overdracht.",
        },
      ],
    },
    {
      id: "ai-agents",
      label: "AI & automatisering",
      items: [
        {
          id: "chatgpt-verschil",
          question: "Wat is het verschil tussen ChatGPT en een custom AI-agent?",
          answer:
            "ChatGPT is een generieke chatbot zonder kennis van uw bedrijf. Een custom [AI-agent](/agents) is getraind op uw processen en voert concrete taken uit — zoals leads kwalificeren, klantvragen beantwoorden, e-mails opstellen, facturen uitlezen of offertes genereren. U keurt altijd goed vóór verzending.",
        },
        {
          id: "technische-kennis",
          question: "Moet ik technische kennis hebben om een agent te gebruiken?",
          answer:
            "Nee. Onze agents zijn plug-and-play ontworpen voor bedrijfseigenaars en office managers. U krijgt een korte onboarding en duidelijke documentatie. Technisch onderhoud nemen wij over.",
        },
        {
          id: "fair-use-ai",
          question: "Wat betekent fair-use voor AI-kosten?",
          answer:
            "In het [Slimme groei-abonnement](/#prijzen) zijn AI-systeemkosten inbegrepen voor normaal gebruik door een KMO — denk aan dagelijkse klantvragen, e-mailconcepten, lead-intakes, factuurverwerking of offertes. Bij uitzonderlijk hoog volume bespreken we vooraf een passend plan, zodat u nooit voor verrassingen staat.",
        },
        {
          id: "onboarding-agent",
          question: "Hoe lang duurt de onboarding van een agent?",
          answer:
            "Een kant-en-klare agent uit onze [bibliotheek](/agents) is doorgaans binnen 1 tot 2 weken operationeel na een korte intake. Maatwerk-agents duren 3 tot 6 weken, afhankelijk van gewenste koppelingen en complexiteit.",
        },
        {
          id: "wat-doet-blockken",
          question: "Wat doet blockken.solutions precies?",
          answer:
            "blockken.solutions bouwt razendsnelle websites en slimme AI-agents voor Belgische KMO's. We combineren moderne webtechnologie met praktische automatisering zodat u minder tijd kwijt bent aan administratie en meer aan groei.",
        },
      ],
    },
    {
      id: "techniek",
      label: "Koppelingen & techniek",
      items: [
        {
          id: "ondersteunde-tools",
          question: "Met welke software kunnen jullie koppelen?",
          answer:
            "Standaard-agents werken met lichte koppelingen: e-mail, webhooks, spreadsheets en planningslinks. Heeft u diepere koppeling nodig met boekhouding, CRM, agenda, webshop of andere bedrijfssoftware? Dat bekijken we op maat in [Digitaal maatwerk](/#prijzen). De standaard [factuurextractor](/agents/factuur-extractor) levert gestructureerde factuurgegevens ter controle — via e-mail, spreadsheet of een andere output die voor u werkt.",
        },
        {
          id: "seo-ai-vindbaarheid",
          question: "Bieden jullie ook SEO en vindbaarheid in AI-chatbots?",
          answer:
            "Ja. Basis SEO, cookie/GDPR-basis en lokale vindbaarheid zitten in elk websitepakket. AI-vindbaarheid (optimalisatie voor antwoordmachines via llms.txt, gestructureerde data en content) is inbegrepen vanaf [Slimme groei](/#prijzen). We optimaliseren uw site voor Google én voor AI-chatbots zoals ChatGPT, Gemini en andere AI-assistenten.",
        },
        {
          id: "eigendom-website",
          question: "Behoud ik eigendom van mijn website en data?",
          answer:
            "Ja. U blijft eigenaar van uw content en bedrijfsdata. Bij stopzetten leveren we broncode en documentatie op. Uw data wordt nooit verkocht of gedeeld met derden, behalve wanneer nodig voor de werking van uw agent of wettelijk verplicht.",
        },
        {
          id: "gratis-scan",
          question: "Kan ik eerst een gratis scan laten uitvoeren?",
          answer:
            "Ja. Via onze [gratis website scan](/gratis-scan) ziet u direct hoe uw huidige site scoort op laadtijd, SEO, toegankelijkheid en performance. Geen registratie nodig — vul uw URL in en ontvang binnen 10–30 seconden een Lighthouse-rapport.",
        },
        {
          id: "scan-bereik",
          question: "Wat analyseert de gratis scan precies?",
          answer:
            "De scan analyseert één pagina-URL via Google PageSpeed Insights (mobiel). U ontvangt scores voor performance, SEO, toegankelijkheid en best practices, plus Core Web Vitals waar beschikbaar. Voor een volledige site-audit plannen we een apart gesprek.",
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
            "Ja. Alle data wordt verwerkt conform GDPR. Hosting gebeurt binnen de EU, met encryptie in transit en at rest. We sluiten verwerkersovereenkomsten af waar nodig en documenteren welke data elke agent gebruikt.",
        },
        {
          id: "data-opslag",
          question: "Waar worden mijn gegevens opgeslagen?",
          answer:
            "Al uw data — website, e-mails en agent-gesprekken — wordt gehost binnen de Europese Unie. We werken uitsluitend met GDPR-conforme hostingpartners en sluiten verwerkersovereenkomsten af waar nodig.",
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
      "Plan een gratis strategiegesprek. Geen verkooppraat — wel concrete inzichten voor uw bedrijf.",
    primary: {
      label: "Plan een gratis gesprek →",
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
  "kosten-ai-agent",
  "kosten-website",
  "verschil-pakketten",
  "gdpr",
] as const;
