"use client";

import { useSearchParams, type ReadonlyURLSearchParams } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import { Input } from "@/components/ui/input";
import {
  hasContactFieldErrors,
  validateContactField,
  validateContactForm,
  type ContactFieldErrors,
  type ContactFormValues,
} from "@/lib/validation/contact";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

const initialFormData: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

type ValidatedField = keyof Pick<
  ContactFormValues,
  "name" | "email" | "phone" | "message"
>;

function buildScanContactMessage(
  scanUrl: string,
  scores: {
    performance: string | null;
    seo: string | null;
    accessibility: string | null;
    bestPractices: string | null;
  },
): string {
  const scoreLines = [
    scores.performance ? `Snelheid: ${scores.performance}/100` : null,
    scores.seo ? `Vindbaarheid: ${scores.seo}/100` : null,
    scores.accessibility ? `Toegankelijkheid: ${scores.accessibility}/100` : null,
    scores.bestPractices ? `Technische kwaliteit: ${scores.bestPractices}/100` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return `Ik heb zonet een gratis website scan uitgevoerd voor ${scanUrl}.\n\nScores:\n${scoreLines}\n\nIk zou graag bespreken hoe u mijn website kunt verbeteren.`;
}

function buildInitialFormData(
  searchParams: ReadonlyURLSearchParams,
): ContactFormValues {
  const scanUrl = searchParams.get("scan");
  if (!scanUrl) {
    return initialFormData;
  }

  return {
    ...initialFormData,
    message: buildScanContactMessage(scanUrl, {
      performance: searchParams.get("perf"),
      seo: searchParams.get("seo"),
      accessibility: searchParams.get("a11y"),
      bestPractices: searchParams.get("bp"),
    }),
  };
}

function scanPrefillKey(searchParams: ReadonlyURLSearchParams): string {
  return [
    searchParams.get("scan") ?? "",
    searchParams.get("perf") ?? "",
    searchParams.get("seo") ?? "",
    searchParams.get("a11y") ?? "",
    searchParams.get("bp") ?? "",
  ].join("|");
}

export function ContactForm() {
  const searchParams = useSearchParams();

  return (
    <ContactFormFields
      key={scanPrefillKey(searchParams)}
      scanUrl={searchParams.get("scan")}
      initialFormData={buildInitialFormData(searchParams)}
    />
  );
}

type ContactFormFieldsProps = {
  scanUrl: string | null;
  initialFormData: ContactFormValues;
};

function ContactFormFields({
  scanUrl,
  initialFormData: initialValues,
}: ContactFormFieldsProps) {
  const [formData, setFormData] = useState<ContactFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ValidatedField, boolean>>>(
    {},
  );
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof ContactFormValues>(
    field: K,
    value: ContactFormValues[K],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));

    if (
      field === "name" ||
      field === "email" ||
      field === "phone" ||
      field === "message"
    ) {
      const error = validateContactField(field, value);
      setFieldErrors((current) => {
        const next = { ...current };
        if (error) next[field] = error;
        else delete next[field];
        return next;
      });
    }
  }

  function handleBlur(field: ValidatedField) {
    setTouched((current) => ({ ...current, [field]: true }));
    const error = validateContactField(field, formData[field]);
    setFieldErrors((current) => {
      const next = { ...current };
      if (error) next[field] = error;
      else delete next[field];
      return next;
    });
  }

  function showFieldError(field: ValidatedField): boolean {
    return Boolean(touched[field] && fieldErrors[field]);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validateContactForm(formData);
    setFieldErrors(errors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (hasContactFieldErrors(errors)) {
      setFormState("idle");
      setErrorMessage("Controleer de gemarkeerde velden en probeer opnieuw.");
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Er ging iets mis. Probeer het opnieuw.");
      }

      setFormState("success");
      setFormData(initialFormData);
      setFieldErrors({});
      setTouched({});
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Er ging iets mis. Probeer het opnieuw.",
      );
    }
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl bg-primary px-6 py-8 text-center shadow-soft">
        <p className="text-lg font-bold text-primary-foreground">Bedankt voor uw bericht!</p>
        <p className="mt-2 text-base leading-relaxed text-primary-foreground">
          Ik neem zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      {scanUrl ? (
        <p className="rounded-xl bg-primary-soft px-4 py-3 text-base text-foreground">
          Scan-resultaten voor:{" "}
          <span className="font-bold">{scanUrl}</span>
        </p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-base font-medium text-foreground">
            Naam *
          </label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={showFieldError("name")}
            aria-describedby={showFieldError("name") ? "contact-name-error" : undefined}
            className={cn("h-10", showFieldError("name") && "border-destructive")}
          />
          {showFieldError("name") ? (
            <p id="contact-name-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-base font-medium text-foreground">
            E-mail *
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={showFieldError("email")}
            aria-describedby={showFieldError("email") ? "contact-email-error" : undefined}
            className={cn("h-10", showFieldError("email") && "border-destructive")}
          />
          {showFieldError("email") ? (
            <p id="contact-email-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="text-base font-medium text-foreground">
            Telefoon
          </label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            onBlur={() => handleBlur("phone")}
            aria-invalid={showFieldError("phone")}
            aria-describedby={showFieldError("phone") ? "contact-phone-error" : undefined}
            className={cn("h-10", showFieldError("phone") && "border-destructive")}
          />
          {showFieldError("phone") ? (
            <p id="contact-phone-error" className="text-sm text-destructive" role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-company" className="text-base font-medium text-foreground">
            Bedrijf
          </label>
          <Input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="h-10"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="text-base font-medium text-foreground">
          Bericht *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={showFieldError("message")}
          aria-describedby={
            showFieldError("message") ? "contact-message-error" : undefined
          }
          className={cn(
            "w-full rounded-xl border border-border bg-card px-3 py-2 text-base font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "placeholder:text-muted-foreground",
            showFieldError("message") && "border-destructive",
          )}
        />
        {showFieldError("message") ? (
          <p id="contact-message-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {formState === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        size="cta"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto"
      >
        <ButtonLabel showArrow={formState !== "submitting"}>
          {formState === "submitting" ? "Versturen..." : "Verstuur bericht →"}
        </ButtonLabel>
      </Button>
    </form>
  );
}
