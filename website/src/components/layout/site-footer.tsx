import Link from "next/link";

import { resolveLinkHref, resolveLinkLabel } from "@/sanity/metadata";
import type { SiteSettings } from "@/sanity/types";

type SiteFooterProps = {
  siteSettings: SiteSettings | null;
};

export function SiteFooter({ siteSettings }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const siteName = siteSettings?.siteName ?? "Website";

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--container-px)] py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-semibold text-foreground">{siteName}</p>
            {siteSettings?.email ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {siteSettings.email}
              </p>
            ) : null}
          </div>
          {siteSettings?.footerLinks?.length ? (
            <nav className="flex flex-wrap gap-4">
              {siteSettings.footerLinks.map((link) => (
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
          ) : null}
        </div>
        {siteSettings?.socialLinks?.length ? (
          <div className="mt-6 flex flex-wrap gap-4">
            {siteSettings.socialLinks.map((social) => (
              <a
                key={`${social.platform}-${social.url}`}
                href={social.url}
                className="text-sm text-muted-foreground underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.platform}
              </a>
            ))}
          </div>
        ) : null}
        <p className="mt-8 text-sm text-muted-foreground">
          © {year} {siteName}
        </p>
      </div>
    </footer>
  );
}
