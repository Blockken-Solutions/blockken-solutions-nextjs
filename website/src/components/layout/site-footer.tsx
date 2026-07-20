import Link from "next/link";

import { Logo } from "@/components/layout/logo";
import { SectionLink } from "@/components/layout/section-link";
import { site } from "@/content/site";
import { footerLinks } from "@/content/navigation";
import { isHomeSectionHref } from "@/lib/paths";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-[var(--container-px)] py-10">
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Logo />
          <nav aria-label="Footer navigatie">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {isHomeSectionHref(link.href) ? (
                    <SectionLink
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </SectionLink>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          © {year} {site.name} — {site.footerTagline}
        </p>
      </div>
    </footer>
  );
}
