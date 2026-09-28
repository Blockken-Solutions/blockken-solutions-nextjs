import type { MetadataRoute } from "next";

import { getMetadataBase } from "@/lib/metadata";
import { indexableRoutes } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const metadataBase = getMetadataBase();

  return indexableRoutes.map(({ pathname, lastModified }) => ({
    url: new URL(pathname, metadataBase).toString(),
    lastModified: new Date(lastModified),
  }));
}
