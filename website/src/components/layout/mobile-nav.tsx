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
  SheetFooter,
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
          variant="ghost"
          size="icon-lg"
          className="shrink-0 md:hidden"
          aria-label="Menu openen"
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="gap-0">
        <SheetHeader className="space-y-0 pr-12 text-left">
          <SheetTitle className="text-left">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              variant="mobile"
              onNavigate={close}
            />
          ))}
        </nav>
        <SheetFooter className="pt-4">
          <Button asChild variant="primary" shape="pill" className="w-full">
            <SectionLink href={contactPlanSection()} onNavigate={close}>
              Gratis kennismaking
            </SectionLink>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
