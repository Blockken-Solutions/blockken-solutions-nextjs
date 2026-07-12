import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  variant?: "default" | "muted" | "card";
  containerClassName?: string;
};

export function Section({
  className,
  containerClassName,
  variant = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-[var(--container-px)] py-[var(--section-py)]",
        variant === "muted" && "bg-muted",
        variant === "card" && "border-b border-border bg-card",
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
