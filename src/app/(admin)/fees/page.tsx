"use client";

import { useState } from "react";
import { FeeStatusPill } from "@/components/admin/FeeStatusPill";
import { formatCurrency } from "@/lib/utils";
import { Search, Download, CreditCard, RefreshCw } from "lucide-react";

export default function FeesPage() {
  const [filter, setFilter] = useState("ALL");

  const transactions = [
    { id: "fee-101", student: "Aarav Sharma", class: "Class 10A", due: 25000, paid: 25000, status: "SETTLED", txn: "UPI-98712384" },
    { id: "fee-102", student: "Ananya Patel", class: "Class 8B", due: 22000, paid: 0, status: "PENDING", txn: "-" },
    { id: "fee-103", student: "Rohan Gupta", class: "Class 9A", due: 24000, paid: 12000, status: "PENDING", txn: "UPI-44312988" },
    { id: "fee-104", student: "Diya Verma", class: "Class 5C", due: 18000, paid: 0, status: "FAILED", txn: "UPI-FAILED-991" },
    { id: "fee-105", student: "Karan Singh", class: "Class 11A", due: 30000, paid: 30000, status: "SETTLED", txn: "UPI-11029834" },
  ];

  const filtered = filter === "ALL" ? transactions : transactions.filter((t) => t.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Real-Time Fee Management & Ledger Tracker
          </h1>
          <p className="text-xs text-slate-500">
            Instant NPCI UPI settlement tracker with multi-status ledger pills
          </p>
        </div>
        <button
          onClick={() => alert("Fee ledger exported as CSV!")}
          className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
        >
          <Download className="w-4 h-4" />
          <span>Export Ledger CSV</span>
        </button>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2">
        {["ALL", "SETTLED", "PENDING", "FAILED"].map((st) => (
          <button
            key={st}
            onClick={() => setFilter(st)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filter === st
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Fee Ledger Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3.5">Student Name</th>
              <th className="p-3.5">Class/Section</th>
              <th className="p-3.5">Amount Due</th>
              <th className="p-3.5">Amount Paid</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5">UPI Ref ID</th>
              <th className="p-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {filtered.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/80">
                <td className="p-3.5 font-bold text-slate-900">{row.student}</td>
                <td className="p-3.5 text-slate-600">{row.class}</td>
                <td className="p-3.5 font-semibold text-slate-900">{formatCurrency(row.due)}</td>
                <td className="p-3.5 text-slate-700">{formatCurrency(row.paid)}</td>
                <td className="p-3.5">
                  <FeeStatusPill status={row.status} />
                </td>
                <td className="p-3.5 font-mono text-slate-500 text-[11px]">{row.txn}</td>
                <td className="p-3.5 text-right">
                  <button
                    onClick={() => alert(`Triggered manual WhatsApp reminder for ${row.student}`)}
                    className="text-[11px] font-bold text-violet-700 hover:underline"
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
  );
}
