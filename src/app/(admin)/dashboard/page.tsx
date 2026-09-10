import { KpiCard } from "@/components/admin/KpiCard";
import { Users, CreditCard, UserCheck, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Executive Command Control Center
          </h1>
          <p className="text-xs text-slate-500">
            Real-time institutional oversight & admissions funnel metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admissions"
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm"
          >
            Open Admissions CRM
          </Link>
        </div>
      </div>

      {/* 3-Column Core KPIs (PRD ADM-01) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KpiCard
          title="Seats Filled (Capacity)"
          value="482 / 500"
          change="+12 this month"
          isPositive={true}
          icon={Users}
          iconBg="bg-blue-50 text-blue-700"
        />
        <KpiCard
          title="Fee Collection Rate"
          value="88.4%"
          change="+4.2% vs Q2"
          isPositive={true}
          icon={CreditCard}
          iconBg="bg-emerald-50 text-emerald-700"
        />
        <KpiCard
          title="Daily Student Attendance"
          value="96.2%"
          change="On target"
          isPositive={true}
          icon={UserCheck}
          iconBg="bg-violet-50 text-violet-700"
        />
      </div>

      {/* Funnel & Quick Action Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admission Conversion Funnel */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center justify-between">
            <span>Admissions Lead Pipeline</span>
            <span className="text-xs text-slate-500 font-normal">Academic Year 2026-27</span>
          </h3>

          <div className="space-y-3">
            {[
              { stage: "Lead Inflow", count: 142, pct: 100, color: "bg-blue-500" },
              { stage: "Inquiries Processed", count: 98, pct: 69, color: "bg-indigo-500" },
              { stage: "Interviews Conducted", count: 64, pct: 45, color: "bg-violet-500" },
              { stage: "Document Review", count: 52, pct: 36, color: "bg-amber-500" },
              { stage: "Final Registration", count: 42, pct: 30, color: "bg-emerald-500" },
            ].map((item) => (
              <div key={item.stage} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{item.stage}</span>
                  <span>{item.count} Leads ({item.pct}%)</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-300`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Activity & Shortcuts */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900">Admin Actions</h3>

          <div className="space-y-2">
            <Link
              href="/billing"
              className="flex items-center justify-between p-3 bg-violet-50 border border-violet-100 rounded-lg hover:bg-violet-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <div>
                  <span className="block text-xs font-bold text-violet-900">
                    WhatsApp Fee Dispatch
                  </span>
                  <span className="block text-[10px] text-violet-700">
                    Automated rule builder
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-violet-600" />
            </Link>

            <Link
              href="/fees"
              className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <div>
                  <span className="block text-xs font-bold text-emerald-900">
                    Fee Ledger & UPI Tracker
                  </span>
                  <span className="block text-[10px] text-emerald-700">
                    Instant NPCI status
                  </span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
