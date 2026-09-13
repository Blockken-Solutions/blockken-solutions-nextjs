import type {
  BreadcrumbList,
  FAQPage,
  Graph,
  HowTo,
  ItemList,
  LocalBusiness,
  Offer,
  Organization,
  Person,
  Service,
  SoftwareApplication,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

import { blocksPage } from "@/content/blocks";
import { sectors } from "@/content/sectors";
import { faqPage, getAllFaqItems, stripFaqAnswerMarkdown } from "@/content/faq";
import { home } from "@/content/home";
import { pricing } from "@/content/pricing";
import { scanPage } from "@/content/scan";
import { site } from "@/content/site";
import type { BlockListing, FaqItem, HowWeWorkStep, PricingTier, SectorListing } from "@/content/types";

function absoluteUrl(pathname: string): string {
  return new URL(pathname, site.url).toString();
}

export function buildOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.organization.name,
    url: site.organization.url,
    logo: site.organization.logo,
    email: site.organization.email,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.organization.address.addressCountry,
      addressLocality: site.organization.address.addressLocality,
      addressRegion: site.organization.address.addressRegion,
    },
    sameAs: [...site.organization.sameAs],
  };
}

export function buildLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.organization.name,
    url: site.organization.url,
    logo: site.organization.logo,
    image: site.organization.logo,
    email: site.organization.email,
    telephone: site.contact.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressCountry: site.organization.address.addressCountry,
      addressLocality: site.organization.address.addressLocality,
      addressRegion: site.organization.address.addressRegion,
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
    sameAs: [...site.organization.sameAs],
  };
}

export function buildWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: site.language,
    publisher: {
      "@type": "Organization",
      name: site.organization.name,
    },
  };
}

export function buildPersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.author.name,
    jobTitle: site.author.role,
    url: site.author.url,
    worksFor: {
      "@type": "Organization",
      name: site.organization.name,
    },
    sameAs: [...site.author.sameAs],
    knowsAbout: [...home.about.skills],
  };
}

export function buildServiceSchemas(): WithContext<Service>[] {
  return home.services.items.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: site.organization.name,
      url: site.organization.url,
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
  }));
}

export function buildWebPageSchema(
  pathname: string,
  name: string,
  description: string,
): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(pathname),
    inLanguage: site.language,
    dateModified: site.lastModified,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  };
}

export function buildFaqPageSchema(items: FaqItem[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripFaqAnswerMarkdown(item.answer),
      },
    })),
  };
}

function parseSetupPrice(priceLabel: string): string {
  const match = priceLabel.match(/€\s*([\d.]+)/);
  return match?.[1]?.replace(".", "") ?? "999";
}

function buildPricingOfferSchema(tier: PricingTier): WithContext<Offer> {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: tier.name,
    description: tier.audience,
    price: parseSetupPrice(tier.setup.price),
    priceCurrency: "EUR",
    url: absoluteUrl("/#prijzen"),
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: site.organization.name,
      url: site.organization.url,
    },
  };
}

export function buildPricingOffersSchema(): WithContext<Offer>[] {
  return pricing.tiers.map((tier) => buildPricingOfferSchema(tier));
}

export function buildBreadcrumbSchema(
  items: { name: string; pathname: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.pathname),
    })),
  };
}

export function buildBlockServiceSchema(block: BlockListing): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: block.title,
    description: block.summary,
    serviceType: block.category,
    provider: {
      "@type": "Organization",
      name: site.organization.name,
      url: site.organization.url,
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
    url: absoluteUrl(`/blocks/${block.slug}`),
  };
}

export function buildBlocksItemListSchema(): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: blocksPage.heading,
    itemListElement: blocksPage.blocks.map((block, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: block.title,
      url: absoluteUrl(`/blocks/${block.slug}`),
    })),
  };
}

export function buildBlocksGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        "/blocks",
        blocksPage.seo.title,
        blocksPage.seo.description,
      ),
      buildBlocksItemListSchema(),
      ...blocksPage.blocks.map((block) => buildBlockServiceSchema(block)),
    ],
  };
}

export function buildBlockGraph(block: BlockListing): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        `/blocks/${block.slug}`,
        `${block.title} — ${site.name}`,
        block.summary,
      ),
      buildBreadcrumbSchema([
        { name: "Home", pathname: "/" },
        { name: "Blocks", pathname: "/blocks" },
        { name: block.title, pathname: `/blocks/${block.slug}` },
      ]),
      buildBlockServiceSchema(block),
    ],
  };
}

export function buildSectorGraph(sector: SectorListing): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        `/sectoren/${sector.slug}`,
        sector.seo.title,
        sector.seo.description,
      ),
      buildBreadcrumbSchema([
        { name: "Home", pathname: "/" },
        { name: "Sectoren", pathname: "/sectoren" },
        { name: sector.title, pathname: `/sectoren/${sector.slug}` },
      ]),
    ],
  };
}

export function buildSectorsItemListSchema(): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sectoren",
    itemListElement: sectors.map((sector, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: sector.title,
      url: absoluteUrl(`/sectoren/${sector.slug}`),
    })),
  };
}

export function buildSectorsGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        "/sectoren",
        "Blocks per sector — blockken.solutions",
        "Blocks voor voedingsretail, garages, kappers, horeca en dienstverleners.",
      ),
      buildSectorsItemListSchema(),
    ],
  };
}

function buildHowWeWorkSchema(steps: HowWeWorkStep[]): WithContext<HowTo> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: home.howWeWork.heading,
    description: home.howWeWork.subheading,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.description,
    })),
  };
}

export function buildScanWebApplicationSchema(): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: scanPage.heading,
    description: scanPage.seo.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    url: absoluteUrl("/gratis-scan"),
    provider: {
      "@type": "Organization",
      name: site.organization.name,
      url: site.organization.url,
    },
  };
}

export function buildScanHowToSchema(): WithContext<HowTo> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Gratis website scan uitvoeren",
    description: scanPage.subheading,
    step: scanPage.howItWorks.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.description,
    })),
  };
}

export function buildSiteGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildLocalBusinessSchema(),
      buildWebSiteSchema(),
      buildPersonSchema(),
      ...buildServiceSchemas(),
    ],
  };
}

export function buildHomeGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema("/", site.seo.title, site.seo.description),
      buildFaqPageSchema(home.faqTeaser.items),
      buildHowWeWorkSchema(home.howWeWork.steps),
      ...buildPricingOffersSchema(),
    ],
  };
}

export function buildFaqGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema("/faq", faqPage.seo.title, faqPage.seo.description),
      buildFaqPageSchema(getAllFaqItems()),
    ],
  };
}


export function buildScanGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        "/gratis-scan",
        scanPage.seo.title,
        scanPage.seo.description,
      ),
      buildScanWebApplicationSchema(),
      buildScanHowToSchema(),
    ],
  };
}

export function buildHowWeWorkSummary(): string {
  return home.howWeWork.steps
    .map((step) => `${step.step}. ${step.title}: ${step.description}`)
    .join("\n");
}
