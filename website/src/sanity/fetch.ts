import { cache } from "react";

import { client, fetchOptions } from "@/sanity/client";
import {
  HOME_PAGE_QUERY,
  PAGE_QUERY,
  PAGE_SLUGS_QUERY,
  PROJECTS_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/queries";
import type {
  HOME_PAGE_QUERY_RESULT,
  PAGE_QUERY_RESULT,
  PROJECTS_QUERY_RESULT,
  SITE_SETTINGS_QUERY_RESULT,
} from "@/sanity/sanity.types";

export const getSiteSettings = cache(async () => {
  return client.fetch<SITE_SETTINGS_QUERY_RESULT>(SITE_SETTINGS_QUERY, {}, {
    ...fetchOptions,
    next: { ...fetchOptions.next, tags: ["siteSettings"] },
  });
});

export const getProjects = cache(async () => {
  return client.fetch<PROJECTS_QUERY_RESULT>(PROJECTS_QUERY, {}, {
    ...fetchOptions,
    next: { ...fetchOptions.next, tags: ["projects"] },
  });
});

export const getHomePage = cache(async () => {
  return client.fetch<HOME_PAGE_QUERY_RESULT>(HOME_PAGE_QUERY, {}, {
    ...fetchOptions,
    next: { ...fetchOptions.next, tags: ["pages"] },
  });
});

export const getPageBySlug = cache(async (slug: string) => {
  return client.fetch<PAGE_QUERY_RESULT>(PAGE_QUERY, { slug }, {
    ...fetchOptions,
    next: { ...fetchOptions.next, tags: ["pages", `page:${slug}`] },
  });
});

export const getPageSlugs = cache(async () => {
  return client.fetch<string[]>(PAGE_SLUGS_QUERY, {}, {
    ...fetchOptions,
    next: { ...fetchOptions.next, tags: ["pages"] },
  });
});
