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
    <form onSubmit={handleSubmit} className={cn("mx-auto max-w-2xl", className)}>
      <label htmlFor="scan-url" className="sr-only">
        Website-URL
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:rounded-full sm:border sm:border-border sm:bg-background sm:p-1.5 sm:pl-5 sm:shadow-sm">
        <Input
          id="scan-url"
          type="url"
          name="url"
          placeholder={inputPlaceholder}
          value={url}
          onChange={(event) => {
            setUrl(event.target.value);
            if (error) {
              setError(null);
            }
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "scan-url-error" : undefined}
          className="h-10 flex-1 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
        <Button
          type="submit"
          variant="primary"
          shape="pill"
          size="lg"
          className="shrink-0"
        >
          {buttonLabel}
        </Button>
      </div>
      {error ? (
        <p id="scan-url-error" className="mt-3 text-center text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : (
        <p className="mt-3 text-center text-sm text-muted-foreground">{helperText}</p>
      )}
    </form>
  );
}
