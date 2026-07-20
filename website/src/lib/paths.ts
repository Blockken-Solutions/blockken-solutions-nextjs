export { isHomeSectionHref, parseHomeSectionId } from "@/lib/scroll-to-section";

export const SCAN_PATH = "/gratis-scan";

export function homeSection(id: string): string {
  return `/#${id}`;
}

export function scanWithUrl(url: string): string {
  return `${SCAN_PATH}?url=${encodeURIComponent(url)}`;
}

export function contactWithAgent(agentSlug: string): string {
  return `/?agent=${encodeURIComponent(agentSlug)}#contact`;
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
  return `/?${params.toString()}#contact`;
}
