import { cn } from "@/lib/utils";

type AgentCategoryFiltersProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
};

export function AgentCategoryFilters({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: AgentCategoryFiltersProps) {
  return (
    <nav
      className={cn(
        "mt-8 -mx-[var(--container-px)] overflow-x-auto px-[var(--container-px)] sm:mx-0 sm:overflow-visible sm:px-0",
        className,
      )}
      aria-label="Agent-categorieën"
    >
      <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-brand-accent bg-brand-accent font-semibold text-white shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-brand-highlight/30 hover:text-foreground",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
}
