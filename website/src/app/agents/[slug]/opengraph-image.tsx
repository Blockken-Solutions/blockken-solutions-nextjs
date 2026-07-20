import { getAgentBySlug, getAllAgentSlugs } from "@/content/agents";
import { site } from "@/content/site";
import { createOgImage, ogImageContentType, ogImageSize } from "@/lib/og/create-og-image";

export const size = ogImageSize;
export const contentType = ogImageContentType;

type AgentOgImageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllAgentSlugs().map((slug) => ({ slug }));
}

export default async function OpenGraphImage({ params }: AgentOgImageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return createOgImage({
      title: "AI Agent voor KMO's",
      description: site.seo.description,
    });
  }

  return createOgImage({
    title: agent.title,
    description: agent.description,
    footer: agent.price,
  });
}
