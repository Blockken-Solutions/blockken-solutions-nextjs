import type { CustomBlockCta } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

export const customBlock: CustomBlockCta = {
  title: "Block op maat",
  description:
    "Online afspraken, sector-specifieke bestelflows of een unieke functie — als het niet in onze standaardbibliotheek past, bouwen we het op maat.",
  longDescription:
    "Voorbeelden: online afspraken gekoppeld aan uw agenda, bestelflow op maat voor uw sector of volledig aangepaste website-functies. We starten met een gratis kennismakingsgesprek en bekijken samen wat past bij uw zaak — zonder verplichtingen.",
  price: "Op offerte",
  icon: "sparkles",
  cta: {
    label: "Bespreek uw idee →",
    href: contactPlanSection(),
  },
};
