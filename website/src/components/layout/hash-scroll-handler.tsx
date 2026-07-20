"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

import {
  consumeCleanHomeNavigation,
  getHashSectionId,
  resetToCleanHome,
  scrollToSection,
  waitForLayout,
} from "@/lib/scroll-to-section";

function HashScrollHandlerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchKey = searchParams.toString();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    const cameFromOtherPage =
      previousPathnameRef.current !== "/" && pathname === "/";
    previousPathnameRef.current = pathname;

    if (pathname !== "/") {
      return;
    }

    const handleHomeNavigation = async () => {
      if (consumeCleanHomeNavigation()) {
        resetToCleanHome();
        return;
      }

      const sectionId = getHashSectionId();
      if (sectionId) {
        await waitForLayout();
        scrollToSection(sectionId, { updateHash: false });
        return;
      }

      if (cameFromOtherPage) {
        resetToCleanHome();
      }
    };

    void handleHomeNavigation();

    const handleHashChange = () => {
      void handleHomeNavigation();
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname, searchKey]);

  return null;
}

export function HashScrollHandler() {
  return (
    <Suspense fallback={null}>
      <HashScrollHandlerInner />
    </Suspense>
  );
}
