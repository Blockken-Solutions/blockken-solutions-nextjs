import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge font-label inline-flex h-auto w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2.5 py-1.5 text-xs whitespace-nowrap transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "rounded-full bg-primary-soft text-brand-highlight-text",
        secondary: "rounded-full bg-muted text-muted-foreground",
        destructive: "rounded-full bg-destructive/10 text-destructive",
        outline: "rounded-full border-border bg-card text-foreground",
        ghost: "rounded-full hover:bg-primary/10",
        link: "rounded-full text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
