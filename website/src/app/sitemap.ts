import type { MetadataRoute } from "next";

import { getAllBlockSlugs } from "@/content/blocks";
import { getAllSectorSlugs } from "@/content/sectors";
import { getMetadataBase } from "@/lib/metadata";
import { indexableRoutes, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const metadataBase = getMetadataBase();

  const staticRoutes = indexableRoutes.map(({ pathname, lastModified }) => ({
    url: new URL(pathname, metadataBase).toString(),
    lastModified: new Date(lastModified),
  }));

  const blockRoutes = getAllBlockSlugs().map((slug) => ({
    url: new URL(`/blocks/${slug}`, metadataBase).toString(),
    lastModified: new Date(site.lastModified),
  }));

  const sectorRoutes = getAllSectorSlugs().map((slug) => ({
    url: new URL(`/sectoren/${slug}`, metadataBase).toString(),
    lastModified: new Date(site.lastModified),
  }));

  return [...staticRoutes, ...blockRoutes, ...sectorRoutes];
}
