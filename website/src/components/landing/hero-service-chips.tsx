import { SectionLink } from "@/components/layout/section-link";
import type { HeroServiceChip } from "@/content/types";

type HeroServiceChipsProps = {
  chips: HeroServiceChip[];
};

export function HeroServiceChips({ chips }: HeroServiceChipsProps) {
  if (!chips.length) return null;

  return (
    <ul className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Oplossingen">
      {chips.map((chip) => (
        <li key={chip.label}>
          <SectionLink
            href={chip.href}
            className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-soft transition-shadow hover:shadow-soft-hover"
          >
            {chip.label}
          </SectionLink>
        </li>
      ))}
    </ul>
  );
}
