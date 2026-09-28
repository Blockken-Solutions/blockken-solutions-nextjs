export function HeroDecoration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -top-24 left-1/2 size-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--pastel-peach)_0%,transparent_70%)] opacity-55 blur-3xl" />
      <div className="absolute top-[18%] -left-16 size-64 rounded-full bg-[radial-gradient(circle,var(--primary-soft)_0%,transparent_70%)] opacity-45 blur-3xl sm:size-80" />
      <div className="absolute -right-12 bottom-[10%] size-72 rounded-full bg-[radial-gradient(circle,var(--pastel-peach)_0%,transparent_70%)] opacity-40 blur-3xl sm:size-96" />
      <div className="absolute top-[42%] right-[8%] hidden size-44 rounded-3xl bg-card/40 shadow-soft-lg backdrop-blur-sm sm:block" />
      <div className="absolute bottom-[22%] left-[6%] hidden size-32 rounded-2xl bg-card/30 shadow-soft sm:block" />
    </div>
  );
}
