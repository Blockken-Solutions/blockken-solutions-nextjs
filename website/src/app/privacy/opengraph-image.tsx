import { privacyPage } from "@/content/legal/privacy";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = privacyPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    title: privacyPage.title,
    description: privacyPage.seo.description,
  });
}
