import {
  authorCredentials,
  formatAuthorCredentialSummary,
} from "@/content/author-credentials";
import type { ContactInfo, SiteConfig } from "@/content/types";

export const site = {
  name: "blockken.solutions",
  url: "https://blockken.solutions",
  footerTagline: "Gebouwd in België.",
  language: "nl-BE",
  lastModified: "2026-09-28",
  seo: {
    title: "blockken.solutions — Websites voor Belgische KMO's",
    description:
      "Razendsnelle websites — volledig beheerd, met CMS of maatwerk. Plan een gratis kennismakingsgesprek.",
  },
  legal: {
    tradeName: "blockken.solutions",
    responsiblePerson: "Wouter Blockken",
    jurisdiction: "Oost-Vlaanderen",
    vatNumber: "BE1005.189.818",
  },
  organization: {
    name: "blockken.solutions",
    url: "https://blockken.solutions",
    logo: "https://blockken.solutions/logo.svg",
    email: "wouter@blockken.solutions",
    address: {
      addressCountry: "BE",
      addressLocality: "België",
      addressRegion: "Vlaanderen",
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
      "https://wouterblockken.me/",
    ],
    credentials: authorCredentials.map(formatAuthorCredentialSummary),
  },
  contact: {
    email: "wouter@blockken.solutions",
    phone: "+32 471 12 87 27",
  } satisfies ContactInfo,
} satisfies SiteConfig;

export const indexableRoutes = [
  { pathname: "/", lastModified: site.lastModified },
  { pathname: "/gratis-scan", lastModified: site.lastModified },
  { pathname: "/plan-gesprek", lastModified: site.lastModified },
  { pathname: "/faq", lastModified: site.lastModified },
  { pathname: "/privacy", lastModified: site.lastModified },
  { pathname: "/terms", lastModified: site.lastModified },
] as const;
