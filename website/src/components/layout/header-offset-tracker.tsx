"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HeaderOffsetTrackerProps = {
  children: ReactNode;
};

export function HeaderOffsetTracker({ children }: HeaderOffsetTrackerProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) {
      return;
    }

    const updateOffset = () => {
      const top = parseFloat(getComputedStyle(element).top) || 0;
      const height = element.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-offset",
        `${top + height}px`,
      );
    };

    updateOffset();

    const observer = new ResizeObserver(updateOffset);
    observer.observe(element);
    window.addEventListener("resize", updateOffset);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      data-site-header
      className="sticky top-[max(0.5rem,env(safe-area-inset-top))] z-50 px-[var(--container-px)] pt-[max(0.5rem,env(safe-area-inset-top))] sm:top-4 sm:pt-4"
    >
      {children}
    </div>
  );
}
