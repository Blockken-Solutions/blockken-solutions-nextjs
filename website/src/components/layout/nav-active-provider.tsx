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
  getHeaderOffset,
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

export function NavActiveProvider({
  children,
  sectionIds,
}: NavActiveProviderProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    let lockedSection: string | null = null;
    let scrollTicking = false;

    const syncActiveSection = (preferHash = false) => {
      if (lockedSection) {
        const element = document.getElementById(lockedSection);
        if (element) {
          const distance = Math.abs(
            element.getBoundingClientRect().top - getHeaderOffset(),
          );
          if (distance > 2) {
            return;
          }
        }
        lockedSection = null;
      }

      if (preferHash) {
        const hash = getHashSectionId();
        if (hash && sectionIds.includes(hash)) {
          setActiveSection(hash);
          return;
        }
      }

      setActiveSection(resolveActiveSection(sectionIds));
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
      lockedSection = null;
      syncActiveSection(true);
    };

    const handleSectionNav = (event: Event) => {
      const id = (event as CustomEvent<{ id: string }>).detail.id;
      if (!sectionIds.includes(id)) {
        return;
      }

      lockedSection = id;
      setActiveSection(id);
    };

    syncActiveSection(true);

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
