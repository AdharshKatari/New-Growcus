"use client";

import { useState } from "react";
import { MessageSquare, Sparkles, AlertCircle, Play, DollarSign } from "lucide-react";
import { AiActionButton } from "@/components/teacher/AiActionButton";

export default function BillingPage() {
  const [activeRule, setActiveRule] = useState("DUE_3_DAYS");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Automated WhatsApp Billing Trigger Workspace
        </h1>
        <p className="text-xs text-slate-500">
          Cascading notification router rule builder & Meta Cloud API cost gauge
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rule Builder */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 flex items-center justify-between">
            <span>Automated Notification Rules</span>
            <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
              Meta Cloud API v20.0 Active
            </span>
          </h3>

          <div className="space-y-3">
            {[
              { id: "DUE_3_DAYS", name: "3 Days Before Due Date", trigger: "Send WhatsApp template with payment deep-link", active: true },
              { id: "OVERDUE_IMMEDIATE", name: "Immediate Overdue Alert", trigger: "High priority WhatsApp + PWA push fallback", active: true },
              { id: "RECEIPT_SETTLED", name: "Instant Payment Receipt", trigger: "Auto-send digital receipt on NPCI settlement", active: true },
            ].map((rule) => (
              <div
                key={rule.id}
                onClick={() => setActiveRule(rule.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  activeRule === rule.id
                    ? "border-[--color-ai] bg-violet-50/50 shadow-xs"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">{rule.name}</span>
                  <span className="text-[10px] font-bold uppercase text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{rule.trigger}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <AiActionButton
              label="Synthesize & Test Trigger Rule"
              onClick={() => alert("WhatsApp test message dispatched to dev number!")}
            />
          </div>
        </div>

        {/* Live Meta API Cost Gauge */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span>Meta API Cost Gauge</span>
          </h3>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Monthly Utility Messages:</span>
              <span className="font-bold text-slate-800">1,240 / 10,000 Free</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[12.4%]" />
            </div>
            <div className="text-[11px] text-slate-600 flex justify-between">
              <span>Estimated Bill:</span>
              <span className="font-bold text-slate-900">₹0.00 (Tier Free)</span>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs flex gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Cascading router defaults to <strong>PWA Push (Free)</strong> first to protect messaging margins.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
