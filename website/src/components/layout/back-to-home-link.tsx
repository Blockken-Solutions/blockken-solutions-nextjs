import { ArrowLeft } from "lucide-react";

import { HomeLink } from "@/components/layout/home-link";
import { cn } from "@/lib/utils";

type BackToHomeLinkProps = {
  className?: string;
};

export function BackToHomeLink({ className }: BackToHomeLinkProps) {
  return (
    <HomeLink
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      <ArrowLeft className="size-4" aria-hidden />
      Terug naar home
    </HomeLink>
  );
}
