import { getBlockBySlug } from "@/content/blocks";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const alt = "Block — blockken.solutions";
export const size = ogImageSize;
export const contentType = ogImageContentType;

type OpenGraphImageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { slug } = await params;
  const block = getBlockBySlug(slug);

  return createOgImage({
    title: block?.title ?? "Block",
    description: block?.tagline ?? "Hapklare Blocks voor KMO's",
  });
}
