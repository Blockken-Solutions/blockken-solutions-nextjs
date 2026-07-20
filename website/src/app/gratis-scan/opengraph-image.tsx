import { scanPage } from "@/content/scan";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = scanPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return createOgImage({
    title: scanPage.heading,
    description: scanPage.subheading,
  });
}
