import type { ReactNode } from "react";

import { SectionLabel } from "@/components/landing/section-label";
import { PageHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type CatalogHeroProps = {
  label?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function CatalogHero({
  label,
  title,
  description,
  children,
  className,
}: CatalogHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand-highlight/15 bg-linear-to-br from-brand-highlight/10 via-background to-muted/30 p-8 sm:p-10",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-brand-highlight/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-12 size-48 rounded-full bg-brand-accent/5 blur-3xl"
      />
      <div className="relative">
        {label ? <SectionLabel className="mb-3">{label}</SectionLabel> : null}
        <PageHeading className="max-w-3xl text-4xl font-bold sm:text-5xl">
          {title}
        </PageHeading>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </div>
  );
}
