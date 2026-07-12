import type { MetadataRoute } from "next";

import { getMetadataBase } from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  const metadataBase = getMetadataBase();
  const sitemapUrl = new URL("/sitemap.xml", metadataBase).toString();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: sitemapUrl,
  };
}
