import { notFound } from "next/navigation";

import { BlockDetail } from "@/components/blocks/block-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { blocksPage, getAllBlockSlugs, getBlockBySlug } from "@/content/blocks";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { buildBlockGraph } from "@/lib/structured-data";

type BlockDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlockSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlockDetailPageProps) {
  const { slug } = await params;
  const block = getBlockBySlug(slug);

  if (!block) {
    return createMetadata({
      pathname: `/blocks/${slug}`,
      title: "Block niet gevonden",
      description: blocksPage.seo.description,
      noIndex: true,
    });
  }

  return createMetadata({
    pathname: `/blocks/${slug}`,
    title: `${block.title} — Block voor KMO's | ${site.name}`,
    description: block.summary,
  });
}

export default async function BlockDetailPage({ params }: BlockDetailPageProps) {
  const { slug } = await params;
  const block = getBlockBySlug(slug);

  if (!block) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildBlockGraph(block)} />
      <BlockDetail block={block} />
    </>
  );
}
