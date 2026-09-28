import type {
  FAQPage,
  Graph,
  HowTo,
  Offer,
  Organization,
  Person,
  ProfessionalService,
  Service,
  SoftwareApplication,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";

import {
  authorCredentials,
  formatAuthorCredentialSummary,
} from "@/content/author-credentials";
import { faqPage, getAllFaqItems, stripFaqAnswerMarkdown } from "@/content/faq";
import { home } from "@/content/home";
import { planGesprekPage } from "@/content/plan-gesprek";
import { pricing } from "@/content/pricing";
import { scanPage } from "@/content/scan";
import { site } from "@/content/site";
import type { FaqItem, HowWeWorkStep, PricingTier } from "@/content/types";

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

export function buildProfessionalServiceSchema(): WithContext<ProfessionalService> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: site.organization.address.addressRegion ?? "Vlaanderen",
      },
      {
        "@type": "Country",
        name: "België",
      },
    ],
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
    hasCredential: authorCredentials.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      name: formatAuthorCredentialSummary(credential),
      credentialCategory: credential.type,
    })),
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

function parseSetupPrice(priceLabel: string): string | null {
  if (/aanvraag/i.test(priceLabel)) return null;
  const match = priceLabel.match(/€\s*([\d.]+)/);
  return match?.[1]?.replace(".", "") ?? null;
}

function buildPricingOfferSchema(tier: PricingTier): WithContext<Offer> | null {
  const price = parseSetupPrice(tier.setup.price);
  if (!price) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `${tier.name} — eenmalige setup`,
    description: `${tier.audience} (eenmalige setup; maandelijks abonnement apart).`,
    price,
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
  return pricing.tiers
    .map((tier) => buildPricingOfferSchema(tier))
    .filter((offer): offer is WithContext<Offer> => offer !== null);
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
      buildProfessionalServiceSchema(),
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
      buildHowWeWorkSchema(home.howWeWork.steps),
      ...buildPricingOffersSchema(),
    ],
  };
}

export function buildPlanGesprekGraph(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageSchema(
        "/plan-gesprek",
        planGesprekPage.seo.title,
        planGesprekPage.seo.description,
      ),
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
