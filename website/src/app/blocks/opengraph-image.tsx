import { blocksPage } from "@/content/blocks";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = blocksPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    title: blocksPage.heading,
    description: blocksPage.subheading,
  });
}
