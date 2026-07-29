import type { CustomAgentCta } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const customAgent: CustomAgentCta = {
  title: "Agent op maat",
  description:
    "Webshop-advies, planning, documentverwerking of sector-specifieke workflows — als het repetitief is maar nergens in onze standaardbibliotheek past, bouwen we het op maat.",
  longDescription:
    "Voorbeelden: productadvies in webshops, koppeling met uw agenda of CRM, automatische documentverwerking of volledig geautomatiseerde workflows. We starten met een gratis strategiegesprek en bekijken samen wat technisch haalbaar is — zonder verplichtingen.",
  price: "Op offerte",
  icon: "sparkles",
  cta: {
    label: "Bespreek uw idee →",
    href: contactPlanSection(),
  },
};
