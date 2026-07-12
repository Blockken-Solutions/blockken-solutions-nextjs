import type { Metadata } from "next";

import { PageContent } from "@/components/page-content";
import {
  getHomePage,
  getProjects,
  getSiteSettings,
} from "@/sanity/fetch";
import { buildPageMetadata, toNextMetadata } from "@/sanity/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const [page, siteSettings] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
  ]);

  return toNextMetadata(
    buildPageMetadata(page, siteSettings, "/"),
    siteSettings,
  );
}

export default async function Home() {
  const [page, siteSettings, projects] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
    getProjects(),
  ]);

  return (
    <PageContent
      page={page}
      siteSettings={siteSettings}
      projects={projects}
    />
  );
}
