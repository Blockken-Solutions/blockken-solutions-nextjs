import type { AgentItem, AgentsPageContent } from "@/content/types";

import { customAgent } from "./custom-agent";

export const agentsPage: AgentsPageContent = {
  heading: "AI-agents voor KMO's",
  subheading:
    "Kant-en-klare AI-agents, beschikbaar vanaf Slimme groei — één agent inbegrepen in uw pakket.",
  tierRequirementNote:
    "Beschikbaar vanaf pakket Slimme groei. Prijzen voor extra agents vindt u bij onze pakketten.",
  seo: {
    title: "AI-agents voor KMO's — blockken.solutions",
    description:
      "Kant-en-klare AI-agents voor klantenservice, administratie en verkoop. Beschikbaar vanaf Slimme groei — één agent inbegrepen in uw pakket.",
  },
  filterCategories: ["Alle", "Klantenservice", "Administratie", "Verkoop"],
  agents: [
    {
      slug: "lead-pre-kwalificator",
      title: "Lead pre-kwalificator",
      description:
        "Kwalificeert websitebezoekers via intake-vragen en levert gestructureerde leadprofielen af.",
      longDescription:
        "Verlies geen tijd meer aan onserieuze aanvragen. Deze interactieve agent gaat in gesprek met websitebezoekers, stelt de cruciale intake-vragen over projectvereisten en budget, en levert een gekwalificeerd, gestructureerd profiel af in uw mailbox. Werkt standalone — koppeling met uw andere tools is optioneel.",
      category: "Verkoop",
      icon: "user-check",
      useCases: [
        "Actieve uitvraging van specifieke projectdetails",
        "Filtert aanvragen buiten uw regio of budget direct weg",
        "Gestructureerde leadprofielen via e-mail of webhook",
      ],
      includedInTier: "Slimme groei",
      relatedSlugs: ["offerte-generator", "support-agent-247"],
    },
    {
      slug: "support-agent-247",
      title: "Supportagent 24/7",
      description:
        "Beantwoordt klantvragen via chat — ook technische eerstelijns-hulp.",
      longDescription:
        "De supportagent 24/7 beantwoordt veelgestelde klantvragen via uw website-chat, 24 uur per dag. Getraind op uw FAQ, producten en tone-of-voice. Bij technische bedrijven kan de agent ook eerstelijns troubleshooting doen op basis van uw standaardinstructies. Complexe vragen worden doorgestuurd naar uw team.",
      category: "Klantenservice",
      icon: "message-circle",
      useCases: [
        "Automatische beantwoording van FAQ's via website-chat",
        "Eerstelijns troubleshooting op basis van uw handleidingen",
        "Doorgifte naar medewerker bij complexe vragen",
      ],
      includedInTier: "Slimme groei",
      relatedSlugs: ["email-review-assistent", "afspraak-doorverwijzer"],
    },
    {
      slug: "email-review-assistent",
      title: "E-mail- en reviewassistent",
      description:
        "Schrijft concept-antwoorden voor e-mails en Google-reviews in uw tone-of-voice.",
      longDescription:
        "Geen uren meer besteden aan formuleren van e-mails of Google-reviews. Plak een inkomende mail of review, en de agent levert een professioneel concept-antwoord in uw tone-of-voice. U keurt altijd goed vóór verzending — geen automatische replies, wel uren tijdsbesparing.",
      category: "Administratie",
      icon: "pen-line",
      useCases: [
        "Concept-antwoorden voor klant-e-mails in uw stijl",
        "Professionele reacties op Google-reviews",
        "Consistente tone-of-voice zonder copy-paste",
      ],
      includedInTier: "Slimme groei",
      relatedSlugs: ["support-agent-247", "lead-pre-kwalificator"],
    },
    {
      slug: "offerte-generator",
      title: "Offertegenerator",
      description:
        "Maakt professionele offertes op basis van uw templates en klantgegevens.",
      longDescription:
        "De offertegenerator vult uw templates automatisch in met klantgegevens, producten en prijzen, en levert een kant-en-klare PDF-offerte. U keurt altijd goed vóór verzending — geen fouten, geen copy-paste. Koppeling met uw bestaande tools is beschikbaar in Digitaal maatwerk.",
      category: "Verkoop",
      icon: "clipboard-list",
      useCases: [
        "Offertes genereren vanuit formulier of intake",
        "Consistente huisstijl en prijsberekening",
        "Goedkeuringsflow vóór verzending naar klant",
      ],
      includedInTier: "Slimme groei",
      relatedSlugs: ["lead-pre-kwalificator", "factuur-extractor"],
    },
    {
      slug: "factuur-extractor",
      title: "Factuurextractor",
      description:
        "Leest PDF-facturen uit en zet gestructureerde gegevens klaar ter controle.",
      longDescription:
        "De factuurextractor scant inkomende PDF-facturen, extraheert leverancier, bedrag, BTW en vervaldatum, en zet deze klaar ter controle via e-mail of spreadsheet. U keurt goed vóór verdere verwerking. Automatische doorstuur naar uw boekhoud- of andere bedrijfssoftware is beschikbaar in Digitaal maatwerk.",
      category: "Administratie",
      icon: "file-text",
      useCases: [
        "Facturen inlezen via upload of e-mail doorsturen",
        "Gestructureerde output naar review-e-mail of spreadsheet",
        "Foutdetectie bij ontbrekende velden",
      ],
      includedInTier: "Slimme groei",
      relatedSlugs: ["offerte-generator", "email-review-assistent"],
    },
    {
      slug: "afspraak-doorverwijzer",
      title: "Afspraakdoorverwijzer",
      description:
        "Analyseert klantverzoeken en verwijst door naar het juiste afspraaktype of planningslink.",
      longDescription:
        "De afspraakdoorverwijzer analyseert het verzoek van uw klant via chat, stelt gerichte vervolgvragen en verwijst door naar het juiste afspraaktype of uw planningslink. Slimme intake vóór de afspraak — zonder complexe softwarekoppelingen. Diepere koppeling met agenda, CRM of andere tools is beschikbaar in Digitaal maatwerk.",
      category: "Klantenservice",
      icon: "calendar-days",
      useCases: [
        "Probleemanalyse en intake vóór afspraak",
        "Doorverwijzing naar planningslink of het juiste contactkanaal",
        "Filtert verzoeken buiten uw dienstenaanbod",
      ],
      includedInTier: "Slimme groei",
      relatedSlugs: ["support-agent-247", "lead-pre-kwalificator"],
    },
  ],
  customAgent,
};

export function getAgentPreviewItems(): AgentItem[] {
  return agentsPage.agents.map(
    ({ slug, title, description, category, icon }) => ({
      slug,
      title,
      description,
      category,
      icon,
    }),
  );
}

export function getAgentBySlug(slug: string) {
  return agentsPage.agents.find((agent) => agent.slug === slug);
}

export function getAllAgentSlugs(): string[] {
  return agentsPage.agents.map((agent) => agent.slug);
}
