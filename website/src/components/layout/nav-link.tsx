"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { useNavActive } from "@/components/layout/nav-active-provider";
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

  const isActive = useMemo(() => {
    if (link.isPageLink) {
      return pathname === link.href;
    }

    if (link.sectionId) {
      if (pathname !== "/") {
        return false;
      }

      return activeSection === link.sectionId;
    }

    return pathname === link.href;
  }, [link, pathname, activeSection]);

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative font-medium transition-colors",
        variant === "desktop"
          ? "text-[0.9375rem] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand-orange after:transition-opacity"
          : "text-base after:hidden",
        isActive
          ? variant === "desktop"
            ? "font-semibold text-foreground after:opacity-100"
            : "font-semibold text-brand-orange"
          : variant === "desktop"
            ? "text-muted-foreground after:opacity-0 hover:text-foreground hover:after:opacity-40"
            : "text-foreground hover:text-brand-orange",
      )}
    >
      {link.label}
    </Link>
  );
}
