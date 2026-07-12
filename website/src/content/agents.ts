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
  ],
  customAgent,
};
