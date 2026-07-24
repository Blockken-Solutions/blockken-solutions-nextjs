import { cn } from "@/lib/utils";

type ScoreColor = "red" | "green" | "orange";

type ScoreGaugeProps = {
  label: string;
  value: number;
};

const colorMap: Record<ScoreColor, string> = {
  red: "stroke-red-500 text-red-500",
  green: "stroke-green-500 text-green-500",
  orange: "stroke-brand-accent text-brand-accent",
};

export function scoreToColor(score: number): ScoreColor {
  if (score >= 90) return "green";
  if (score >= 50) return "orange";
  return "red";
}

export function ScoreGauge({ label, value }: ScoreGaugeProps) {
  const numericValue = Math.min(100, Math.max(0, value));
  const color = scoreToColor(numericValue);
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (numericValue / 100) * circumference;

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
