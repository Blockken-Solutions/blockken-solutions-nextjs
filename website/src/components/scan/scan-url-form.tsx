"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
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
};

export function ScanUrlForm({
  defaultUrl = "",
  inputPlaceholder,
  buttonLabel,
  helperText,
  errorMessage,
  onSubmit,
  className,
}: ScanUrlFormProps) {
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
    <form onSubmit={handleSubmit} className={cn("mx-auto max-w-2xl text-left", className)}>
      <label
        htmlFor="scan-url"
        className="mb-2 block text-sm font-medium text-foreground sm:sr-only"
      >
        Website-URL
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:border sm:border-border sm:bg-background sm:p-1.5 sm:pl-5 sm:shadow-sm">
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
            "h-11 flex-1 rounded-xl border border-input bg-background px-4 shadow-sm",
            "sm:h-10 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:shadow-none sm:focus-visible:ring-0",
            error && "border-destructive ring-3 ring-destructive/20",
          )}
        />
        <Button
          type="submit"
          variant="primary"
          shape="pill"
          size="cta"
          className="w-full shrink-0 sm:w-auto"
        >
          {buttonLabel}
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
