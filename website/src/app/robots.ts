import type { MetadataRoute } from "next";

import { getMetadataBase } from "@/sanity/metadata";
import { getSiteSettings } from "@/sanity/fetch";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteSettings = await getSiteSettings();
  const metadataBase = getMetadataBase(siteSettings);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: metadataBase
      ? new URL("/sitemap.xml", metadataBase).toString()
      : undefined,
  };
}
