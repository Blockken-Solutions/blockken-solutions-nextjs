"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Input } from "@/components/ui/input";
import { normalizeScanUrl } from "@/lib/scan-url";
import { cn } from "@/lib/utils";

type ScanUrlFormProps = {
  defaultUrl?: string;
  inputPlaceholder: string;
  buttonLabel: string;
  helperText: string;
  errorMessage: string;
  onSubmit: (url: string) => void;
  className?: string;
  layout?: "inline" | "stacked";
};

export function ScanUrlForm({
  defaultUrl = "",
  inputPlaceholder,
  buttonLabel,
  helperText,
  errorMessage,
  onSubmit,
  className,
  layout = "inline",
}: ScanUrlFormProps) {
  const isStacked = layout === "stacked";
  const [url, setUrl] = useState(defaultUrl);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = normalizeScanUrl(url, errorMessage);

    if (!result.ok) {
      setError(result.error);
      return;
    }

    setError(null);
    onSubmit(result.url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "mx-auto w-full max-w-2xl",
        isStacked ? "text-center" : "text-left",
        className,
      )}
    >
      <label htmlFor="scan-url" className="sr-only">
        Website-URL
      </label>
      <div
        className={cn(
          "flex w-full gap-3",
          isStacked
            ? "flex-col items-center"
            : "flex-col sm:flex-row sm:items-stretch sm:gap-0 sm:rounded-full sm:border sm:border-border sm:bg-background sm:p-1.5 sm:pl-4 sm:shadow-soft",
        )}
      >
        <Input
          id="scan-url"
          type="url"
          name="url"
          inputMode="url"
          autoComplete="url"
          autoCapitalize="none"
          placeholder={inputPlaceholder}
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
            if (error) {
              setError(null);
            }
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "scan-url-error" : "scan-url-helper"}
          className={cn(
            "h-12 w-full flex-1 rounded-xl border border-border bg-background px-4 shadow-soft",
            !isStacked &&
              "sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:shadow-none sm:focus-visible:ring-0",
            isStacked && "max-w-xl",
            error && "border-destructive ring-3 ring-destructive/20",
          )}
        />
        <Button
          type="submit"
          variant="primary"
          shape="pill"
          size="cta"
          className={cn(
            "h-12 w-full shrink-0 justify-center",
            isStacked ? "max-w-xl" : "sm:w-auto sm:self-center",
          )}
        >
          <ButtonLabel>{buttonLabel}</ButtonLabel>
        </Button>
      </div>
      {error ? (
        <p id="scan-url-error" className="mt-3 text-center text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : (
        <p id="scan-url-helper" className="mt-3 text-center text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
    </form>
  );
}
