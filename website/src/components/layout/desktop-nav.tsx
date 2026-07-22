"use client";

import type { ReactNode } from "react";

import { NavLink } from "@/components/layout/nav-link";
import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/navigation";
import { homeSection } from "@/lib/paths";

type HeaderActionsProps = {
  mobileNav: ReactNode;
};

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navLinks.map((link) => (
        <NavLink key={link.href} link={link} variant="desktop" />
      ))}
    </nav>
  );
}

export function HeaderActions({ mobileNav }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        asChild
        variant="primary"
        shape="pill"
        size="sm"
        className="hidden sm:inline-flex"
      >
        <SectionLink href={homeSection("contact")}>Gratis gesprek</SectionLink>
      </Button>
      {mobileNav}
    </div>
  );
}
