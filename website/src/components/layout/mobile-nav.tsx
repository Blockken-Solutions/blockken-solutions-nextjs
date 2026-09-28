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

  const close = () => setMobileOpen(false);

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="size-11 md:hidden"
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
        <nav className="mt-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              variant="mobile"
              onNavigate={close}
            />
          ))}
          <Button
            asChild
            variant="primary"
            shape="pill"
            className="mt-4 w-full"
          >
            <SectionLink href={contactPlanSection()} onNavigate={close}>
              Gratis kennismaking
            </SectionLink>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
