import { KpiCard } from "@/components/admin/KpiCard";
import { TrendingUp, DollarSign, Users, Award } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Institutional Audit & Analytics Reporter
        </h1>
        <p className="text-xs text-slate-500">
          Multi-year cash flow, retention rates, and overhead trend metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard
          title="Multi-Year Retention Rate"
          value="94.6%"
          change="+1.8% YoY"
          isPositive={true}
          icon={TrendingUp}
          iconBg="bg-emerald-50 text-emerald-700"
        />
        <KpiCard
          title="Annual Revenue Realization"
          value="₹1.18 Cr"
          change="+14% vs FY25"
          isPositive={true}
          icon={DollarSign}
          iconBg="bg-blue-50 text-blue-700"
        />
        <KpiCard
          title="Student-to-Teacher Ratio"
          value="14.1 : 1"
          change="Optimal"
          isPositive={true}
          icon={Users}
          iconBg="bg-violet-50 text-violet-700"
        />
      </div>
    </div>
  );
}
