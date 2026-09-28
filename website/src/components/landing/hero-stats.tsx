type HeroStatsProps = {
  items: string[];
};

export function HeroStats({ items }: HeroStatsProps) {
  if (!items.length) return null;

  return (
    <ul
      className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
      aria-label="Kernfeiten"
    >
      {items.map((item, index) => (
        <li key={item} className="flex items-center gap-3">
          {index > 0 ? (
            <span className="hidden text-muted-foreground/50 sm:inline" aria-hidden="true">
              ·
            </span>
          ) : null}
          <span className="font-label text-xs text-muted-foreground sm:text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}
