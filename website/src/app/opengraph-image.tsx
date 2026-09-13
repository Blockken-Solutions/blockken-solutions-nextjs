import { site } from "@/content/site";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = site.seo.title;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default async function OpenGraphImage() {
  return createOgImage({
    title: "Web, Blocks & online tools voor KMO's",
    description:
      "Razendsnelle websites met hapklare Blocks — veilig, op maat, gebouwd in België.",
    footer: site.footerTagline,
  });
}
