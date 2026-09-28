import type { CredentialItem } from "@/content/types";

export const authorCredentials: CredentialItem[] = [
  {
    type: "Diploma",
    label: "AI Technology Architect",
    issuer: "Hogeschool PXL",
    year: "2026",
    icon: "graduation-cap",
  },
  {
    type: "Gecertificeerd",
    label: "AWS Certified AI Practitioner (AIF-C01)",
    issuer: "Amazon Web Services",
    year: "2026",
    icon: "scroll-text",
  },
  {
    type: "Diploma",
    label: "Toegepaste Informatica",
    issuer: "Hogeschool PXL",
    year: "2021",
    icon: "graduation-cap",
  },
];

export function formatAuthorCredentialSummary(credential: CredentialItem): string {
  const parts = [credential.label];
  if (credential.issuer) {
    parts.push(`(${credential.issuer}${credential.year ? `, ${credential.year}` : ""})`);
  }
  return parts.join(" ");
}
