type TrustBarProps = {
  items?: string[] | null;
};

export function TrustBar({ items }: TrustBarProps) {
  if (!items?.length) return null;

  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
      {items.map((item, index) => (
        <span key={item} className="flex items-center gap-3">
          {index > 0 ? <span className="text-border">•</span> : null}
          {item}
        </span>
      ))}
    </div>
  );
}
