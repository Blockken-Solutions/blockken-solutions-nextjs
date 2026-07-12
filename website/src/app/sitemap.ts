import type { MetadataRoute } from "next";

import { client, fetchOptions } from "@/sanity/client";
import { getSiteSettings } from "@/sanity/fetch";
import { getMetadataBase } from "@/sanity/metadata";
import { SITEMAP_PAGES_QUERY } from "@/sanity/queries";
import type { SITEMAP_PAGES_QUERY_RESULT } from "@/sanity/sanity.types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [siteSettings, pages] = await Promise.all([
    getSiteSettings(),
    client.fetch<SITEMAP_PAGES_QUERY_RESULT>(SITEMAP_PAGES_QUERY, {}, fetchOptions),
  ]);

  const metadataBase = getMetadataBase(siteSettings);

  if (!metadataBase) {
    return [];
  }

  return pages
    .filter((page): page is { slug: string; _updatedAt: string } =>
      Boolean(page.slug),
    )
    .map((page) => ({
      url: new URL(page.slug === "home" ? "/" : `/${page.slug}`, metadataBase).toString(),
      lastModified: page._updatedAt,
    }));
}
