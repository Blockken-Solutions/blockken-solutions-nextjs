import { HomeLink } from "@/components/layout/home-link";
import { LogoMark } from "@/components/layout/logo-mark";
import { cn } from "@/lib/utils";

type LogoSize = "default" | "header";

const logoSizeClassNames: Record<
  LogoSize,
  { root: string; mark: string; wordmark: string }
> = {
  default: {
    root: "gap-2.5 text-base font-bold tracking-tight sm:gap-3 sm:text-lg",
    mark: "size-8 sm:size-9",
    wordmark: "",
  },
  header: {
    root: "gap-3 text-[1.0625rem] font-bold tracking-tight sm:gap-3.5 sm:text-xl lg:gap-4 lg:text-[1.4rem]",
    mark: "size-10 sm:size-11 lg:size-12",
    wordmark: "leading-none",
  },
};

type LogoProps = {
  className?: string;
  size?: LogoSize;
};

export function Logo({ className, size = "default" }: LogoProps) {
  const styles = logoSizeClassNames[size];

  return (
    <HomeLink
      aria-label="blockken.solutions — naar home"
      className={cn(
        "inline-flex min-w-0 items-center text-foreground",
        styles.root,
        className,
      )}
    >
      <span className={cn("shrink-0", styles.mark)}>
        <LogoMark className="size-full" />
      </span>
      <span className={cn("min-w-0 max-sm:truncate", styles.wordmark)}>
        blockken<span className="text-brand-highlight">.</span>solutions
      </span>
    </HomeLink>
  );
}
