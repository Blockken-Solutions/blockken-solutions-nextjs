import type { CustomAgentCta } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const customAgent: CustomAgentCta = {
  title: "Agent op maat",
  description:
    "Heeft u een proces dat nergens in een standaardpakket past? Samen ontwerpen we een agent die exact aansluit op uw werking.",
  longDescription:
    "Van interne workflows tot koppelingen met uw bestaande software — als het repetitief is, kunnen wij het automatiseren. We starten met een gratis strategiegesprek en leveren een heldere offerte, zonder verplichtingen.",
  price: "Op offerte",
  icon: "sparkles",
  cta: {
    label: "Bespreek uw idee →",
    href: contactPlanSection(),
  },
};
