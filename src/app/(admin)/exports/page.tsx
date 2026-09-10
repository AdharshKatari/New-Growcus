"use client";

import { Download, ShieldCheck, FileSpreadsheet } from "lucide-react";

export default function ExportsPage() {
  const exportDatasets = [
    { name: "Full Student Registry Vault", records: "482 Records", format: "CSV / JSON" },
    { name: "Fee Ledgers & NPCI UPI Records", records: "1,240 Transactions", format: "CSV / Excel" },
    { name: "Faculty Deployment & Workload Logs", records: "34 Teachers", format: "CSV" },
    { name: "Admissions Pipeline CRM History", records: "142 Leads", format: "CSV / JSON" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Data Portability & Export Center
        </h1>
        <p className="text-xs text-slate-500">
          Unencrypted CSV exports — zero vendor lock-in principle (PRD §3.3 ADM-11)
        </p>
      </div>

      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
        <p className="text-xs text-emerald-900 font-medium">
          <strong>Zero Lock-in Guarantee:</strong> All institutional data remains 100% portable. Export raw unencrypted CSVs anytime with single-click decryption keys.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exportDatasets.map((d, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="font-bold text-xs text-slate-900">{d.name}</h4>
              <p className="text-[11px] text-slate-500 mt-1">{d.records} • Format: {d.format}</p>
            </div>
            <button
              onClick={() => alert(`Exporting ${d.name} as CSV...`)}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
