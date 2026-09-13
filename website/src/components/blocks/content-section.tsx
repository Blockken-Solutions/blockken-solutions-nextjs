import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContentSectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function ContentSection({
  id,
  label,
  title,
  children,
  className,
}: ContentSectionProps) {
  return (
    <section aria-labelledby={id} className={cn(className)}>
      <p className="text-xs font-bold tracking-[0.18em] text-brand-highlight-text uppercase">
        {label}
      </p>
      <h2 id={id} className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
