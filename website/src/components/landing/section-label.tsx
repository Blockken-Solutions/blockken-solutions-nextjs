import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "section-eyebrow mb-4 text-xs text-brand-highlight-text",
        className,
      )}
    >
      {children}
    </p>
  );
}
