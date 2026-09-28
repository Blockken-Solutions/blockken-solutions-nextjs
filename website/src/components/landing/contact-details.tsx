"use client";

import { Check, Copy, ExternalLink, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { site } from "@/content/site";
import type { ContactInfo } from "@/content/types";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function buildMailtoHref(email: string): string {
  const subject = encodeURIComponent("Contact via blockken.solutions");
  return `mailto:${email}?subject=${subject}`;
}

type ContactDetailsProps = {
  heading?: string;
  description?: string;
};

export function ContactDetails({
  heading = "Direct contact",
  description = "Liever niet wachten? Neem rechtstreeks contact op via onderstaande kanalen.",
}: ContactDetailsProps) {
  const contact: ContactInfo = site.contact;
  const linkedin = site.organization.sameAs[0];
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = buildMailtoHref(contact.email);
    }
  }

  const links = [
    contact.phone
      ? {
          icon: Phone,
          label: "Telefoon",
          value: contact.phone,
          href: formatPhoneHref(contact.phone),
          external: false,
          breakAll: false,
        }
      : null,
    linkedin
      ? {
          icon: getIcon("linkedin"),
          label: "LinkedIn",
          value: "linkedin.com/in/wouter-blockken",
          href: linkedin,
          external: true,
          breakAll: true,
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <div className="flex h-full flex-col text-left">
      <div>
        <p className="text-base font-bold tracking-tight text-foreground">
          {heading}
        </p>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-muted/40">
        <li>
          <div className="flex items-center gap-2 px-5 py-4">
            <a
              href={buildMailtoHref(contact.email)}
              className="group flex min-w-0 flex-1 items-center gap-4 rounded-[4px] transition-colors hover:bg-primary/10"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                <Mail className="size-4 text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-label text-xs text-muted-foreground">
                  E-mail
                </p>
                <p className="mt-1 break-all text-base font-bold text-foreground transition-colors group-hover:text-primary">
                  {contact.email}
                </p>
              </div>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "E-mail gekopieerd" : "E-mail kopiëren"}
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </li>

        {links.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-primary/10"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <Icon className="size-4 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-label text-xs text-muted-foreground">
                    {item.label}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-base font-bold text-foreground transition-colors group-hover:text-primary",
                      item.breakAll && "break-all",
                    )}
                  >
                    {item.value}
                  </p>
                </div>
                {item.external ? (
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100" />
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
