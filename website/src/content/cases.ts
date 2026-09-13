import type { CasesContent } from "@/content/types";

export const cases: CasesContent = {
  heading: "Resultaten",
  subheading:
    "Echte verhalen van blockken.solutions-klanten verschijnen hier zodra de eerste projecten live staan.",
  items: [],
};

export function hasCaseStudies(): boolean {
  return cases.items.length > 0;
}
