import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  variant?: "default" | "muted" | "card" | "elevated";
  containerClassName?: string;
  overlap?: boolean;
  fade?: boolean;
};

export function Section({
  className,
  containerClassName,
  variant = "default",
  overlap = false,
  fade = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-[var(--container-px)] py-[var(--section-py)]",
        variant === "muted" && "bg-muted",
        variant === "card" && "border-b border-border bg-card",
        variant === "elevated" &&
          "rounded-t-3xl bg-card shadow-[0_-8px_30px_-12px_oklch(0_0_0/8%)]",
        overlap && "section-overlap",
        fade && variant === "muted" && "section-fade-muted",
        fade && variant !== "muted" && "section-fade-default",
        className,
      )}
      {...props}
    >
      <div
        className={cn("mx-auto w-full max-w-[var(--container-max)]", containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = ComponentPropsWithoutRef<"h2">;

export function SectionHeading({ className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}
