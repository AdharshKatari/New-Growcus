import Link from "next/link";
import {
  Building2,
  Users,
  CreditCard,
  CheckCircle2,
  BookOpen,
  Bus,
  FileSpreadsheet,
  MessageSquare,
  Bot,
  ShieldCheck,
  Award,
  Zap,
  BarChart3,
  Calendar,
  Layers,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { GrowcusLogo } from "@/components/brand/GrowcusLogo";

const erpModules = [
  {
    icon: Building2,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    title: "1. Multi-Tenant Campus Administration",
    desc: "Single dashboard for managing multiple school branches, academic calendars, student enrollment rosters, and staff hierarchy with role-based access control.",
    highlights: ["Multi-Branch Centralized Treasury", "Role-Based Access (RBAC)", "Custom School Domain & Branding"],
  },
  {
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    title: "2. NPCI UPI Fee Collector & Tally Ledger",
    desc: "Automated fee dispatch via WhatsApp with instant NPCI UPI payment links (GPay, PhonePe, Paytm). Direct bank settlement and zero manual reconciliation.",
    highlights: ["Automated WhatsApp Fee Link", "Instant NPCI Settlement", "Keyboard-Navigable Cash Ledger Grid"],
  },
  {
    icon: Users,
    color: "bg-purple-50 text-purple-700 border-purple-200",
    title: "3. PWA Offline Attendance Engine",
    desc: "Mark morning attendance inside concrete classroom dead-zones without internet. Payload automatically syncs silently back to database upon re-connection.",
    highlights: ["Dead-Zone Offline IndexedDB", "Background Sync Worker", "Automated SMS/WhatsApp Absent Alerts"],
  },
  {
    icon: Bot,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    title: "4. Gemini AI Lesson & Remarks Co-Pilot",
    desc: "Generate personalized student progress remarks and structured CBSE lesson plans in seconds with local SLM and Gemini AI adapter.",
    highlights: ["Zero-Cost Local Inference", "One-Click Report Card Remarks", "Custom Lesson Plan Builder"],
  },
  {
    icon: Bus,
    color: "bg-cyan-50 text-cyan-700 border-cyan-200",
    title: "5. Real-Time GPS Bus Fleet Manager",
    desc: "Live GPS bus location tracking for parents and transport managers with automated pickup/drop alerts and route optimization.",
    highlights: ["Live Bus Map Tracking", "Driver Speed & Emergency Alerts", "Automated Transport Fee Billing"],
  },
  {
    icon: FileSpreadsheet,
    color: "bg-rose-50 text-rose-700 border-rose-200",
    title: "6. CBSE / ICSE Report Card Generator",
    desc: "Design compliant report cards with automated grade calculation (A1-E), attendance percentage, subject co-scholastic rubrics, and bulk PDF printing.",
    highlights: ["1-Click Bulk PDF Generation", "Automated Grade Percentile", "CBSE/ICSE/IB Compliant Templates"],
  },
  {
    icon: MessageSquare,
    color: "bg-indigo-50 text-indigo-700 border-indigo-200",
    title: "7. Cascading Notification Router",
    desc: "Legal TRAI DLT-registered A2P SMS + FCM Push router that falls back automatically if background notifications are dropped.",
    highlights: ["TRAI DLT Template Compliant", "Zero Grey Modem Risk", "FCM + SMS Fallback Engine"],
  },
  {
    icon: BarChart3,
    color: "bg-teal-50 text-teal-700 border-teal-200",
    title: "8. Predictive Cashflow Analytics",
    desc: "Machine-learning cashflow forecasting that detects payment velocity drops, tuition fee concessions, and financial anomaly triggers.",
    highlights: ["Historical Delay Spike Detection", "Anomaly Flag Escalation", "Executive Revenue Dashboard"],
  },
];

const comparisonMatrix = [
  { feature: "Onboarding & Setup Time", growcus: "24 Hours (Done by us)", legacy: "2 to 3 Months" },
  { feature: "Classroom Offline Attendance", growcus: "PWA Offline IndexedDB", legacy: "Requires Active Internet" },
  { feature: "WhatsApp Fee Payment Links", growcus: "Automated NPCI Direct UPI", legacy: "Manual Receipts / Cash Only" },
  { feature: "AI Lesson & Remarks Generator", growcus: "Integrated Gemini Co-Pilot", legacy: "Not Available" },
  { feature: "TRAI Compliance & DLT Router", growcus: "100% TRAI Compliant A2P SMS", legacy: "Risk of SIM Box Blocking" },
  { feature: "Parent Mobile App & Portal", growcus: "Included Free (PWA)", legacy: "Extra Paid Add-on" },
];

export default function FeaturesAndModulesPage() {
  return (
    <div className="space-y-12 max-w-6xl mx-auto py-4">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full border border-blue-200">
          ⚡ Complete School Operating System
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Everything Your School Needs to Run on Autopilot
        </h1>
        <p className="text-sm md:text-base text-slate-600">
          Growcus replaces 6+ disconnected software tools with a single unified, multi-portal enterprise platform.
        </p>
      </div>

      {/* 8 Core Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {erpModules.map((mod) => {
          const Icon = mod.icon;
          return (
            <div
              key={mod.title}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${mod.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900">{mod.title}</h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{mod.desc}</p>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                {mod.highlights.map((h, i) => (
                  <span key={i} className="px-2.5 py-0.5 bg-slate-100 rounded-md border border-slate-200/60 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Matrix vs Legacy ERPs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-md space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Why Schools Switch to Growcus</h2>
          <p className="text-xs text-slate-500">
            Compare Growcus against 10-year-old legacy school management software
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                <th className="pb-3 text-left">Feature / Capability</th>
                <th className="pb-3 text-left text-blue-700 font-bold bg-blue-50/50 p-2 rounded-t-lg">Growcus Smart ERP</th>
                <th className="pb-3 text-left text-slate-400">Legacy School ERPs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50">
                  <td className="py-3 font-bold text-slate-800">{row.feature}</td>
                  <td className="py-3 font-extrabold text-blue-700 bg-blue-50/30 p-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{row.growcus}</span>
                  </td>
                  <td className="py-3 text-slate-500">{row.legacy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Box (Light Theme) */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 text-slate-900 border border-blue-200 rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Ready to Upgrade Your School Administration?</h2>
          <p className="text-xs text-slate-600 mt-1">
            Get a 14-day risk-free demo with free data migration for your institution.
          </p>
        </div>
        <Link
          href="/pricing#book-demo"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shrink-0 flex items-center gap-2"
        >
          <span>Book Free School Demo</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
