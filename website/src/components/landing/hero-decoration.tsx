import { HeroBackgroundArt } from "@/components/landing/hero-background-art";

export function HeroDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 flex flex-col dark:opacity-40 dark:brightness-[0.85]"
      aria-hidden
    >
      <div className="relative aspect-[1440/720] w-full shrink-0">
        <HeroBackgroundArt className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#faf1e5] to-transparent" />
      </div>
      <div className="min-h-0 flex-1 bg-linear-to-b from-[#faf1e5] via-background to-pastel-peach" />
    </div>
  );
}
