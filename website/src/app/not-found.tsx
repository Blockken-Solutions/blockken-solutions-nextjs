import type { Metadata } from "next";
import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  pathname: "/404",
  title: "Pagina niet gevonden",
  description: "De pagina die u zoekt bestaat niet of is verplaatst.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <Section containerClassName="max-w-2xl text-center">
      <SectionHeading>Pagina niet gevonden</SectionHeading>
      <p className="mt-4 text-muted-foreground">
        De pagina die u zoekt bestaat niet of is verplaatst.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Terug naar home</Link>
        </Button>
      </div>
    </Section>
  );
}
