import { defineQuery } from "next-sanity";

const linkProjection = `{
  linkType,
  url,
  openInNewTab,
  reference->{ name, "slug": slug.current }
}`;

const seoProjection = `{
  title,
  description,
  noIndex,
  ogImage
}`;

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  siteName,
  siteUrl,
  email,
  phone,
  address,
  socialLinks,
  defaultSeo ${seoProjection},
  headerLinks[]{
    _key,
    linkType,
    url,
    openInNewTab,
    reference->{ name, "slug": slug.current }
  },
  footerLinks[]{
    _key,
    linkType,
    url,
    openInNewTab,
    reference->{ name, "slug": slug.current }
  }
}`);

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage
}`);

export const PAGE_SLUGS_QUERY = defineQuery(`*[_type == "page" && slug.current != "home" && (!defined(noIndex) || noIndex != true) && (!defined(seo.noIndex) || seo.noIndex != true)].slug.current`);

export const SITEMAP_PAGES_QUERY = defineQuery(`*[_type == "page" && (!defined(noIndex) || noIndex != true) && (!defined(seo.noIndex) || seo.noIndex != true)]{
  "slug": slug.current,
  _updatedAt
}`);

const pageProjection = `{
  _id,
  name,
  "slug": slug.current,
  noIndex,
  seo ${seoProjection},
  content[]{
    _key,
    _type,
    _type == "hero" => {
      heading,
      body,
      image,
      cta {
        level,
        link ${linkProjection}
      }
    },
    _type == "features" => {
      heading,
      items[]{ title, description, icon }
    },
    _type == "faq" => {
      heading,
      items[]{ question, answer }
    },
    _type == "contactSection" => {
      heading,
      body,
      showContactDetails
    },
    _type == "projectsGrid" => {
      heading,
      intro
    },
    _type == "testimonial" => {
      quote,
      author,
      role,
      image
    },
    _type == "imageBlock" => {
      asset,
      altText,
      caption
    },
    _type == "richText" => {
      content
    },
    _type == "cta" => {
      level,
      link ${linkProjection}
    }
  }
}`;

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "page" && slug.current == "home"][0]${pageProjection}`);

export const PAGE_QUERY = defineQuery(`*[_type == "page" && slug.current == $slug][0]${pageProjection}`);
