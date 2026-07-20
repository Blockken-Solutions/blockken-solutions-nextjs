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
