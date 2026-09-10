"use client";

import React, { useState, useRef } from "react";
import { formatCurrency } from "@/lib/utils";
import { CheckCircle2, ArrowRight, CornerDownLeft } from "lucide-react";

export interface LedgerRow {
  id: string;
  rollNumber: number;
  name: string;
  amountDue: number;
  amountPaid: string;
  status?: "PENDING" | "SETTLED" | "FAILED";
}

export function FeeLedgerGrid({ initialRows }: { initialRows: LedgerRow[] }) {
  const [rows, setRows] = useState<LedgerRow[]>(initialRows);
  const [savedRowId, setSavedRowId] = useState<string | null>(null);
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleInputChange = (id: string, value: string) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, amountPaid: value } : row))
    );
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    rowId: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const targetRow = rows.find((r) => r.id === rowId);
      if (!targetRow) return;

      // 🚀 Asynchronous optimistic UI save operation pipeline
      try {
        await fetch("/api/v1/fees/reconcile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ledgerId: rowId,
            cashCollected: parseFloat(targetRow.amountPaid || "0"),
          }),
        });
        setSavedRowId(rowId);
        setTimeout(() => setSavedRowId(null), 2000);
      } catch (err) {
        console.error("Manual transaction fallback triggered:", err);
      }

      // Micro-interaction rule: Auto-route focus directly to the next vertical cell down
      const nextRow = rows[index + 1];
      if (nextRow) {
        const nextInput = inputRefs.current[`input-${nextRow.id}`];
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white card-elevated shadow-sm">
      <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
        <div>
          <h3 className="font-black text-sm uppercase tracking-wider flex items-center gap-2">
            <span>High-Speed Keyboard Cash Counter</span>
            <span className="text-[10px] bg-blue-500/30 text-blue-300 border border-blue-400/40 px-2 py-0.5 rounded-full font-bold">
              Tab / Enter Enabled
            </span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">
            Press <kbd className="bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-200">Enter ↵</kbd> to save entry and jump to next student automatically
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
          <CornerDownLeft className="w-4 h-4 text-emerald-400" />
          <span>Zero Mouse Latency</span>
        </div>
      </div>

      <table className="w-full text-left border-collapse text-sm text-slate-900">
        <thead className="bg-slate-50/90 font-extrabold text-slate-700 uppercase tracking-wider text-xs border-b border-slate-200">
          <tr>
            <th className="p-4">Roll</th>
            <th className="p-4">Student Name</th>
            <th className="p-4">Amount Due (INR)</th>
            <th className="p-4 text-right">Collect Cash Entry (Press Enter ↵)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 font-medium">
          {rows.map((row, index) => {
            const isSaved = savedRowId === row.id;
            return (
              <tr
                key={row.id}
                className={`transition-colors hover:bg-blue-50/40 ${
                  isSaved ? "bg-emerald-50/80" : ""
                }`}
              >
                <td className="p-4 font-bold text-slate-500">{row.rollNumber}</td>
                <td className="p-4 font-black text-slate-900 flex items-center gap-2">
                  <span>{row.name}</span>
                  {isSaved && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full animate-fade-in">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Saved
                    </span>
                  )}
                </td>
                <td className="p-4 text-slate-800 font-black font-mono">
                  {formatCurrency(row.amountDue)}
                </td>
                <td className="p-4 text-right">
                  <input
                    ref={(el) => {
                      inputRefs.current[`input-${row.id}`] = el;
                    }}
                    type="number"
                    className="w-44 px-3.5 py-2 text-right font-mono font-bold text-slate-900 border border-slate-300 bg-slate-50 rounded-xl focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 outline-none transition-all shadow-xs"
                    value={row.amountPaid}
                    onChange={(e) => handleInputChange(row.id, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index, row.id)}
                    placeholder="0.00"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
