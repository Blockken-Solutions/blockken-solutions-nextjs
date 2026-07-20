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

import { agentsPage } from "@/content/agents";
import { faqPage, getAllFaqItems, stripFaqAnswerMarkdown } from "@/content/faq";
import { home } from "@/content/home";
import { pricing } from "@/content/pricing";
import { scanPage } from "@/content/scan";
import { site } from "@/content/site";
import type { AgentListing, FaqItem, HowWeWorkStep, PricingTier } from "@/content/types";

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

function parsePrice(priceLabel: string): { price: string; currency: string } {
  const match = priceLabel.match(/€(\d+)/);
  return {
    price: match?.[1] ?? "49",
    currency: "EUR",
  };
}

export function buildAgentServiceSchema(agent: AgentListing): WithContext<Service> {
  const { price, currency } = parsePrice(agent.price);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: agent.title,
    description: agent.longDescription,
    serviceType: agent.category,
    provider: {
      "@type": "Organization",
      name: site.organization.name,
      url: site.organization.url,
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/agents/${agent.slug}`),
    },
    url: absoluteUrl(`/agents/${agent.slug}`),
  };
}

export function buildAgentsItemListSchema(): WithContext<ItemList> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: agentsPage.heading,
    itemListElement: agentsPage.agents.map((agent, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: agent.title,
      url: absoluteUrl(`/agents/${agent.slug}`),
    })),
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

export function buildAgentsGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        "/agents",
        agentsPage.seo.title,
        agentsPage.seo.description,
      ),
      buildAgentsItemListSchema(),
      ...agentsPage.agents.map((agent) => buildAgentServiceSchema(agent)),
    ],
  };
}

export function buildAgentGraph(agent: AgentListing): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        `/agents/${agent.slug}`,
        `${agent.title} — ${site.name}`,
        agent.longDescription,
      ),
      buildBreadcrumbSchema([
        { name: "Home", pathname: "/" },
        { name: "AI Agents", pathname: "/agents" },
        { name: agent.title, pathname: `/agents/${agent.slug}` },
      ]),
      buildAgentServiceSchema(agent),
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
