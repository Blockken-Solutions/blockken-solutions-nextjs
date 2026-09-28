import { LogoMarkGraphic } from "@/components/layout/logo-mark-graphic";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <LogoMarkGraphic
      aria-hidden
      className={cn("size-full text-foreground", className)}
    />
  );
}
