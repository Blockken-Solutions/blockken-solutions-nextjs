import Image from "next/image";

import type { HeroClientLogo } from "@/content/types";

type HeroClientLogosProps = {
  label: string;
  logos: HeroClientLogo[];
};

function ClientLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-9 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-white shadow-soft sm:size-10">
      <Image src={src} alt={alt} fill className="object-contain p-1" sizes="40px" />
    </div>
  );
}

export function HeroClientLogos({ label, logos }: HeroClientLogosProps) {
  if (!logos.length) return null;

  return (
    <div className="mt-8 w-full border-t border-border/60 pt-6">
      <p className="text-center font-label text-sm text-foreground tracking-wide sm:text-base">
        {label}
      </p>
      <ul className="mx-auto mt-5 grid max-w-md grid-cols-2 gap-x-5 gap-y-5 sm:max-w-2xl sm:grid-cols-4 sm:gap-x-6 sm:gap-y-4">
        {logos.map((logo) => (
          <li
            key={logo.src}
            className="flex flex-col items-center gap-2 text-center"
          >
            <ClientLogo src={logo.src} alt={logo.alt} />
            <p className="font-label text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
              {logo.client}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
