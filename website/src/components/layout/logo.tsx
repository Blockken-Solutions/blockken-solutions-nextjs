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

function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("min-w-0 truncate leading-none", className)}>
      blockken<span className="text-brand-highlight">.</span>solutions
    </span>
  );
}

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
      <LogoWordmark className={styles.wordmark} />
    </HomeLink>
  );
}

type HeaderPillLogoProps = {
  className?: string;
};

export function HeaderPillLogo({ className }: HeaderPillLogoProps) {
  return (
    <HomeLink
      aria-label="blockken.solutions — naar home"
      className={cn("shrink-0", className)}
    >
      <span className="grid size-11 place-items-center rounded-full bg-background p-1 sm:size-12 sm:p-1.5 lg:size-14 lg:p-2">
        <LogoMark className="size-full max-h-7 max-w-7 sm:max-h-8 sm:max-w-8 lg:max-h-9 lg:max-w-9" />
      </span>
    </HomeLink>
  );
}

export function HeaderPillWordmark({ className }: { className?: string }) {
  return (
    <HomeLink
      aria-label="blockken.solutions — naar home"
      className={cn(
        "inline-flex min-w-0 text-base font-bold tracking-tight text-foreground sm:text-[1.0625rem] lg:text-xl",
        className,
      )}
    >
      <LogoWordmark />
    </HomeLink>
  );
}
