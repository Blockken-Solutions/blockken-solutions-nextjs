import type { ContactInfo, SiteConfig } from "@/content/types";

export const site = {
  name: "blockken.solutions",
  url: "https://blockken.solutions",
  footerTagline: "Gebouwd in België.",
  language: "nl-BE",
  lastModified: "2026-07-12",
  seo: {
    title: "blockken.solutions — Web, AI & Automatisering voor KMO's",
    description:
      "Razendsnelle webapplicaties en slimme AI-agents voor Belgische KMO's. Plan een gratis strategiegesprek en ontdek wat automatisering u oplevert.",
  },
  organization: {
    name: "blockken.solutions",
    url: "https://blockken.solutions",
    logo: "https://blockken.solutions/icon",
    email: "wouter@blockken.solutions",
    address: {
      addressCountry: "BE",
      addressLocality: "België",
    },
    sameAs: [
      "https://www.linkedin.com/in/wouter-blockken",
    ],
  },
  author: {
    name: "Wouter Blockken",
    role: "Fullstack Developer & AI Technology Architect",
    url: "https://blockken.solutions/#over-mij",
    sameAs: [
      "https://www.linkedin.com/in/wouter-blockken",
    ],
    credentials: [
      "AI Technology Architect",
      "Certified Fullstack Developer",
    ],
  },
  contact: {
    email: "wouter@blockken.solutions",
    phone: "+32 471 12 87 27",
  } satisfies ContactInfo,
} satisfies SiteConfig;

export const indexableRoutes = [
  { pathname: "/", lastModified: site.lastModified },
  { pathname: "/gratis-scan", lastModified: site.lastModified },
  { pathname: "/faq", lastModified: site.lastModified },
  { pathname: "/agents", lastModified: site.lastModified },
  { pathname: "/privacy", lastModified: site.lastModified },
  { pathname: "/terms", lastModified: site.lastModified },
] as const;
