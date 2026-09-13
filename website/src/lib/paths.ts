export { isHomeSectionHref, parseHomeSectionId } from "@/lib/scroll-to-section";

export const SCAN_PATH = "/gratis-scan";
export const CONTACT_SECTION_ID = "contact";
export const CONTACT_PLAN_SECTION_ID = "contact-plan";
export const PLAN_GESPREK_PATH = "/plan-gesprek";

export function homeSection(id: string): string {
  return `/#${id}`;
}

export function contactPlanSection(): string {
  return homeSection(CONTACT_SECTION_ID);
}

export function scanWithUrl(url: string): string {
  return `${SCAN_PATH}?url=${encodeURIComponent(url)}`;
}

export function contactWithBlock(blockSlug: string): string {
  return `/?block=${encodeURIComponent(blockSlug)}#${CONTACT_SECTION_ID}`;
}

export function contactWithSector(sectorSlug: string): string {
  return `/?sector=${encodeURIComponent(sectorSlug)}#${CONTACT_SECTION_ID}`;
}

/** @deprecated Use contactWithBlock */
export function contactWithAgent(agentSlug: string): string {
  return contactWithBlock(agentSlug);
}

export function contactWithScan(result: {
  url: string;
  performance: number;
  seo: number;
  accessibility: number;
  bestPractices: number;
}): string {
  const params = new URLSearchParams({
    scan: result.url,
    perf: String(result.performance),
    seo: String(result.seo),
    a11y: String(result.accessibility),
    bp: String(result.bestPractices),
  });
  return `/?${params.toString()}#${CONTACT_SECTION_ID}`;
}
