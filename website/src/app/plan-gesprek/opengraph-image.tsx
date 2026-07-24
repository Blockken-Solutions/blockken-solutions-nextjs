import { planGesprekPage } from "@/content/plan-gesprek";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = planGesprekPage.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    title: planGesprekPage.heading,
    description: planGesprekPage.subheading,
  });
}
