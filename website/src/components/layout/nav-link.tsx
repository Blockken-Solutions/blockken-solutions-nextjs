"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNavActive } from "@/components/layout/nav-active-provider";
import { SectionLink } from "@/components/layout/section-link";
import type { NavLink as NavLinkType } from "@/content/types";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  link: NavLinkType;
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function NavLink({ link, variant = "desktop", onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const { activeSection } = useNavActive();

  const isActive =
    link.type === "section" && link.sectionId
      ? pathname === "/" && activeSection === link.sectionId
      : pathname === link.href;

  const className = cn(
    "relative shrink-0 whitespace-nowrap transition-colors",
    variant === "desktop"
      ? "rounded-full px-3 py-1.5 text-sm font-semibold xl:text-[0.9375rem]"
      : "-mx-1 flex min-h-11 items-center rounded-xl px-3 py-2.5 text-base font-semibold",
    isActive
      ? "bg-primary/10 text-primary"
      : "text-muted-foreground hover:bg-muted hover:text-foreground",
  );

  if (link.type === "section" && link.sectionId) {
    return (
      <SectionLink
        href={link.href}
        onNavigate={onNavigate}
        aria-current={isActive ? "page" : undefined}
        className={className}
      >
        {link.label}
      </SectionLink>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={className}
    >
      {link.label}
    </Link>
  );
}
