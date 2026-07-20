import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type SectionDescriptionProps<T extends ElementType = "p"> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export function SectionDescription<T extends ElementType = "p">({
  as,
  className,
  ...props
}: SectionDescriptionProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        "text-base leading-relaxed text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
