import type { NavLink } from "@/content/types";
import { homeSection } from "@/lib/paths";

export const navLinks: NavLink[] = [
  { label: "Oplossingen", href: homeSection("oplossingen"), sectionId: "oplossingen" },
  { label: "Gratis Scan", href: homeSection("gratis-scan"), sectionId: "gratis-scan" },
  { label: "AI Agents", href: "/agents", isPageLink: true },
  { label: "FAQ", href: "/faq", isPageLink: true },
  { label: "Over Mij", href: homeSection("over-mij"), sectionId: "over-mij" },
];

export const navSectionIds = navLinks
  .map((link) => link.sectionId)
  .filter((id): id is string => Boolean(id));

export const footerLinks: NavLink[] = [
  { label: "FAQ", href: "/faq" },
  { label: "AI Agents", href: "/agents" },
  { label: "Privacy", href: "/privacy" },
  { label: "Voorwaarden", href: "/terms" },
  { label: "Contact", href: homeSection("contact") },
];
