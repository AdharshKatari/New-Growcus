"use client";

import { useState } from "react";
import { FeeStatusPill } from "@/components/admin/FeeStatusPill";
import { FeeLedgerGrid } from "@/components/admin/FeeLedgerGrid";
import { formatCurrency } from "@/lib/utils";
import { Download, Keyboard, ShieldAlert } from "lucide-react";

export default function FeesPage() {
  const [filter, setFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState<"tracker" | "counter">("counter");

  const transactions = [
    { id: "fee-101", student: "Aarav Sharma", class: "Class 10A", due: 25000, paid: 25000, status: "SETTLED", txn: "UPI-98712384" },
    { id: "fee-102", student: "Ananya Patel", class: "Class 8B", due: 22000, paid: 0, status: "PENDING", txn: "-" },
    { id: "fee-103", student: "Rohan Gupta", class: "Class 9A", due: 24000, paid: 12000, status: "PENDING", txn: "UPI-44312988" },
    { id: "fee-104", student: "Diya Verma", class: "Class 5C", due: 18000, paid: 0, status: "FAILED", txn: "UPI-FAILED-991" },
    { id: "fee-105", student: "Karan Singh", class: "Class 11A", due: 30000, paid: 30000, status: "SETTLED", txn: "UPI-11029834" },
  ];

  const ledgerRows = [
    { id: "row-1", rollNumber: 101, name: "Aarav Sharma (Class 10A)", amountDue: 25000, amountPaid: "25000", status: "SETTLED" as const },
    { id: "row-2", rollNumber: 102, name: "Ananya Patel (Class 8B)", amountDue: 22000, amountPaid: "0", status: "PENDING" as const },
    { id: "row-3", rollNumber: 103, name: "Rohan Gupta (Class 9A)", amountDue: 24000, amountPaid: "12000", status: "PENDING" as const },
    { id: "row-4", rollNumber: 104, name: "Diya Verma (Class 5C)", amountDue: 18000, amountPaid: "0", status: "PENDING" as const },
    { id: "row-5", rollNumber: 105, name: "Karan Singh (Class 11A)", amountDue: 30000, amountPaid: "30000", status: "SETTLED" as const },
    { id: "row-6", rollNumber: 106, name: "Meera Reddy (Class 7A)", amountDue: 21000, amountPaid: "0", status: "PENDING" as const },
  ];

  const filtered = filter === "ALL" ? transactions : transactions.filter((t) => t.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Fee Management & Cash Reconciler
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-0.5">
            Instant NPCI UPI settlement tracker & high-speed keyboard cash counter
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex text-xs font-bold">
            <button
              onClick={() => setViewMode("counter")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "counter"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Keyboard className="w-3.5 h-3.5 inline mr-1" />
              <span>Cash Counter</span>
            </button>
            <button
              onClick={() => setViewMode("tracker")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "tracker"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>UPI Tracker</span>
            </button>
          </div>
          <button
            onClick={() => alert("Fee ledger exported as CSV!")}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-extrabold rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {viewMode === "counter" ? (
        <FeeLedgerGrid initialRows={ledgerRows} />
      ) : (
        <div className="space-y-4">
          {/* Filter Chips */}
          <div className="flex gap-2">
            {["ALL", "SETTLED", "PENDING", "FAILED"].map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filter === st
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Fee Ledger Table */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden card-elevated shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/90 text-slate-700 font-extrabold border-b border-slate-200 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Class/Section</th>
                  <th className="p-4">Amount Due</th>
                  <th className="p-4">Amount Paid</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">UPI Ref ID</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filtered.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80">
                    <td className="p-4 font-black text-slate-900">{row.student}</td>
                    <td className="p-4 text-slate-600 font-semibold">{row.class}</td>
                    <td className="p-4 font-black text-slate-900">{formatCurrency(row.due)}</td>
                    <td className="p-4 text-slate-700 font-bold">{formatCurrency(row.paid)}</td>
                    <td className="p-4">
                      <FeeStatusPill status={row.status} />
                    </td>
                    <td className="p-4 font-mono text-slate-500 text-[11px] font-bold">{row.txn}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => alert(`Triggered manual WhatsApp reminder for ${row.student}`)}
                        className="text-xs font-extrabold text-violet-700 hover:underline"
                      >
                        Send Reminder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
