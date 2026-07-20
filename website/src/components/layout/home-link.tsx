"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

import {
  markCleanHomeNavigation,
  resetToCleanHome,
} from "@/lib/scroll-to-section";

type HomeLinkProps = Omit<ComponentProps<typeof Link>, "href">;

export function HomeLink({ onClick, ...props }: HomeLinkProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (pathname === "/") {
      event.preventDefault();
      resetToCleanHome();
      return;
    }

    event.preventDefault();
    markCleanHomeNavigation();
    router.push("/", { scroll: false });
  };

  return <Link href="/" scroll={false} onClick={handleClick} {...props} />;
}
