import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  variant?: "default" | "muted" | "card" | "elevated" | "peach" | "mint" | "sky" | "lavender";
  containerClassName?: string;
  background?: ReactNode;
  overlap?: boolean;
  overhang?: boolean;
  fade?: boolean;
  grid?: boolean;
};

export function Section({
  className,
  containerClassName,
  background,
  variant = "default",
  overlap = false,
  overhang = false,
  fade = false,
  grid = false,
  children,
  ...props
}: SectionProps) {
  void fade;
  void grid;

  return (
    <section
      className={cn(
        "px-[var(--container-px)] py-[var(--section-py)]",
        variant === "default" && "section-surface section-surface--default",
        variant === "muted" && "section-surface section-surface--muted",
        variant === "card" &&
          "section-surface section-surface--card border-b border-border",
        variant === "elevated" &&
          "section-surface section-surface--card border-y border-border",
        variant === "peach" && "section-surface section-surface--peach",
        variant === "mint" && "section-surface section-surface--mint",
        variant === "sky" && "section-surface section-surface--sky",
        variant === "lavender" && "section-surface section-surface--lavender",
        (overlap || overhang) && "relative z-10",
        className,
      )}
      {...props}
    >
      {background}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-[var(--container-max)]",
          containerClassName,
        )}
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
        "font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
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
        "font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
        className,
      )}
      {...props}
    />
  );
}
