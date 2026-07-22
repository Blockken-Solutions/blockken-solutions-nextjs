import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  variant?: "default" | "muted" | "card" | "elevated";
  containerClassName?: string;
  overlap?: boolean;
  overhang?: boolean;
  fade?: boolean;
};

export function Section({
  className,
  containerClassName,
  variant = "default",
  overlap = false,
  overhang = false,
  fade = false,
  children,
  ...props
}: SectionProps) {
  const hasTopLayer = overlap || variant === "elevated";
  const hasBottomLayer = overhang;
  const isLayered = hasTopLayer || hasBottomLayer;

  return (
    <section
      className={cn(
        "px-[var(--container-px)] py-[var(--section-py)]",
        variant === "default" && "bg-background",
        variant === "muted" && "bg-muted section-recessed",
        variant === "card" && "border-b border-border bg-card",
        isLayered && "relative z-10 bg-background",
        hasTopLayer && "section-shadow-top",
        hasBottomLayer && "section-shadow-bottom",
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

type PageHeadingProps = ComponentPropsWithoutRef<"h1">;

export function PageHeading({ className, ...props }: PageHeadingProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}
