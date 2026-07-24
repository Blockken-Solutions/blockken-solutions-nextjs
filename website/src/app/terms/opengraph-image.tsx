import { termsPage } from "@/content/legal/terms";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = termsPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    title: termsPage.title,
    description: termsPage.seo.description,
  });
}
