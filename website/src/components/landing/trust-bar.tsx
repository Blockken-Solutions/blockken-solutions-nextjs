import { cn } from "@/lib/utils";

type TrustBarProps = {
  items?: string[] | null;
  layout?: "start" | "center";
  className?: string;
};

export function TrustBar({ items, layout = "start", className }: TrustBarProps) {
  if (!items?.length) return null;

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-3",
        layout === "center" && "justify-center",
        className,
      )}
      aria-label="Vertrouwenskenmerken"
    >
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-sm font-medium text-muted-foreground shadow-soft"
        >
          <span className="inline-block size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
