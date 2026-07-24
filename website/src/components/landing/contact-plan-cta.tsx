import Link from "next/link";
import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import type { ContactCalendlyContent } from "@/content/types";
import { CONTACT_PLAN_SECTION_ID, contactPlanSection } from "@/lib/paths";
import { cn } from "@/lib/utils";

type ContactPlanCtaProps = {
  content: ContactCalendlyContent;
  variant?: "card" | "banner";
};

export function ContactPlanCta({ content, variant = "banner" }: ContactPlanCtaProps) {
  return (
    <div
      id={CONTACT_PLAN_SECTION_ID}
      className={cn(
        "rounded-3xl border border-dashed border-brand-highlight/30 bg-brand-highlight/[0.03] shadow-sm",
        variant === "banner" ? "p-6 sm:p-8" : "p-6",
      )}
    >
      <div
        className={cn(
          variant === "banner" &&
            "flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
          variant === "card" && "flex flex-col",
        )}
      >
        <div className={cn("flex gap-4", variant === "banner" && "sm:flex-1 sm:items-center")}>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-highlight/15">
            <Calendar className="size-5 text-brand-accent" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground">{content.heading}</h3>
            <p className="mt-1 text-base leading-relaxed text-muted-foreground">
              {content.description}
            </p>
          </div>
        </div>

        <Button
          asChild
          variant="primary"
          shape="pill"
          size="cta"
          className={cn(variant === "banner" ? "w-full shrink-0 sm:w-auto" : "mt-6 w-full")}
        >
          <Link href={contactPlanSection()}>
            <ButtonLabel>{content.ctaLabel}</ButtonLabel>
          </Link>
        </Button>
      </div>
    </div>
  );
}
