import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  iconBg?: string;
}

export function KpiCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  iconBg = "bg-slate-100 text-slate-800",
}: KpiCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-150">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {title}
        </span>
        <div className={cn("p-2.5 rounded-lg", iconBg)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
        </span>
        {change && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              isPositive
                ? "bg-emerald-50 text-emerald-700 font-semibold"
                : "bg-red-50 text-red-600 font-semibold"
            )}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
