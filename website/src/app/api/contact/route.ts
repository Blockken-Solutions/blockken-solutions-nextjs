import { Resend } from "resend";

import { agentsPage } from "@/content/agents";

type ContactRequestBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  agent?: string;
};

const DEFAULT_FROM_EMAIL = "blockken.solutions <onboarding@resend.dev>";

function getAgentTitle(slug: string): string | null {
  return agentsPage.agents.find((agent) => agent.slug === slug)?.title ?? null;
}

function resolveFromEmail(): string {
  const configuredFrom = process.env.CONTACT_EMAIL_FROM?.trim();
  if (!configuredFrom) return DEFAULT_FROM_EMAIL;

  if (configuredFrom.includes("@resend.dev")) {
    return configuredFrom;
  }

  if (process.env.RESEND_FROM_VERIFIED === "true") {
    return configuredFrom;
  }

  return DEFAULT_FROM_EMAIL;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL_TO ?? "wouter@blockken.solutions";
  const fromEmail = resolveFromEmail();
  const isDev = process.env.NODE_ENV === "development";

  if (!apiKey) {
    return Response.json(
      {
        error:
          "E-mailconfiguratie ontbreekt. Neem contact op via wouter@blockken.solutions.",
      },
      { status: 500 },
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return Response.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const company = body.company?.trim();
  const message = body.message?.trim();
  const agentSlug = body.agent?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Naam, e-mail en bericht zijn verplicht." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return Response.json({ error: "Ongeldig e-mailadres." }, { status: 400 });
  }

  const agentTitle = agentSlug ? getAgentTitle(agentSlug) : null;
  const subject = agentTitle
    ? `Demo-aanvraag: ${agentTitle} — ${name}`
    : `Contactaanvraag — ${name}`;

  const agentLine = agentTitle
    ? `Gewenste agent: ${agentTitle}`
    : agentSlug
      ? `Gewenste agent: ${agentSlug}`
      : null;

  const textLines = [
    `Naam: ${name}`,
    `E-mail: ${email}`,
    company ? `Bedrijf: ${company}` : null,
    agentLine,
    "",
    "Bericht:",
    message,
  ].filter((line): line is string => line !== null);

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject,
    text: textLines.join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);

    const fallbackHint =
      fromEmail === DEFAULT_FROM_EMAIL
        ? ""
        : " Zolang uw domein niet geverifieerd is, gebruikt u best onboarding@resend.dev als afzender.";

    return Response.json(
      {
        error: isDev
          ? `${error.message}${fallbackHint}`
          : "Bericht kon niet verstuurd worden. Probeer het later opnieuw.",
      },
      { status: 500 },
    );
  }

  return Response.json({ success: true });
}
