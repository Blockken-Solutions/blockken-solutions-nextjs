import type { AgentsPageContent } from "@/content/types";

import { customAgent } from "./custom-agent";

export const agentsPage: AgentsPageContent = {
  heading: "AI Agents voor KMO's",
  subheading:
    "Kant-en-klare AI-werknemers die direct inzetbaar zijn. Transparante prijs, geen technische kennis vereist.",
  seo: {
    title: "AI Agents voor KMO's — blockken.solutions",
    description:
      "Ontdek kant-en-klare AI-agents voor boekhouding, klantenservice en sales. Vanaf €49/maand, direct inzetbaar voor Belgische KMO's.",
  },
  filterCategories: ["Alle", "Klantenservice", "Boekhouding", "Sales"],
  agents: [
    {
      slug: "support-agent-247",
      title: "Support Agent 24/7",
      description: "Beantwoordt klantvragen automatisch via chat en e-mail.",
      longDescription:
        "De Support Agent 24/7 beantwoordt veelgestelde klantvragen via uw website-chat en e-mail, 24 uur per dag. Getraind op uw producten, FAQ en tone-of-voice. Complexe vragen worden doorgestuurd naar uw team.",
      price: "Vanaf €49/mnd",
      category: "Klantenservice",
      icon: "message-circle",
      useCases: [
        "Automatische beantwoording van FAQ's",
        "E-mail triage en concept-antwoorden",
        "Doorgifte naar medewerker bij complexe vragen",
      ],
    },
    {
      slug: "factuur-extractor",
      title: "Factuur Extractor",
      description: "Leest automatisch PDF-facturen in naar uw boekhouding.",
      longDescription:
        "De Factuur Extractor scant inkomende PDF-facturen, extraheert leverancier, bedrag, BTW en vervaldatum, en zet deze automatisch klaar in uw boekhoudsoftware. Ideaal voor KMO's die wekelijks tientallen facturen manueel verwerken.",
      price: "Vanaf €49/mnd",
      category: "Boekhouding",
      icon: "file-text",
      useCases: [
        "Automatisch facturen inlezen uit e-mail of upload",
        "Koppeling met Exact Online, Yuki of Billit",
        "Foutdetectie bij ontbrekende velden",
      ],
    },
    {
      slug: "offerte-generator",
      title: "Offerte Generator",
      description: "Maakt professionele offertes op basis van uw templates en klantgegevens.",
      longDescription:
        "De Offerte Generator vult uw templates automatisch in met klantgegevens, producten en prijzen, en levert een kant-en-klare PDF-offerte. U keurt altijd goed vóór verzending — geen fouten, geen copy-paste.",
      price: "Vanaf €59/mnd",
      category: "Sales",
      icon: "clipboard-list",
      useCases: [
        "Offertes genereren vanuit CRM of formulier",
        "Consistente huisstijl en prijsberekening",
        "Goedkeuringsflow vóór verzending naar klant",
      ],
    },
    {
      slug: "triage-agenda-planner",
      title: "Triage & Agenda Planner",
      description:
        "Analyseert klantverzoeken en plant automatisch afspraken in uw kalender.",
      longDescription:
        "De Triage & Agenda Planner analyseert het probleem of verzoek van uw klant via de chat. De AI schat direct in hoeveel tijd of welke dienst er nodig is en plant, zonder menselijke tussenkomst, de juiste afspraak in uw bestaande kalendersysteem.",
      price: "Vanaf €59/mnd",
      category: "Klantenservice",
      icon: "calendar-days",
      useCases: [
        "Probleemanalyse en slimme tijdsinschatting vooraf",
        "Real-time koppeling met agenda's (Google Calendar, Calendly, etc.)",
        "Voorkomt foutieve of dubbele boekingen",
      ],
    },
    {
      slug: "lead-pre-kwalificator",
      title: "Lead Pre-kwalificator",
      description:
        "Kwalificeert websitebezoekers via intake-vragen en levert gestructureerde leadprofielen af.",
      longDescription:
        "Verlies geen tijd meer aan onserieuze aanvragen. Deze interactieve agent gaat in gesprek met websitebezoekers, stelt de cruciale intake-vragen over projectvereisten en budget, en levert een gekwalificeerd, gestructureerd profiel af in uw mailbox of CRM.",
      price: "Vanaf €59/mnd",
      category: "Sales",
      icon: "user-check",
      useCases: [
        "Actieve uitvraging van specifieke projectdetails",
        "Filtert aanvragen buiten uw regio of budget direct weg",
        "Automatische doorsturing van warme leads naar uw salesteam",
      ],
    },
    {
      slug: "upsell-bestel-assistent",
      title: "Upsell & Bestel Assistent",
      description:
        "Begeleidt klanten door uw assortiment en verhoogt uw gemiddelde bestelwaarde.",
      longDescription:
        "Verhoog direct uw gemiddelde bestelwaarde. Deze slimme assistent begeleidt klanten door uw assortiment, beantwoordt productvragen en stelt proactief bijpassende producten voor. De agent begeleidt de klant naadloos naar de checkout.",
      price: "Vanaf €59/mnd",
      category: "Sales",
      icon: "shopping-cart",
      useCases: [
        "Gepersonaliseerd productadvies op basis van klantbehoeften",
        "Proactieve up- en cross-selling (bijv. wijnsuggesties bij gerechten)",
        "Klaarzetten van winkelmandjes of gestructureerde bestel-e-mails",
      ],
    },
    {
      slug: "storing-nazorg-bot",
      title: "Storing & Nazorg Bot",
      description:
        "Voert eerstelijns diagnose uit bij defecten en bereidt reparatie-intakes voor.",
      longDescription:
        "Ontlast uw telefoonlijn bij technische vragen. Deze agent voert een eerstelijns diagnose uit bij defecten. Simpele problemen worden direct opgelost met uw standaardinstructies; bij complexe storingen bereidt de AI een compleet reparatie-ticket voor.",
      price: "Vanaf €49/mnd",
      category: "Klantenservice",
      icon: "wrench",
      useCases: [
        "Stap-voor-stap probleemoplossing voor veelvoorkomende defecten",
        "Verzamelen van foutcodes, modelnummers en foto's",
        "Automatisch aanmaken van gestructureerde reparatie-intakes",
      ],
    },
  ],
  customAgent,
};
