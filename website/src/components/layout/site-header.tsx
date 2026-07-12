import Link from "next/link";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { resolveLinkHref, resolveLinkLabel } from "@/sanity/metadata";
import type { SiteSettings } from "@/sanity/types";

type SiteHeaderProps = {
  siteSettings: SiteSettings | null;
};

export function SiteHeader({ siteSettings }: SiteHeaderProps) {
  const siteName = siteSettings?.siteName ?? "Website";

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--container-px)] py-4">
        <Link href="/" className="text-lg font-semibold text-foreground">
          {siteName}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex flex-wrap items-center gap-4">
            {siteSettings?.headerLinks?.map((link) => (
              <Link
                key={link._key}
                href={resolveLinkHref(link)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                target={link.openInNewTab ? "_blank" : undefined}
                rel={link.openInNewTab ? "noopener noreferrer" : undefined}
              >
                {resolveLinkLabel(link)}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
