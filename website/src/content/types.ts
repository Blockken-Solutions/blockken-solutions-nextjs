export type CtaLink = {
  label: string;
  href: string;
};

export type SeoConfig = {
  title: string;
  description: string;
};

export type OrganizationConfig = {
  name: string;
  url: string;
  logo: string;
  email: string;
  address: {
    addressCountry: string;
    addressLocality: string;
    addressRegion?: string;
  };
  sameAs: string[];
};

export type AuthorConfig = {
  name: string;
  role: string;
  url: string;
  sameAs: string[];
  credentials: string[];
};

export type SiteConfig = {
  name: string;
  url: string;
  footerTagline: string;
  language: string;
  lastModified: string;
  seo: SeoConfig;
  legal: {
    tradeName: string;
    responsiblePerson: string;
    jurisdiction: string;
  };
  organization: OrganizationConfig;
  author: AuthorConfig;
  contact: ContactInfo;
};

export type ContactInfo = {
  email: string;
  phone?: string;
};

export type HeroContent = {
  badge: string;
  headlineLines: string[];
  headlineHighlight: string;
  subheadline: string;
  summary?: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustBarItems: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  href?: string;
  linkLabel?: string;
};

export type ServicesContent = {
  sectionLabel: string;
  heading: string;
  items: ServiceItem[];
};

export type AgentItem = {
  slug: string;
  title: string;
  description: string;
  price: string;
  category: string;
  icon: string;
};

export type AgentListing = AgentItem & {
  longDescription: string;
  useCases: string[];
  includedInTier?: string;
  relatedSlugs?: string[];
};

export type AgentsPreviewContent = {
  sectionLabel: string;
  heading: string;
  subheading: string;
  marketplaceLink: CtaLink;
  filterCategories: string[];
  agents: AgentItem[];
  customAgent: CustomAgentCta;
};

export type AgentsPageContent = {
  heading: string;
  subheading: string;
  filterCategories: string[];
  agents: AgentListing[];
  customAgent: CustomAgentCta;
  seo: SeoConfig;
};

export type ScanTeaserContent = {
  sectionLabel: string;
  heading: string;
  description: string;
  inputPlaceholder: string;
  buttonLabel: string;
  helperText: string;
  errorMessage: string;
};

export type ScanPageContent = {
  seo: SeoConfig;
  heading: string;
  subheading: string;
  painPoints: string[];
  intro: {
    heading: string;
    items: { title: string; description: string }[];
  };
  howItWorks: { step: number; title: string; description: string }[];
  form: {
    inputPlaceholder: string;
    buttonLabel: string;
    helperText: string;
    errorMessage: string;
  };
  cta: {
    heading: string;
    subheading: string;
    primary: CtaLink;
    secondary?: CtaLink;
  };
};

export type CredentialItem = {
  type: string;
  label: string;
  issuer?: string;
  year?: string;
  icon: string;
};

export type AboutContent = {
  sectionLabel: string;
  heading: string;
  body: string;
  portrait: string;
  portraitAlt: string;
  credentials: CredentialItem[];
  skills: string[];
  sameAs: { label: string; href: string; icon?: string }[];
};

export type FooterCtaContent = {
  heading: string;
  subheading: string;
  buttonLabel: string;
  buttonHref: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  teaser?: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export type FaqPageContent = {
  heading: string;
  subheading: string;
  categories: FaqCategory[];
  cta: {
    heading: string;
    subheading: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
  seo: SeoConfig;
};

export type FaqTeaserContent = {
  heading: string;
  subheading: string;
  items: FaqItem[];
  cta: CtaLink;
};

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageContent = {
  title: string;
  sections: LegalSection[];
  seo: SeoConfig;
};

export type PricingFeatureGroup = {
  label: string;
  price: string;
  features: string[];
};

export type PricingTier = {
  id: string;
  name: string;
  audience: string;
  setup: PricingFeatureGroup;
  subscription: PricingFeatureGroup;
  isPopular?: boolean;
  cta: CtaLink;
};

export type PricingContent = {
  sectionLabel: string;
  heading: string;
  subheading: string;
  extraAgentNote: string;
  tiers: PricingTier[];
};

export type HowWeWorkStep = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

export type HowWeWorkContent = {
  sectionLabel: string;
  heading: string;
  subheading: string;
  steps: HowWeWorkStep[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type HomeContent = {
  hero: HeroContent;
  services: ServicesContent;
  pricing: PricingContent;
  howWeWork: HowWeWorkContent;
  agents: AgentsPreviewContent;
  scan: ScanTeaserContent;
  about: AboutContent;
  faqTeaser: FaqTeaserContent;
  footerCta: FooterCtaContent;
};

export type NavLink = {
  label: string;
  href: string;
  type?: "section" | "page";
  sectionId?: string;
};

export type CustomAgentCta = {
  title: string;
  description: string;
  longDescription?: string;
  price: string;
  icon: string;
  cta: CtaLink;
};

export type FooterLinkGroup = {
  label: string;
  links: NavLink[];
};
