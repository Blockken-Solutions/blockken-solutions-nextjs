import {
  Bot,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  Hammer,
  MessageCircle,
  PenLine,
  Rocket,
  ScanSearch,
  ScrollText,
  Search,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  bot: Bot,
  search: Search,
  "file-text": FileText,
  "clipboard-list": ClipboardList,
  "message-circle": MessageCircle,
  "calendar-days": CalendarDays,
  "user-check": UserCheck,
  "shopping-cart": ShoppingCart,
  wrench: Wrench,
  hammer: Hammer,
  rocket: Rocket,
  "scan-search": ScanSearch,
  "trending-up": TrendingUp,
  "graduation-cap": GraduationCap,
  "scroll-text": ScrollText,
  "pen-line": PenLine,
  users: Users,
  sparkles: Sparkles,
  linkedin: LinkedinIcon as LucideIcon,
};

export function getIcon(name?: string | null): LucideIcon {
  if (!name) return Sparkles;
  return iconMap[name] ?? Sparkles;
}
