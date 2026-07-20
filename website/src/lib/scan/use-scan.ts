"use client";

import { useEffect, useRef, useState } from "react";

import type { ScanResult, ScanState } from "@/lib/scan/types";

type CompletedScanState = Extract<ScanState, { status: "success" | "error" }>;

type ScanApiResponse = ScanResult | { error: string };

export function useScan(url: string | null): ScanState {
  const [completed, setCompleted] = useState<{
    url: string;
    state: CompletedScanState;
  } | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    if (!url) return;

    const requestId = ++requestIdRef.current;

    fetch(`/api/scan?url=${encodeURIComponent(url)}`)
      .then(async (response) => {
        const data = (await response.json()) as ScanApiResponse;

        if (!response.ok || "error" in data) {
          throw new Error(
            "error" in data
              ? data.error
              : "De scan is mislukt. Probeer het later opnieuw.",
          );
        }

        return data;
      })
      .then((result: ScanResult) => {
        if (requestIdRef.current !== requestId) return;
        setCompleted({ url, state: { status: "success", result } });
      })
      .catch((error: unknown) => {
        if (requestIdRef.current !== requestId) return;
        const message =
          error instanceof Error
            ? error.message
            : "De scan is mislukt. Probeer het later opnieuw.";
        setCompleted({ url, state: { status: "error", message, url } });
      });
  }, [url]);

  if (!url) {
    return { status: "idle" };
  }

  if (completed?.url === url) {
    return completed.state;
  }

  return { status: "loading", url };
}
