export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  agent: string;
};

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_PATTERN = /^[+\d\s()\-]+$/;

export function validateContactField(
  field: keyof ContactFormValues,
  value: string,
): string | undefined {
  const trimmed = value.trim();

  switch (field) {
    case "name":
      if (!trimmed) return "Vul uw naam in.";
      if (trimmed.length < 2) return "Naam moet minstens 2 tekens bevatten.";
      return undefined;
    case "email":
      if (!trimmed) return "Vul uw e-mailadres in.";
      if (!EMAIL_PATTERN.test(trimmed)) {
        return "Vul een geldig e-mailadres in (bijv. naam@bedrijf.be).";
      }
      return undefined;
    case "phone": {
      if (!trimmed) return undefined;
      if (!PHONE_CHARS_PATTERN.test(trimmed)) {
        return "Vul een geldig telefoonnummer in.";
      }
      const digits = trimmed.replace(/\D/g, "");
      if (digits.length < 8 || digits.length > 15) {
        return "Vul een geldig telefoonnummer in.";
      }
      return undefined;
    }
    case "message":
      if (!trimmed) return "Vul een bericht in.";
      if (trimmed.length < 10) {
        return "Bericht moet minstens 10 tekens bevatten.";
      }
      return undefined;
    case "company":
    case "agent":
      return undefined;
    default:
      return undefined;
  }
}

export function validateContactForm(
  values: ContactFormValues,
): ContactFieldErrors {
  const fields: Array<keyof ContactFormValues> = [
    "name",
    "email",
    "phone",
    "message",
  ];

  return fields.reduce<ContactFieldErrors>((errors, field) => {
    const error = validateContactField(field, values[field]);
    if (error) errors[field] = error;
    return errors;
  }, {});
}

export function hasContactFieldErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
