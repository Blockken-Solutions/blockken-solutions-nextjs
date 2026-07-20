import type { MetadataRoute } from "next";

import { getAllAgentSlugs } from "@/content/agents";
import { getMetadataBase } from "@/lib/metadata";
import { indexableRoutes, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const metadataBase = getMetadataBase();

  const staticRoutes = indexableRoutes.map(({ pathname, lastModified }) => ({
    url: new URL(pathname, metadataBase).toString(),
    lastModified: new Date(lastModified),
  }));

  const agentRoutes = getAllAgentSlugs().map((slug) => ({
    url: new URL(`/agents/${slug}`, metadataBase).toString(),
    lastModified: new Date(site.lastModified),
  }));

  return [...staticRoutes, ...agentRoutes];
}
