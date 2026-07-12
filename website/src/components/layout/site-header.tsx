"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { Logo } from "@/components/layout/logo";
import { NavActiveProvider } from "@/components/layout/nav-active-provider";
import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, navSectionIds } from "@/content/navigation";
import { homeSection } from "@/lib/paths";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <NavActiveProvider sectionIds={navSectionIds}>
      <div className="sticky top-4 z-50 px-[var(--container-px)] pt-4">
        <header>
          <div className="mx-auto flex max-w-[56rem] items-center justify-between gap-4 rounded-full px-4 py-2.5 sm:px-6 glass-pill">
            <Logo />

            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.href} link={link} variant="desktop" />
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="orange"
                shape="pill"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Link href={homeSection("contact")}>Gratis gesprek</Link>
              </Button>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="md:hidden"
                    aria-label="Open menu"
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
                      variant="orange"
                      shape="pill"
                      className="mt-2 w-full"
                    >
                      <Link href={homeSection("contact")}>Gratis gesprek</Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      </div>
    </NavActiveProvider>
  );
}
