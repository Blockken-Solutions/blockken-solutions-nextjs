import type { NavLink } from "@/content/types";
import { homeSection } from "@/lib/paths";

export const navLinks: NavLink[] = [
  {
    label: "Oplossingen",
    href: homeSection("oplossingen"),
    type: "section",
    sectionId: "oplossingen",
  },
  {
    label: "Prijzen",
    href: homeSection("prijzen"),
    type: "section",
    sectionId: "prijzen",
  },
  {
    label: "Over mij",
    href: homeSection("over-mij"),
    type: "section",
    sectionId: "over-mij",
  },
  { label: "FAQ", href: "/faq", type: "page" },
  { label: "Gratis scan", href: "/gratis-scan", type: "page" },
];

export const navSectionIds = navLinks
  .filter((link) => link.type === "section" && link.sectionId)
  .map((link) => link.sectionId as string);

export const footerLinks: NavLink[] = [
  { label: "Prijzen", href: homeSection("prijzen"), type: "section", sectionId: "prijzen" },
  { label: "Over mij", href: homeSection("over-mij"), type: "section", sectionId: "over-mij" },
  { label: "FAQ", href: "/faq", type: "page" },
  { label: "Gratis scan", href: "/gratis-scan", type: "page" },
  {
    label: "Contact",
    href: homeSection("contact"),
    type: "section",
    sectionId: "contact",
  },
  { label: "Privacy", href: "/privacy", type: "page" },
  { label: "Voorwaarden", href: "/terms", type: "page" },
  { label: "llms.txt", href: "/llms.txt", type: "page" },
];
