import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-base font-bold tracking-tight text-foreground sm:text-lg",
        className,
      )}
    >
      blockken<span className="text-brand-orange">.</span>solutions
    </Link>
  );
}
