"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";

export default function CafApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Common Admission Application Engine (CAF)
        </h1>
        <p className="text-xs text-slate-500">
          4-step wizard: Student Info → Parent KYC → Docs → Selections (PRD MP-05)
        </p>
      </div>

      {/* Progress Wizard Header */}
      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600">
        <span className={step >= 1 ? "text-emerald-600 font-extrabold" : ""}>1. Student Info</span>
        <span>→</span>
        <span className={step >= 2 ? "text-emerald-600 font-extrabold" : ""}>2. Parent KYC</span>
        <span>→</span>
        <span className={step >= 3 ? "text-emerald-600 font-extrabold" : ""}>3. Docs</span>
        <span>→</span>
        <span className={step >= 4 ? "text-emerald-600 font-extrabold" : ""}>4. Select Schools</span>
      </div>

      {!submitted ? (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
          {step === 1 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900">Step 1: Student Information</h3>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Student Full Name</label>
                <input type="text" placeholder="e.g. Aarav Sharma" className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Grade Seeking Admission</label>
                <select className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg font-semibold">
                  <option>Grade 1</option>
                  <option>Grade 6</option>
                  <option>Grade 11 (CBSE Science)</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900">Step 2: Parent KYC & WhatsApp Contact</h3>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Parent Full Name</label>
                <input type="text" placeholder="e.g. Rajesh Sharma" className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp Mobile Number</label>
                <input type="tel" placeholder="98112 34567" className="w-full p-2.5 text-xs bg-slate-50 border rounded-lg font-mono" />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900">Step 3: Document Uploads</h3>
              <div className="border-2 border-dashed p-6 text-center text-xs text-slate-500 rounded-lg bg-slate-50">
                Upload Birth Certificate, Aadhaar & Transfer Certificate
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-slate-900">Step 4: Select Target Schools</h3>
              <p className="text-xs text-slate-500">Selected: Growcus Model International Academy</p>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="px-4 py-2 bg-slate-100 text-xs font-bold rounded-lg">
                Back
              </button>
            )}
            {step < 4 ? (
              <button onClick={() => setStep(step + 1)} className="ml-auto px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-lg">
                Next Step
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="ml-auto px-6 py-2.5 bg-[--color-pay] text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Submit Common Application Form
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
          <h3 className="font-bold text-base text-emerald-900">Application Submitted via CAF Engine!</h3>
          <p className="text-xs text-emerald-700">Application ID: #CAF-2026-9812. Routed directly to Admin Kanban CRM.</p>
        </div>
      )}
    </div>
  );
}
