import { HomeLink } from "@/components/layout/home-link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <HomeLink
      className={cn(
        "text-base font-bold tracking-tight text-foreground sm:text-lg",
        className,
      )}
    >
      blockken<span className="text-brand-highlight">.</span>solutions
    </HomeLink>
  );
}
