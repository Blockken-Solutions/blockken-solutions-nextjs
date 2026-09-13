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

export type BlockItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  sectorTags: string[];
};

export type BlockWalkthroughStep = {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  animated?: boolean;
};

export type BlockWalkthrough = {
  heading?: string;
  intro?: string;
  steps: BlockWalkthroughStep[];
};

export type BlockFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BlockListing = BlockItem & {
  tagline: string;
  summary: string;
  includes: string[];
  outcome: string;
  minTier: string;
  includedInTier?: string;
  relatedSlugs?: string[];
  demoWalkthrough: BlockWalkthrough;
  idealFor?: string[];
  notIdealFor?: string;
  blockFaq?: BlockFaqItem[];
};

export type SectorBlockUseCase = {
  blockSlug: string;
  detail: string;
  outcome?: string;
};

export type BlocksPreviewContent = {
  sectionLabel: string;
  heading: string;
  subheading: string;
  catalogLink: CtaLink;
  filterCategories: string[];
  blocks: BlockItem[];
  customBlock: CustomBlockCta;
};

export type BlocksPageContent = {
  heading: string;
  subheading: string;
  tierRequirementNote: string;
  filterCategories: string[];
  blocks: BlockListing[];
  customBlock: CustomBlockCta;
  seo: SeoConfig;
};

export type SectorPainPoint = {
  pain: string;
  blockSlug: string;
};

export type SectorTypicalPackage = {
  tierName: string;
  setupPrice: string;
  monthlyPrice: string;
  includedBlocksNote: string;
  extraBlockNote: string;
  pilotSetupPrice: string;
  roiScenario: string;
};

export type SectorListing = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  painPoints: SectorPainPoint[];
  recommendedBlockSlugs: string[];
  blockUseCases: SectorBlockUseCase[];
  bundleStory: string;
  pilotNote: string;
  typicalPackage: SectorTypicalPackage;
  seo: SeoConfig;
};

export type SectorsPageContent = {
  heading: string;
  subheading: string;
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

export type PortfolioHighlight = {
  title: string;
  client: string;
  outcome: string;
  href?: string;
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
  extraBlockNote: string;
  extraContentNote: string;
  blocksCatalogLink: CtaLink;
  tiers: PricingTier[];
};

export type CaseStudy = {
  slug: string;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
};

export type CasesContent = {
  heading: string;
  subheading: string;
  items: CaseStudy[];
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
  blocks: BlocksPreviewContent;
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

export type CustomBlockCta = {
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
