import type {
  FAQPage,
  Graph,
  ItemList,
  LocalBusiness,
  Organization,
  Person,
  Product,
  Service,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

import { agentsPage } from "@/content/agents";
import { faqPage, getAllFaqItems } from "@/content/faq";
import { home } from "@/content/home";
import { site } from "@/content/site";
import type { AgentListing, FaqItem } from "@/content/types";

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
    address: {
      "@type": "PostalAddress",
      addressCountry: site.organization.address.addressCountry,
      addressLocality: site.organization.address.addressLocality,
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
    email: site.organization.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.organization.address.addressCountry,
      addressLocality: site.organization.address.addressLocality,
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
        text: item.answer,
      },
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

export function buildProductSchema(agent: AgentListing): WithContext<Product> {
  const { price, currency } = parsePrice(agent.price);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: agent.title,
    description: agent.longDescription,
    category: agent.category,
    brand: {
      "@type": "Brand",
      name: site.organization.name,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/agents#${agent.slug}`),
    },
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
      url: absoluteUrl(`/agents#${agent.slug}`),
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
      buildWebPageSchema("/", site.seo.title, site.seo.description),
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
      ...agentsPage.agents.map((agent) => buildProductSchema(agent)),
    ],
  };
}
