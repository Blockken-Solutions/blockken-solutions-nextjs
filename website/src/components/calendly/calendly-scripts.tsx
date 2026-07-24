"use client";

import Script from "next/script";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { CALENDLY_SCRIPT } from "@/lib/calendly/constants";
import "@/lib/calendly/types";

type CalendlyContextValue = {
  ready: boolean;
};

const CalendlyContext = createContext<CalendlyContextValue>({ ready: false });

export function useCalendlyReady(): boolean {
  return useContext(CalendlyContext).ready;
}

function isCalendlyLoaded(): boolean {
  return typeof window !== "undefined" && Boolean(window.Calendly);
}

type CalendlyScriptsProps = {
  children: ReactNode;
};

export function CalendlyScripts({ children }: CalendlyScriptsProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isCalendlyLoaded()) {
      setReady(true);
    }
  }, []);

  const value = useMemo(() => ({ ready }), [ready]);

  return (
    <CalendlyContext.Provider value={value}>
      <Script
        src={CALENDLY_SCRIPT}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
        onLoad={() => setReady(true)}
      />
      {children}
    </CalendlyContext.Provider>
  );
}
