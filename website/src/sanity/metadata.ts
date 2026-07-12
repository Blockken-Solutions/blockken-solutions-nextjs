import type { Metadata } from "next";

import { imageUrl } from "@/sanity/image";
import type { PageDocument, PageMetadata, SiteSettings } from "@/sanity/types";

export function resolveLinkHref(link?: {
  linkType?: "internal" | "external" | null;
  url?: string | null;
  reference?: { slug?: string | null } | null;
} | null): string {
  if (!link) {
    return "#";
  }

  if (link.linkType === "external" && link.url) {
    return link.url;
  }

  const slug = link.reference?.slug;

  if (!slug || slug === "home") {
    return "/";
  }

  return `/${slug}`;
}

export function resolveLinkLabel(link?: {
  linkType?: "internal" | "external" | null;
  url?: string | null;
  reference?: { name?: string | null; slug?: string | null } | null;
} | null): string {
  if (!link) {
    return "Link";
  }

  if (link.linkType === "external" && link.url) {
    return link.url;
  }

  return link.reference?.name ?? link.reference?.slug ?? "Link";
}

function resolveOgImageUrl(
  ogImage?: { asset?: { _ref: string } } | null,
): string | null {
  if (!ogImage?.asset) {
    return null;
  }

  return imageUrl(ogImage, { width: 1200, height: 630 });
}

export function buildPageMetadata(
  page: PageDocument | null,
  siteSettings: SiteSettings | null,
  pathname = "/",
): PageMetadata {
  const defaultSeo = siteSettings?.defaultSeo;
  const title =
    page?.seo?.title ?? page?.name ?? siteSettings?.siteName ?? "Website";

  return {
    title,
    description:
      page?.seo?.description ??
      defaultSeo?.description ??
      "",
    ogImageUrl:
      resolveOgImageUrl(page?.seo?.ogImage) ??
      resolveOgImageUrl(defaultSeo?.ogImage) ??
      null,
    noIndex:
      page?.noIndex === true ||
      (page?.seo as { noIndex?: boolean | null } | null | undefined)?.noIndex === true,
    pathname,
  };
}

export function getMetadataBase(siteSettings: SiteSettings | null): URL | undefined {
  if (!siteSettings?.siteUrl) {
    return undefined;
  }

  try {
    return new URL(siteSettings.siteUrl);
  } catch {
    return undefined;
  }
}

export function toNextMetadata(
  metadata: PageMetadata,
  siteSettings: SiteSettings | null,
): Metadata {
  const metadataBase = getMetadataBase(siteSettings);
  const siteName = siteSettings?.siteName ?? "Website";
  const canonicalPath = metadata.pathname === "/" ? "/" : metadata.pathname;

  return {
    metadataBase,
    title: {
      default: metadata.title,
      template: `%s | ${siteName}`,
    },
    description: metadata.description || undefined,
    robots: metadata.noIndex ? { index: false, follow: false } : undefined,
    alternates: metadataBase
      ? { canonical: new URL(canonicalPath, metadataBase).toString() }
      : undefined,
    openGraph: {
      title: metadata.title,
      description: metadata.description || undefined,
      url: metadataBase
        ? new URL(canonicalPath, metadataBase).toString()
        : undefined,
      siteName,
      type: "website",
      images: metadata.ogImageUrl
        ? [{ url: metadata.ogImageUrl, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: metadata.ogImageUrl ? "summary_large_image" : "summary",
      title: metadata.title,
      description: metadata.description || undefined,
      images: metadata.ogImageUrl ? [metadata.ogImageUrl] : undefined,
    },
  };
}
