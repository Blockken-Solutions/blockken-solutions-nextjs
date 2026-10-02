"use client";

import type { ReactNode } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/navigation";
import { contactPlanSection } from "@/lib/paths";

type HeaderActionsProps = {
  mobileNav: ReactNode;
};

export function DesktopNav() {
  return (
    <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex lg:gap-2">
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} variant="desktop" />
      ))}
    </nav>
  );
}

export function HeaderActions({ mobileNav }: HeaderActionsProps) {
  return (
    <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-3">
      <Button
        asChild
        variant="primary"
        shape="pill"
        size="sm"
        className="hidden md:inline-flex"
      >
        <SectionLink href={contactPlanSection()}>Gratis kennismaking</SectionLink>
      </Button>
      {mobileNav}
    </div>
  );
}
