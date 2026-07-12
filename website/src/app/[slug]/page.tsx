import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageContent } from "@/components/page-content";
import {
  getPageBySlug,
  getPageSlugs,
  getProjects,
  getSiteSettings,
} from "@/sanity/fetch";
import { buildPageMetadata, toNextMetadata } from "@/sanity/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = await getPageSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [page, siteSettings] = await Promise.all([
    getPageBySlug(slug),
    getSiteSettings(),
  ]);

  if (!page) {
    return {
      title: "Not found",
    };
  }

  return toNextMetadata(
    buildPageMetadata(page, siteSettings, `/${slug}`),
    siteSettings,
  );
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const [page, siteSettings, projects] = await Promise.all([
    getPageBySlug(slug),
    getSiteSettings(),
    getProjects(),
  ]);

  if (!page) {
    notFound();
  }

  return (
    <PageContent
      page={page}
      siteSettings={siteSettings}
      projects={projects}
    />
  );
}
