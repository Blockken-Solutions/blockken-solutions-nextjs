"use client";

import { Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const LOADING_STEPS = [
  "Website bereikbaar maken…",
  "Snelheid meten…",
  "Vindbaarheid controleren…",
  "Verbeterpunten verzamelen…",
] as const;

const STEP_INTERVAL_MS = 4_000;

export function ScanLoadingSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) =>
        current < LOADING_STEPS.length - 1 ? current + 1 : current,
      );
    }, STEP_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-6 py-12"
      role="status"
      aria-live="polite"
    >
      <Loader2 className="size-10 animate-spin text-primary" />
      <div className="w-full max-w-sm space-y-3">
        {LOADING_STEPS.map((step, index) => {
          const isComplete = index < activeStep;
          const isActive = index === activeStep;

          return (
            <div
              key={step}
              className={cn(
                "flex items-center gap-3 border border-border px-4 py-3 text-sm transition-colors",
                isComplete && "bg-green-500/5",
                isActive && "bg-primary/10",
                !isComplete && !isActive && "bg-muted text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center border border-border",
                  isComplete && "bg-green-500 text-white",
                  isActive && "bg-primary text-primary-foreground",
                  !isComplete && !isActive && "bg-muted text-muted-foreground",
                )}
              >
                {isComplete ? (
                  <Check className="size-3.5" aria-hidden="true" />
                ) : isActive ? (
                  <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                ) : (
                  <span className="size-1.5 bg-current" aria-hidden="true" />
                )}
              </span>
              <span
                className={cn(
                  isComplete && "text-foreground",
                  isActive && "font-medium text-foreground",
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground">Dit kan 10–30 seconden duren.</p>
    </div>
  );
}
