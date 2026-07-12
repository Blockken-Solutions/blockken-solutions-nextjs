import Link from "next/link";

import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section containerClassName="max-w-2xl text-center">
      <SectionHeading>Page not found</SectionHeading>
      <p className="mt-4 text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </Section>
  );
}
