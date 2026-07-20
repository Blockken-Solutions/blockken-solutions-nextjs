import { cn } from "@/lib/utils";

type ScoreGaugeProps = {
  label: string;
  value: string | number;
  color?: "red" | "green" | "orange" | "blue";
};

const colorMap = {
  red: "stroke-red-500 text-red-500",
  green: "stroke-green-500 text-green-500",
  orange: "stroke-brand-orange text-brand-orange",
  blue: "stroke-blue-500 text-blue-500",
};

export function ScoreGauge({ label, value, color = "orange" }: ScoreGaugeProps) {
  const numericValue =
    typeof value === "number" ? Math.min(100, Math.max(0, value)) : null;
  const circumference = 2 * Math.PI * 36;
  const offset =
    numericValue !== null
      ? circumference - (numericValue / 100) * circumference
      : circumference * 0.25;

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6">
      <div className="relative size-24">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 80 80"
          role="img"
          aria-label={`${label}: ${value}`}
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-muted"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={cn(colorMap[color])}
          />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center text-xl font-bold",
            colorMap[color],
          )}
        >
          {value}
        </span>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
