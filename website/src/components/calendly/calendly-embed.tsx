"use client";

import { useEffect, useRef, useState } from "react";

import { useCalendlyReady } from "@/components/calendly/calendly-scripts";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import "@/lib/calendly/types";

type CalendlyEmbedLayout = "page" | "inline";

type CalendlyEmbedProps = {
  url: string | null;
  layout?: CalendlyEmbedLayout;
  className?: string;
};

const PAGE_WIDGET_HEIGHT = 1060;

type CalendlyMessageData = {
  event?: string;
  payload?: {
    height?: number;
  };
};

function isCalendlyLoaded(): boolean {
  return typeof window !== "undefined" && Boolean(window.Calendly);
}

function CalendlyEmbedPlaceholder({ layout }: { layout: CalendlyEmbedLayout }) {
  return (
    <div
      className={cn(
        "w-full animate-pulse bg-muted/20",
        layout === "page" ? "min-h-[1060px]" : "min-h-[200px] rounded-2xl",
      )}
      aria-hidden="true"
    />
  );
}

export function CalendlyEmbed({
  url,
  layout = "page",
  className,
}: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contextReady = useCalendlyReady();
  const [mounted, setMounted] = useState(false);
  const [widgetHeight, setWidgetHeight] = useState(PAGE_WIDGET_HEIGHT);
  const ready = contextReady || isCalendlyLoaded();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (layout !== "page") {
      return;
    }

    function handleMessage(event: MessageEvent) {
      if (event.origin !== "https://calendly.com") {
        return;
      }

      const data = event.data as CalendlyMessageData;
      if (
        data.event === "calendly.page_height" &&
        typeof data.payload?.height === "number" &&
        data.payload.height > 0
      ) {
        setWidgetHeight(data.payload.height);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [layout]);

  useEffect(() => {
    if (!mounted || !ready || !url || !containerRef.current || !window.Calendly) {
      return;
    }

    containerRef.current.replaceChildren();
    window.Calendly.initInlineWidget({
      url,
      parentElement: containerRef.current,
    });
  }, [mounted, ready, url]);

  useEffect(() => {
    if (layout !== "page" || !containerRef.current) {
      return;
    }

    containerRef.current.style.height = `${widgetHeight}px`;
    containerRef.current.style.minHeight = `${widgetHeight}px`;

    const iframe = containerRef.current.querySelector("iframe");
    if (iframe instanceof HTMLIFrameElement) {
      iframe.style.height = `${widgetHeight}px`;
    }
  }, [layout, widgetHeight]);

  if (!mounted) {
    return <CalendlyEmbedPlaceholder layout={layout} />;
  }

  if (!url) {
    return (
      <div className="px-6 py-10 text-center sm:px-10">
        <p className="text-base leading-relaxed text-muted-foreground">
          Online planning is tijdelijk niet beschikbaar. Neem rechtstreeks contact op via{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-medium text-brand-accent underline-offset-4 hover:underline"
          >
            {site.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "calendly-inline-widget w-full",
        layout === "page" ? "calendly-inline-widget--page" : "calendly-inline-widget--inline",
        className,
      )}
      style={
        layout === "page"
          ? { height: `${widgetHeight}px`, minHeight: `${widgetHeight}px` }
          : undefined
      }
    />
  );
}
