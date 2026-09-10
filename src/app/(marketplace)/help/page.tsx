"use client";

import { useState } from "react";
import { MessageSquare, CheckCircle2 } from "lucide-react";

export default function HelpPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Public Help Desk & Direct Support Node
        </h1>
        <p className="text-xs text-slate-500">
          Support ticketing form for parents and school administrators (PRD MP-11)
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
          <input type="text" placeholder="e.g. Ramesh Kumar" className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Mobile Number</label>
          <input type="tel" placeholder="98765 43210" className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg font-mono" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Support Category</label>
          <select className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg font-semibold">
            <option>Common Admission Form (CAF) Inquiry</option>
            <option>Fee Payment / UPI Settlement Support</option>
            <option>School Listing Verification</option>
            <option>School ERP Onboarding</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Issue Details</label>
          <textarea rows={4} placeholder="Describe your inquiry..." className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg" />
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="w-full py-3 bg-[--color-pay] text-white font-bold text-xs rounded-lg shadow-sm"
        >
          Submit Support Ticket
        </button>

        {submitted && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold rounded-lg text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Ticket Submitted! Support Reference ID: #TKT-8812.</span>
          </div>
        )}
      </div>
    </div>
  );
}
