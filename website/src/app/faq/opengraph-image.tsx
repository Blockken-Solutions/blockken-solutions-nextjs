import { faqPage } from "@/content/faq";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = faqPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return createOgImage({
    title: faqPage.heading,
    description: faqPage.subheading,
  });
}
