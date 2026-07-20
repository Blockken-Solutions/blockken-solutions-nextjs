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
  { label: "Gratis Scan", href: "/gratis-scan", type: "page" },
  { label: "AI Agents", href: "/agents", type: "page" },
  { label: "FAQ", href: "/faq", type: "page" },
  {
    label: "Over Mij",
    href: homeSection("over-mij"),
    type: "section",
    sectionId: "over-mij",
  },
];

export const navSectionIds = navLinks
  .filter((link) => link.type === "section" && link.sectionId)
  .map((link) => link.sectionId as string);

export const footerLinks: NavLink[] = [
  { label: "FAQ", href: "/faq", type: "page" },
  { label: "AI Agents", href: "/agents", type: "page" },
  { label: "Gratis Scan", href: "/gratis-scan", type: "page" },
  {
    label: "Contact",
    href: homeSection("contact"),
    type: "section",
    sectionId: "contact",
  },
  { label: "Privacy", href: "/privacy", type: "page" },
  { label: "Voorwaarden", href: "/terms", type: "page" },
];
