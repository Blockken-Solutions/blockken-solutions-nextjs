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
import { contactPlanSection } from "@/lib/paths";

export function MobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
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
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              variant="mobile"
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
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
              Gratis gesprek
            </SectionLink>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
