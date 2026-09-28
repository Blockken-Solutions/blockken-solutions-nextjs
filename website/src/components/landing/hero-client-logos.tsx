import Image from "next/image";

import type { HeroClientLogo } from "@/content/types";

type HeroClientLogosProps = {
  label: string;
  logos: HeroClientLogo[];
};

function ClientLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-8 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-white shadow-soft sm:size-9">
      <Image src={src} alt={alt} fill className="object-contain p-1" sizes="36px" />
    </div>
  );
}

export function HeroClientLogos({ label, logos }: HeroClientLogosProps) {
  if (!logos.length) return null;

  return (
    <div className="mt-8 w-full border-t border-border/60 pt-6">
      <p className="font-label text-[0.65rem] tracking-wide text-muted-foreground/80">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap items-stretch justify-center gap-x-4 gap-y-3 sm:gap-x-6">
        {logos.map((logo) => (
          <li key={logo.src} className="flex max-w-[7.5rem] flex-col items-center gap-1.5 text-center">
            <ClientLogo src={logo.src} alt={logo.alt} />
            <p className="font-label text-[0.65rem] leading-snug text-muted-foreground/75 sm:text-[0.7rem]">
              {logo.client}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
