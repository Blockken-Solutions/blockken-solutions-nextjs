import { CalendlyScripts } from "@/components/calendly/calendly-scripts";
import { CALENDLY_CSS } from "@/lib/calendly/constants";

export default function PlanGesprekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link href={CALENDLY_CSS} rel="stylesheet" />
      <CalendlyScripts>{children}</CalendlyScripts>
    </>
  );
}
