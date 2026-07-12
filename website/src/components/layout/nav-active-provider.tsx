"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

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

    const resolveActiveSection = () => {
      const activationLine = window.innerHeight * 0.33;
      let current: string | null = null;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= activationLine) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "").split("?")[0];
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        return;
      }

      resolveActiveSection();
    };

    syncFromHash();
    window.addEventListener("scroll", resolveActiveSection, { passive: true });
    window.addEventListener("resize", resolveActiveSection);
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("scroll", resolveActiveSection);
      window.removeEventListener("resize", resolveActiveSection);
      window.removeEventListener("hashchange", syncFromHash);
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
