import { KpiCard } from "@/components/admin/KpiCard";
import {
  Users, CreditCard, UserCheck, TrendingUp, Sparkles, ArrowRight,
  IndianRupee, GraduationCap, AlertTriangle, CheckCircle2, Clock,
  BarChart3, CalendarDays, Bell, Landmark
} from "lucide-react";
import Link from "next/link";

/* ────────────────── Demo Data ────────────────── */

const recentTransactions = [
  { id: "TXN-2026-4821", student: "Aarav Sharma", class: "8-A", amount: 14500, mode: "UPI", status: "Success", time: "10:23 AM" },
  { id: "TXN-2026-4820", student: "Priya Patel", class: "9-B", amount: 16200, mode: "NEFT", status: "Success", time: "09:45 AM" },
  { id: "TXN-2026-4819", student: "Rohit Gupta", class: "7-C", amount: 12800, mode: "Cash", status: "Pending", time: "09:12 AM" },
  { id: "TXN-2026-4818", student: "Sneha Iyer", class: "10-A", amount: 18500, mode: "UPI", status: "Success", time: "Yesterday" },
  { id: "TXN-2026-4817", student: "Karan Singh", class: "6-B", amount: 11200, mode: "Cheque", status: "Cleared", time: "Yesterday" },
];

const topPerformers = [
  { name: "Ananya Deshmukh", class: "10-A", score: 98.2, rank: 1, badge: "🥇" },
  { name: "Vivek Krishnan", class: "10-B", score: 97.8, rank: 2, badge: "🥈" },
  { name: "Meera Joshi", class: "9-A", score: 96.5, rank: 3, badge: "🥉" },
  { name: "Arjun Reddy", class: "10-A", score: 95.9, rank: 4, badge: "⭐" },
  { name: "Ishita Agarwal", class: "9-B", score: 95.4, rank: 5, badge: "⭐" },
];

const staffAlerts = [
  { alert: "Mrs. Kavita Nair requested leave (12-14 Sep)", type: "leave", time: "2h ago" },
  { alert: "Mr. Rajesh Kumar submitted Q2 gradebook", type: "info", time: "3h ago" },
  { alert: "Lab equipment maintenance overdue — Physics Lab", type: "warning", time: "5h ago" },
  { alert: "PTA meeting scheduled for 18 Sep 2026, 4:00 PM", type: "event", time: "1d ago" },
];

const attendanceByGrade = [
  { grade: "Class 6", present: 118, total: 120, pct: 98.3 },
  { grade: "Class 7", present: 112, total: 120, pct: 93.3 },
  { grade: "Class 8", present: 76, total: 80, pct: 95.0 },
  { grade: "Class 9", present: 73, total: 80, pct: 91.3 },
  { grade: "Class 10", present: 78, total: 80, pct: 97.5 },
];

/* ────────────────── Page ────────────────── */

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
            Real-time institutional oversight · Academic Year 2026-27 · Last sync 2 min ago
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/reports"
            className="px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm"
          >
            <BarChart3 className="w-3.5 h-3.5 inline mr-1.5" />
            Reports
          </Link>
          <Link
            href="/admissions"
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm"
          >
            Open Admissions CRM
          </Link>
        </div>
      </div>

      {/* 5-Column Core KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KpiCard
          title="Total Students"
          value="482 / 500"
          change="+12 this month"
          isPositive={true}
          icon={Users}
          iconBg="bg-blue-50 text-blue-700"
        />
        <KpiCard
          title="Fee Collection"
          value="₹42.6L"
          change="88.4% collected"
          isPositive={true}
          icon={IndianRupee}
          iconBg="bg-emerald-50 text-emerald-700"
        />
        <KpiCard
          title="Today's Attendance"
          value="96.2%"
          change="457 / 475 present"
          isPositive={true}
          icon={UserCheck}
          iconBg="bg-violet-50 text-violet-700"
        />
        <KpiCard
          title="Staff Present"
          value="48 / 52"
          change="4 on leave"
          isPositive={false}
          icon={GraduationCap}
          iconBg="bg-amber-50 text-amber-700"
        />
        <KpiCard
          title="Pending Dues"
          value="₹5.6L"
          change="23 defaulters"
          isPositive={false}
          icon={AlertTriangle}
          iconBg="bg-rose-50 text-rose-700"
        />
      </div>

      {/* Row 2: Funnel + Attendance Heatmap */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admission Conversion Funnel */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center justify-between">
            <span>Admissions Lead Pipeline</span>
            <span className="text-xs text-slate-500 font-normal flex items-center gap-1">
              <CalendarDays className="w-3.5 h-3.5" /> AY 2026-27
            </span>
          </h3>
          <div className="space-y-3">
            {[
              { stage: "Lead Inflow (Website + Walk-in)", count: 342, pct: 100, color: "bg-blue-500" },
              { stage: "Inquiries Processed", count: 248, pct: 72, color: "bg-indigo-500" },
              { stage: "Entrance Test Conducted", count: 186, pct: 54, color: "bg-violet-500" },
              { stage: "Interview & Document Review", count: 124, pct: 36, color: "bg-amber-500" },
              { stage: "Offer Letters Issued", count: 98, pct: 29, color: "bg-teal-500" },
              { stage: "Final Registration (Fee Paid)", count: 82, pct: 24, color: "bg-emerald-500" },
            ].map((item) => (
              <div key={item.stage} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>{item.stage}</span>
                  <span>{item.count} ({item.pct}%)</span>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance by Grade */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 mb-4">Attendance by Grade</h3>
          <div className="space-y-3">
            {attendanceByGrade.map((g) => (
              <div key={g.grade} className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 w-20">{g.grade}</span>
                <div className="flex-1 mx-3 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      g.pct >= 95 ? "bg-emerald-500" : g.pct >= 90 ? "bg-amber-500" : "bg-rose-500"
                    }`}
                    style={{ width: `${g.pct}%` }}
                  />
                </div>
                <span className={`text-xs font-bold w-12 text-right ${
                  g.pct >= 95 ? "text-emerald-600" : g.pct >= 90 ? "text-amber-600" : "text-rose-600"
                }`}>
                  {g.pct}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Overall Avg</span>
            <span className="font-bold text-emerald-600">95.1%</span>
          </div>
        </div>
      </div>

      {/* Row 3: Recent Transactions + Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fee Transactions */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-slate-900">Recent Fee Transactions</h3>
            <Link href="/fees" className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left text-slate-500 font-semibold border-b border-slate-100">
                  <th className="pb-2 pr-3">Transaction ID</th>
                  <th className="pb-2 pr-3">Student</th>
                  <th className="pb-2 pr-3">Class</th>
                  <th className="pb-2 pr-3 text-right">Amount</th>
                  <th className="pb-2 pr-3">Mode</th>
                  <th className="pb-2 pr-3">Status</th>
                  <th className="pb-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                    <td className="py-2.5 pr-3 font-mono text-slate-600">{tx.id}</td>
                    <td className="py-2.5 pr-3 font-semibold text-slate-800">{tx.student}</td>
                    <td className="py-2.5 pr-3 text-slate-600">{tx.class}</td>
                    <td className="py-2.5 pr-3 text-right font-bold text-slate-900">₹{tx.amount.toLocaleString("en-IN")}</td>
                    <td className="py-2.5 pr-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        tx.mode === "UPI" ? "bg-indigo-100 text-indigo-700" :
                        tx.mode === "NEFT" ? "bg-blue-100 text-blue-700" :
                        tx.mode === "Cash" ? "bg-emerald-100 text-emerald-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {tx.mode}
                      </span>
                    </td>
                    <td className="py-2.5 pr-3">
                      <span className={`flex items-center gap-1 font-medium ${
                        tx.status === "Success" ? "text-emerald-600" :
                        tx.status === "Cleared" ? "text-blue-600" :
                        "text-amber-600"
                      }`}>
                        {tx.status === "Success" || tx.status === "Cleared" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {tx.status}
                      </span>
                    </td>
                    <td className="py-2.5 text-slate-400">{tx.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Academic Performers */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <h3 className="font-bold text-sm text-slate-900 mb-4">Top Academic Performers</h3>
          <div className="space-y-3">
            {topPerformers.map((s) => (
              <div key={s.rank} className="flex items-center gap-3 p-2.5 bg-slate-50 rounded-lg">
                <span className="text-lg">{s.badge}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">{s.name}</p>
                  <p className="text-[10px] text-slate-500">{s.class}</p>
                </div>
                <span className="text-sm font-bold text-indigo-600">{s.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 4: Staff Alerts + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Staff Alerts */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Bell className="w-4 h-4 text-slate-400" /> Staff & System Alerts
            </h3>
            <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded-full">
              {staffAlerts.length} New
            </span>
          </div>
          <div className="space-y-2">
            {staffAlerts.map((a, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg border ${
                a.type === "warning" ? "bg-amber-50/50 border-amber-100" :
                a.type === "leave" ? "bg-violet-50/50 border-violet-100" :
                a.type === "event" ? "bg-blue-50/50 border-blue-100" :
                "bg-slate-50 border-slate-100"
              }`}>
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                  a.type === "warning" ? "bg-amber-500" :
                  a.type === "leave" ? "bg-violet-500" :
                  a.type === "event" ? "bg-blue-500" :
                  "bg-emerald-500"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-800">{a.alert}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900">Admin Quick Actions</h3>
          <div className="space-y-2">
            <Link
              href="/billing"
              className="flex items-center justify-between p-3 bg-violet-50 border border-violet-100 rounded-lg hover:bg-violet-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <div>
                  <span className="block text-xs font-bold text-violet-900">WhatsApp Fee Dispatch</span>
                  <span className="block text-[10px] text-violet-700">Automated rule builder</span>
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
                  <span className="block text-xs font-bold text-emerald-900">Fee Ledger & UPI Tracker</span>
                  <span className="block text-[10px] text-emerald-700">Instant NPCI status</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </Link>
            <Link
              href="/staff"
              className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Landmark className="w-4 h-4 text-blue-600" />
                <div>
                  <span className="block text-xs font-bold text-blue-900">Staff & HR Module</span>
                  <span className="block text-[10px] text-blue-700">Payroll & leave management</span>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
            </Link>
          </div>

          {/* Financial Summary Mini */}
          <div className="p-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg text-white">
            <p className="text-[10px] font-semibold text-slate-400 uppercase mb-2">Monthly Revenue</p>
            <p className="text-lg font-bold">₹18,42,000</p>
            <p className="text-[10px] text-emerald-400 font-medium">↑ 12.3% vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
