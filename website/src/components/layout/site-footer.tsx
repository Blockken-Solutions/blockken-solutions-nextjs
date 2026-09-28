import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { SectionLink } from "@/components/layout/section-link";
import { site } from "@/content/site";
import { footerLinks } from "@/content/navigation";
import { isHomeSectionHref } from "@/lib/paths";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer-bar mt-auto px-[var(--container-px)] py-12 text-foreground">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <Logo />
            <p className="font-label text-muted-foreground">{site.footerTagline}</p>
          </div>
          <nav aria-label="Footer navigatie">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {isHomeSectionHref(link.href) ? (
                    <SectionLink
                      href={link.href}
                      className="text-base font-semibold text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </SectionLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-base font-semibold text-muted-foreground hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-border pt-6 font-label text-muted-foreground">
          © {year} {site.name} — Diest, België · BTW {site.legal.vatNumber}
        </p>
      </div>
    </footer>
  );
}
