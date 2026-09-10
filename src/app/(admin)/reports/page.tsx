import {
  FileText,
  Download,
  Printer,
  Calendar,
  Filter,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Building2,
  Users,
  CreditCard,
  PieChart,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";

/* ───────────── Demo Report Modules ───────────── */

const reportCategories = [
  {
    category: "Financial & Fee Reports",
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    reports: [
      { id: "REP-FIN-01", title: "Quarterly Fee Realization Ledger", desc: "Detailed breakdown of collected vs outstanding tuition, transport, & lab fees", frequency: "Monthly / Quarterly", type: "PDF & Excel" },
      { id: "REP-FIN-02", title: "Defaulters & Dues Escalation List", desc: "List of accounts with overdue balances exceeding 30 days for SMS dispatch", frequency: "Weekly", type: "CSV / WhatsApp" },
      { id: "REP-FIN-03", title: "Daily Cash Counter Reconciliation", desc: "Point-of-sale receipt log for offline cash and cheque collections", frequency: "Daily", type: "Printable PDF" },
    ]
  },
  {
    category: "Academic & CBSE Audit Reports",
    icon: BarChart3,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    reports: [
      { id: "REP-ACA-01", title: "CBSE / State Board Compliance Audit", desc: "Mandatory student enrollment roster & teacher qualification ratio report", frequency: "Annual", type: "Official XML/PDF" },
      { id: "REP-ACA-02", title: "Gradebook Class Performance Distribution", desc: "Class-wise mean, median, standard deviation of exam scores", frequency: "Post-Exam", type: "Excel Data Sheet" },
      { id: "REP-ACA-03", title: "Student Attendance & Drop-out Warning Log", desc: "Students with <75% attendance triggering regulatory review", frequency: "Monthly", type: "PDF Audit" },
    ]
  },
  {
    category: "Operational & HR Payroll Reports",
    icon: Building2,
    color: "bg-violet-50 text-violet-700 border-violet-200",
    reports: [
      { id: "REP-HR-01", title: "Staff Monthly Attendance & Salary Ledger", desc: "Biometric biometric logs, leave balance deductions, and net payout statements", frequency: "Monthly", type: "Bank Salary Format" },
      { id: "REP-HR-02", title: "Transport Fleet & Route Efficiency Analysis", desc: "Fuel consumption, GPS route adherence, and bus capacity utilization", frequency: "Monthly", type: "PDF Summary" },
    ]
  }
];

const recentGeneratedReports = [
  { name: "Q3_Fee_Collection_Summary_2026.pdf", date: "Today, 11:30 AM", size: "2.4 MB", status: "Ready", category: "Financial" },
  { name: "Class_10_CBSE_Board_Enrollment_List.xlsx", date: "Yesterday, 4:15 PM", size: "840 KB", status: "Ready", category: "Academic" },
  { name: "Staff_Attendance_August_2026.pdf", date: "05 Sep 2026", size: "1.8 MB", status: "Ready", category: "HR Payroll" },
  { name: "Transport_Route_12_GPS_Audit.pdf", date: "01 Sep 2026", size: "3.1 MB", status: "Archived", category: "Operations" },
];

export default function ExecutiveReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Institutional Reports & Compliance Hub
          </h1>
          <p className="text-xs text-slate-500">
            Generate, schedule, and export statutory audit & administrative reports
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/exports"
            className="px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Data Exporter
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">Reports Generated This Month</p>
            <p className="text-xl font-bold text-slate-900">142 PDF / Excel</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">CBSE Compliance Audit</p>
            <p className="text-xl font-bold text-emerald-600">100% Certified</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-violet-50 text-violet-600 rounded-lg">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500">Scheduled Auto-Reports</p>
            <p className="text-xl font-bold text-slate-900">8 Active Crons</p>
          </div>
        </div>
      </div>

      {/* Report Categories Grid */}
      <div className="space-y-6">
        {reportCategories.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <div key={cat.category} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <div className={`p-2 rounded-lg border ${cat.color}`}>
                  <CatIcon className="w-4 h-4" />
                </div>
                <h2 className="font-bold text-sm text-slate-900">{cat.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cat.reports.map((rep) => (
                  <div
                    key={rep.id}
                    className="p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 rounded-xl transition-all flex flex-col justify-between space-y-3 group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-slate-400 mb-1">
                        <span>{rep.id}</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">
                          {rep.frequency}
                        </span>
                      </div>
                      <h3 className="font-bold text-xs text-slate-900 group-hover:text-blue-700 transition-colors">
                        {rep.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        {rep.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-xs">
                      <span className="text-[10px] font-medium text-slate-400">{rep.type}</span>
                      <button
                        onClick={() => alert(`Generating ${rep.title}... Download will start in a moment.`)}
                        className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-[11px] flex items-center gap-1 transition-all"
                      >
                        <Download className="w-3 h-3" />
                        Generate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Downloads & Exports Table */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h2 className="font-bold text-sm text-slate-900 mb-4 flex items-center justify-between">
          <span>Recently Generated Reports Archive</span>
          <span className="text-xs text-slate-500 font-normal">Stored for 90 Days</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-slate-500 font-semibold border-b border-slate-100">
                <th className="pb-2 pr-3">Document Name</th>
                <th className="pb-2 pr-3">Category</th>
                <th className="pb-2 pr-3">Generated At</th>
                <th className="pb-2 pr-3">File Size</th>
                <th className="pb-2 pr-3">Status</th>
                <th className="pb-2 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentGeneratedReports.map((file, idx) => (
                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="py-2.5 pr-3 font-semibold text-slate-800 flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{file.name}</span>
                  </td>
                  <td className="py-2.5 pr-3 text-slate-600">{file.category}</td>
                  <td className="py-2.5 pr-3 text-slate-500">{file.date}</td>
                  <td className="py-2.5 pr-3 font-mono text-slate-500">{file.size}</td>
                  <td className="py-2.5 pr-3">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {file.status}
                    </span>
                  </td>
                  <td className="py-2.5 text-right">
                    <button
                      onClick={() => alert(`Downloading ${file.name}`)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
