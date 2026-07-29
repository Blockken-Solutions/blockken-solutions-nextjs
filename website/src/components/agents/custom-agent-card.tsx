import { SectionLink } from "@/components/layout/section-link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Card, CardContent } from "@/components/ui/card";
import type { CustomAgentCta } from "@/content/types";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

type CustomAgentCardProps = {
  content: CustomAgentCta;
  variant?: "preview" | "listing";
};

export function CustomAgentCard({
  content,
  variant = "preview",
}: CustomAgentCardProps) {
  const Icon = getIcon(content.icon);
  const description =
    variant === "listing" && content.longDescription
      ? content.longDescription
      : content.description;

  return (
    <Card
      className={cn(
        "flex h-full flex-col rounded-3xl border-dashed border-brand-highlight/30 bg-brand-highlight/[0.03] py-0 shadow-sm",
      )}
    >
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-12 items-center justify-center rounded-full bg-brand-highlight/15">
            <Icon className="size-5 text-brand-accent" />
          </div>
          <Badge
            variant="secondary"
            className="rounded-full border border-brand-highlight/20 bg-brand-highlight/10 text-brand-accent"
          >
            Maatwerk
          </Badge>
        </div>

        <h3 className="mt-4 text-lg font-bold text-foreground">{content.title}</h3>
        <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-brand-highlight/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-foreground">{content.price}</span>
          <Button asChild variant="primary" shape="pill" className="min-h-11 w-full sm:w-auto sm:min-h-0 sm:h-7 sm:px-4 sm:text-[0.8rem]">
            <SectionLink href={content.cta.href}>
              <ButtonLabel>{content.cta.label}</ButtonLabel>
            </SectionLink>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
