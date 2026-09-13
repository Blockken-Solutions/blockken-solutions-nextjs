"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/layout/logo";
import { NavLink } from "@/components/layout/nav-link";
import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/content/navigation";
import type { NavLink as NavLinkType } from "@/content/types";
import { contactPlanSection } from "@/lib/paths";

const sectionLinks = navLinks.filter((link) => link.type === "section");
const pageLinks = navLinks.filter((link) => link.type !== "section");

function MobileNavGroup({
  links,
  onNavigate,
}: {
  links: NavLinkType[];
  onNavigate: () => void;
}) {
  return (
    <div className="flex flex-col divide-y divide-border/60">
      {links.map((link) => (
        <NavLink
          key={link.href}
          link={link}
          variant="mobile"
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

export function MobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-11 lg:hidden"
          aria-label="Menu openen"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4">
          <MobileNavGroup
            links={sectionLinks}
            onNavigate={() => setMobileOpen(false)}
          />
          <div className="border-t border-border/60" aria-hidden="true" />
          <MobileNavGroup
            links={pageLinks}
            onNavigate={() => setMobileOpen(false)}
          />
          <Button
            asChild
            variant="primary"
            shape="pill"
            className="mt-2 w-full"
          >
            <SectionLink
              href={contactPlanSection()}
              onNavigate={() => setMobileOpen(false)}
            >
              Gratis kennismaking
            </SectionLink>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
