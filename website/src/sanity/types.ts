import type {
  HOME_PAGE_QUERY_RESULT,
  PAGE_QUERY_RESULT,
  PROJECTS_QUERY_RESULT,
  SITE_SETTINGS_QUERY_RESULT,
} from "@/sanity/sanity.types";

export type SiteSettings = SITE_SETTINGS_QUERY_RESULT;
export type Project = PROJECTS_QUERY_RESULT[number];
export type PageDocument = NonNullable<HOME_PAGE_QUERY_RESULT | PAGE_QUERY_RESULT>;

type PageContent = NonNullable<PageDocument["content"]>;
export type PageBlock = PageContent[number];

export type HeroBlock = Extract<PageBlock, { _type: "hero" }>;
export type FeaturesBlock = Extract<PageBlock, { _type: "features" }>;
export type FaqBlock = Extract<PageBlock, { _type: "faq" }>;
export type ContactSectionBlock = Extract<PageBlock, { _type: "contactSection" }>;
export type ProjectsGridBlock = Extract<PageBlock, { _type: "projectsGrid" }>;
export type TestimonialBlock = Extract<PageBlock, { _type: "testimonial" }>;
export type ImageBlock = Extract<PageBlock, { _type: "imageBlock" }>;
export type RichTextBlock = Extract<PageBlock, { _type: "richText" }>;
export type CtaBlock = Extract<PageBlock, { _type: "cta" }>;

export type SanityLink = NonNullable<
  NonNullable<SiteSettings>["headerLinks"]
>[number];

export type PageMetadata = {
  title: string;
  description: string;
  ogImageUrl?: string | null;
  noIndex: boolean;
  pathname: string;
};

export type {
  HOME_PAGE_QUERY_RESULT,
  PAGE_QUERY_RESULT,
  PAGE_SLUGS_QUERY_RESULT,
  PROJECTS_QUERY_RESULT,
  SITE_SETTINGS_QUERY_RESULT,
  SITEMAP_PAGES_QUERY_RESULT,
} from "@/sanity/sanity.types";
