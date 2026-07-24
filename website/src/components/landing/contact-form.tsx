"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { agentsPage } from "@/content/agents";
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
  agent: "",
};

type ValidatedField = keyof Pick<
  ContactFormValues,
  "name" | "email" | "phone" | "message"
>;

export function ContactForm() {
  const searchParams = useSearchParams();
  const agentSlug = searchParams.get("agent");

  const agentTitle = useMemo(() => {
    if (!agentSlug) return null;
    return agentsPage.agents.find((agent) => agent.slug === agentSlug)?.title ?? null;
  }, [agentSlug]);

  const [formData, setFormData] = useState<ContactFormValues>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ValidatedField, boolean>>>(
    {},
  );
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!agentSlug) return;

    setFormData((current) => ({
      ...current,
      agent: agentSlug,
      message:
        current.message ||
        (agentTitle
          ? `Ik ben geïnteresseerd in een demo van de ${agentTitle}.`
          : `Ik ben geïnteresseerd in een demo van de agent "${agentSlug}".`),
    }));
  }, [agentSlug, agentTitle]);

  useEffect(() => {
    const scanUrl = searchParams.get("scan");
    if (!scanUrl) return;

    const performance = searchParams.get("perf");
    const seo = searchParams.get("seo");
    const accessibility = searchParams.get("a11y");
    const bestPractices = searchParams.get("bp");

    const scoreLines = [
      performance ? `Performance: ${performance}/100` : null,
      seo ? `SEO: ${seo}/100` : null,
      accessibility ? `Toegankelijkheid: ${accessibility}/100` : null,
      bestPractices ? `Best practices: ${bestPractices}/100` : null,
    ]
      .filter(Boolean)
      .join("\n");

    setFormData((current) => ({
      ...current,
      message:
        current.message ||
        `Ik heb zonet een gratis website scan uitgevoerd voor ${scanUrl}.\n\nScores:\n${scoreLines}\n\nIk zou graag bespreken hoe jullie mijn website kunnen verbeteren.`,
    }));
  }, [searchParams]);

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
      <div className="rounded-2xl border border-border bg-muted/50 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-foreground">Bedankt voor uw bericht!</p>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          Ik neem zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      {agentTitle ? (
        <p className="rounded-xl border border-brand-highlight/20 bg-brand-highlight/5 px-4 py-3 text-base text-foreground">
          Demo-aanvraag voor: <span className="font-semibold">{agentTitle}</span>
        </p>
      ) : null}

      {searchParams.get("scan") ? (
        <p className="rounded-xl border border-brand-highlight/20 bg-brand-highlight/5 px-4 py-3 text-base text-foreground">
          Scan-resultaten voor:{" "}
          <span className="font-semibold">{searchParams.get("scan")}</span>
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
            className={cn("h-10", showFieldError("name") && "border-destructive ring-3 ring-destructive/20")}
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
            className={cn("h-10", showFieldError("email") && "border-destructive ring-3 ring-destructive/20")}
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
            className={cn("h-10", showFieldError("phone") && "border-destructive ring-3 ring-destructive/20")}
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
            "w-full rounded-lg border border-input bg-transparent px-3 py-2 text-base transition-colors outline-none",
            "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
            showFieldError("message") &&
              "border-destructive ring-3 ring-destructive/20",
          )}
        />
        {showFieldError("message") ? (
          <p id="contact-message-error" className="text-sm text-destructive" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      <input type="hidden" name="agent" value={formData.agent} />

      {formState === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        shape="pill"
        size="cta"
        disabled={formState === "submitting"}
        className="w-full sm:w-auto"
      >
        {formState === "submitting" ? "Versturen..." : "Verstuur bericht →"}
      </Button>
    </form>
  );
}
