import { agentsPage } from "@/content/agents";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = agentsPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return createOgImage({
    title: agentsPage.heading,
    description: agentsPage.subheading,
  });
}
