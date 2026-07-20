import type { Metadata } from "next";

import { site } from "@/content/site";

export type CreateMetadataOptions = {
  pathname?: string;
  title?: string;
  description?: string;
  noIndex?: boolean;
};

export function getMetadataBase(): URL {
  return new URL(site.url);
}

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const {
    pathname = "/",
    title = site.seo.title,
    description = site.seo.description,
    noIndex = false,
  } = options;

  const metadataBase = getMetadataBase();
  const canonicalPath = pathname === "/" ? "/" : pathname;
  const canonicalUrl = new URL(canonicalPath, metadataBase).toString();
  const titleAlreadyIncludesSiteName =
    title.includes(site.name) || title.includes("blockken.solutions");

  return {
    metadataBase,
    title:
      pathname === "/"
        ? { default: title, template: `%s | ${site.name}` }
        : titleAlreadyIncludesSiteName
          ? { absolute: title }
          : title,
    description,
    authors: [{ name: site.author.name, url: site.author.url }],
    creator: site.author.name,
    publisher: site.organization.name,
    category: "technology",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "nl_BE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
