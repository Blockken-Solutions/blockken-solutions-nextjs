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
    vatNumber: string;
  };
  organization: OrganizationConfig;
  author: AuthorConfig;
  contact: ContactInfo;
};

export type ContactInfo = {
  email: string;
  phone?: string;
};

export type HeroClientLogo = {
  src: string;
  alt: string;
  client: string;
};

export type HeroServiceChip = {
  label: string;
  href: string;
};

export type HeroContent = {
  badge: string;
  headlineLines: string[];
  subheadline: string;
  summary?: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: string[];
  serviceChips: HeroServiceChip[];
  trustBarItems: string[];
  clientLogosLabel: string;
  clientLogos: HeroClientLogo[];
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

export type PortfolioHighlight = {
  title: string;
  client: string;
  outcome: string;
  href?: string;
  logo?: string;
  logoAlt?: string;
};

export type AboutContent = {
  sectionLabel: string;
  heading: string;
  body: string;
  portrait: string;
  portraitAlt: string;
  credentials: CredentialItem[];
  skills: string[];
  portfolioHighlights: PortfolioHighlight[];
  portfolioLink?: CtaLink;
  sameAs: { label: string; href: string; icon?: string }[];
};

export type ContactCalendlyContent = {
  heading: string;
  description: string;
  ctaLabel: string;
};

export type ContactBlockContent = {
  heading: string;
  description: string;
};

export type FooterCtaContent = {
  heading: string;
  subheading: string;
  directContact: ContactBlockContent;
  calendly: ContactCalendlyContent;
  form: ContactBlockContent;
  buttonLabel?: string;
  buttonHref?: string;
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

export type PlanGesprekPageContent = {
  seo: SeoConfig;
  sectionLabel: string;
  heading: string;
  subheading: string;
  highlights: string[];
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
  pricingNote: string;
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

export type FooterLinkGroup = {
  label: string;
  links: NavLink[];
};
