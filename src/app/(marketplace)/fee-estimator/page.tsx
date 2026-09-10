"use client";

import { useState } from "react";
import { formatCurrency } from "@/lib/utils";

export default function FeeEstimatorPage() {
  const [grade, setGrade] = useState("Class 10");
  const [transport, setTransport] = useState(true);
  const [uniform, setUniform] = useState(true);

  const baseTuition = 85000;
  const transportFee = transport ? 25000 : 0;
  const uniformFee = uniform ? 8000 : 0;
  const total = baseTuition + transportFee + uniformFee;

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Hidden Fee & Uniform/Book Cost Estimator
        </h1>
        <p className="text-xs text-slate-500">
          True-cost-of-ownership calculator (PRD MP-08)
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4 text-xs">
        <div>
          <label className="block font-bold text-slate-700 mb-1">Select Grade Level</label>
          <select value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full p-2.5 bg-slate-50 border rounded-lg font-semibold">
            <option>Class 1</option>
            <option>Class 5</option>
            <option>Class 10</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={transport} onChange={(e) => setTransport(e.target.checked)} />
            <span>Include Campus Bus Transport ({formatCurrency(25000)})</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={uniform} onChange={(e) => setUniform(e.target.checked)} />
            <span>Include Books, Uniforms & Lab Kits ({formatCurrency(8000)})</span>
          </label>
        </div>

        <div className="pt-4 border-t flex justify-between items-center text-sm font-bold">
          <span>Estimated Annual Total:</span>
          <span className="text-lg text-emerald-600 font-extrabold">{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );
}
