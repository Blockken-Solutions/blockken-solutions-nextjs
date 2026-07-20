"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent, ReactNode } from "react";

import {
  parseHomeSectionId,
  scrollToSection,
  waitForLayout,
} from "@/lib/scroll-to-section";

type SectionLinkProps = Omit<ComponentProps<typeof Link>, "href" | "onClick"> & {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function SectionLink({
  href,
  children,
  className,
  onNavigate,
  ...props
}: SectionLinkProps) {
  const pathname = usePathname();
  const router = useRouter();
  const sectionId = parseHomeSectionId(href);

  if (!sectionId) {
    return (
      <Link href={href} className={className} onClick={onNavigate} {...props}>
        {children}
      </Link>
    );
  }

  const handleClick = async (event: MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (pathname !== "/") {
      return;
    }

    event.preventDefault();

    const url = new URL(href, window.location.origin);
    const targetUrl = `${url.pathname}${url.search}#${sectionId}`;

    if (url.search.length > 0) {
      router.push(targetUrl, { scroll: false });
      await waitForLayout();
      scrollToSection(sectionId, { updateHash: false });
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
