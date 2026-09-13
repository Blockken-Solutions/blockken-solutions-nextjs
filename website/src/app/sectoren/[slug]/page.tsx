import { notFound } from "next/navigation";

import { SectorDetail } from "@/components/sectors/sector-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllSectorSlugs, getSectorBySlug, sectorsPage } from "@/content/sectors";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { buildSectorGraph } from "@/lib/structured-data";

type SectorDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SectorDetailPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return createMetadata({
      pathname: `/sectoren/${slug}`,
      title: "Sector niet gevonden",
      description: sectorsPage.seo.description,
      noIndex: true,
    });
  }

  return createMetadata({
    pathname: `/sectoren/${slug}`,
    title: `${sector.seo.title} | ${site.name}`,
    description: sector.seo.description,
  });
}

export default async function SectorDetailPage({ params }: SectorDetailPageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildSectorGraph(sector)} />
      <SectorDetail sector={sector} />
    </>
  );
}
