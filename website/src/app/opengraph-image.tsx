import { site } from "@/content/site";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = site.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    title: "Websites voor Belgische KMO's",
    description:
      "Razendsnelle websites — volledig beheerd, met CMS of maatwerk. Veilig, op maat, gebouwd in België.",
    footer: site.footerTagline,
  });
}
