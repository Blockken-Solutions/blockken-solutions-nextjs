import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 text-xs font-semibold tracking-[0.2em] text-brand-highlight-text uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
