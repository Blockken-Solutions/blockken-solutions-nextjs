"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

type HeaderOffsetTrackerProps = {
  children: ReactNode;
};

export function HeaderOffsetTracker({ children }: HeaderOffsetTrackerProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = headerRef.current;
    if (!element) {
      return;
    }

    const updateOffset = () => {
      const height = element.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-offset",
        `${height}px`,
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
    <div ref={headerRef} data-site-header className="sticky top-0 z-50">
      {children}
    </div>
  );
}
