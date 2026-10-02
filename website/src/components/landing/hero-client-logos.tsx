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
      <p className="text-center font-label text-sm text-foreground tracking-wide sm:text-base">
        {label}
      </p>
      <div className="relative mx-auto mt-4 max-w-xl">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[52%] size-[min(100%,19rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--primary-soft)_70%,transparent)_0%,transparent_72%)] sm:size-[20rem]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[52%] size-[min(100%,19rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25 sm:size-[20rem]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[52%] size-[min(88%,16.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/12 sm:size-[17rem]"
        />
        <ul className="relative flex flex-wrap items-stretch justify-center gap-x-4 gap-y-3 sm:gap-x-6">
          {logos.map((logo) => (
            <li key={logo.src} className="flex max-w-[9rem] flex-col items-center gap-1.5 text-center sm:max-w-[10rem]">
              <ClientLogo src={logo.src} alt={logo.alt} />
              <p className="font-label text-xs font-medium leading-snug text-muted-foreground sm:text-sm">
                {logo.client}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
