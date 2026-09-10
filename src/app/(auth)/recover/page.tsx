"use client";

import { useState } from "react";
import Link from "next/link";
import { KeyRound, ArrowLeft, MessageSquare } from "lucide-react";

export default function RecoverPage() {
  const [identifier, setIdentifier] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="text-center mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto mb-2">
          <KeyRound className="w-5 h-5 text-slate-700" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Forgot Credentials / Account Retrieval
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Recover via registered WhatsApp phone number or school license key
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              WhatsApp Phone Number or License Key
            </label>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="e.g. 9876543210 or GROWCUS-DEMO-2026"
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800 font-mono"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[--color-pay] hover:bg-[--color-pay-light] text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Deliver Account Credentials over WhatsApp</span>
          </button>
        </form>
      ) : (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-2">
          <p className="text-xs font-bold text-emerald-900">
            Credentials Dispatched!
          </p>
          <p className="text-[11px] text-emerald-700">
            Account recovery link and active license details sent via WhatsApp to{" "}
            <strong>{identifier}</strong>.
          </p>
        </div>
      )}

      <div className="mt-6 text-center pt-4 border-t border-slate-100">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Portal Login</span>
        </Link>
      </div>
    </div>
  );
}
