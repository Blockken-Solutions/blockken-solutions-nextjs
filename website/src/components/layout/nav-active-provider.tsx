"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

import {
  getHashSectionId,
  resolveActiveSection,
  SECTION_NAV_EVENT,
} from "@/lib/scroll-to-section";

type NavActiveContextValue = {
  activeSection: string | null;
};

const NavActiveContext = createContext<NavActiveContextValue>({
  activeSection: null,
});

type NavActiveProviderProps = {
  children: ReactNode;
  sectionIds: string[];
};

const SECTION_NAV_LOCK_MS = 900;

export function NavActiveProvider({
  children,
  sectionIds,
}: NavActiveProviderProps) {
  const pathname = usePathname();
  const [homeActiveSection, setHomeActiveSection] = useState<string | null>(
    null,
  );
  const activeSection = pathname === "/" ? homeActiveSection : null;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let scrollLockUntil = 0;
    let scrollTicking = false;

    const syncActiveSection = (preferHash = false) => {
      if (Date.now() < scrollLockUntil) {
        return;
      }

      if (preferHash) {
        const hash = getHashSectionId();
        if (hash && sectionIds.includes(hash)) {
          setHomeActiveSection(hash);
          return;
        }
      }

      setHomeActiveSection(resolveActiveSection(sectionIds));
    };

    const handleScroll = () => {
      if (scrollTicking) {
        return;
      }

      scrollTicking = true;
      requestAnimationFrame(() => {
        syncActiveSection();
        scrollTicking = false;
      });
    };

    const handleHashChange = () => {
      scrollLockUntil = 0;
      syncActiveSection(true);
    };

    const handleSectionNav = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail.id;
      if (!sectionIds.includes(id)) {
        return;
      }

      scrollLockUntil = Date.now() + SECTION_NAV_LOCK_MS;
      setHomeActiveSection(id);
    };

    requestAnimationFrame(() => {
      syncActiveSection(true);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener(SECTION_NAV_EVENT, handleSectionNav);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener(SECTION_NAV_EVENT, handleSectionNav);
    };
  }, [pathname, sectionIds]);

  return (
    <NavActiveContext.Provider value={{ activeSection }}>
      {children}
    </NavActiveContext.Provider>
  );
}

export function useNavActive() {
  return useContext(NavActiveContext);
}
