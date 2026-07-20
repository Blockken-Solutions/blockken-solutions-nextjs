import type { FaqItem, FaqPageContent } from "@/content/types";
import { homeSection } from "@/lib/paths";

export const faqPage: FaqPageContent = {
  heading: "Veelgestelde vragen",
  subheading:
    "Antwoorden op de meest gestelde vragen van Belgische KMO-eigenaars over websites, AI-agents en automatisering.",
  seo: {
    title: "Veelgestelde vragen — Web, AI & Automatisering voor KMO's",
    description:
      "Antwoorden op vragen over kosten, doorlooptijd, GDPR, boekhoudintegraties en custom AI-agents voor Belgische KMO's.",
  },
  categories: [
    {
      id: "prijzen",
      label: "Prijzen & planning",
      items: [
        {
          id: "kosten-ai-agent",
          question: "Wat kost een AI-agent voor mijn KMO?",
          answer:
            "Kant-en-klare AI-agents starten vanaf €49 per maand. Een volledig op maat gebouwde agent begint typisch rond €2.500 eenmalig, afhankelijk van integraties en complexiteit. U betaalt nooit voor functies die u niet gebruikt.",
        },
        {
          id: "website-live",
          question: "Hoe snel kan mijn website live?",
          answer:
            "Een marketingwebsite staat gemiddeld binnen 2 tot 4 weken live. Complexere webapplicaties met integraties duren 6 tot 12 weken. Na een gratis strategiegesprek ontvangt u een concrete planning.",
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
            "ChatGPT is een generieke chatbot zonder kennis van uw bedrijf. Een custom AI-agent is getraind op uw processen, gekoppeld aan uw systemen en voert concrete taken uit — zoals facturen inlezen, klantvragen beantwoorden of sales-mails opstellen.",
        },
        {
          id: "technische-kennis",
          question: "Moet ik technische kennis hebben om een agent te gebruiken?",
          answer:
            "Nee. Onze agents zijn plug-and-play ontworpen voor KMO-eigenaars en office managers. U krijgt een korte onboarding en duidelijke documentatie. Technisch onderhoud nemen wij over.",
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
      label: "Integraties & techniek",
      items: [
        {
          id: "boekhoudsoftware",
          question: "Werkt dit met mijn bestaande boekhoudsoftware?",
          answer:
            "Ja. We integreren met gangbare tools zoals Exact Online, Yuki, Billit en andere API-koppelingen. De Factuur Extractor-agent leest bijvoorbeeld PDF-facturen automatisch in naar uw boekhouding.",
        },
        {
          id: "seo-ai-vindbaarheid",
          question: "Bieden jullie ook SEO en vindbaarheid in AI-chatbots?",
          answer:
            "Ja. Vindbaarheid is een van onze drie kernservices. We optimaliseren uw site voor Google én voor AI-antwoordmachines via technische SEO, gestructureerde data, llms.txt en content die direct antwoord geeft op klantvragen.",
        },
        {
          id: "gratis-scan",
          question: "Kan ik eerst een gratis scan laten uitvoeren?",
          answer:
            "Ja. Via onze gratis website scan ziet u direct hoe uw huidige site scoort op laadtijd, SEO en content. Geen registratie nodig — vul uw URL in en ontvang binnen enkele seconden een rapport.",
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
          answer:
            "Ja. Alle data wordt verwerkt conform GDPR. Hosting gebeurt binnen de EU, met encryptie in transit en at rest. We sluiten verwerkersovereenkomsten af waar nodig en documenteren welke data elke agent gebruikt.",
        },
      ],
    },
  ],
  cta: {
    heading: "Staat uw vraag er niet bij?",
    subheading:
      "Plan een gratis strategiegesprek. Geen verkooppraat — wel concrete inzichten voor uw business.",
    primary: {
      label: "Plan een gratis gesprek →",
      href: homeSection("contact"),
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
