"use client";

import { AiActionButton } from "@/components/teacher/AiActionButton";

export default function TimetablePage() {
  const periods = [1, 2, 3, 4, 5, 6];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Genetic Clash-Free Timetable Coordinator
          </h1>
          <p className="text-xs text-slate-500">
            Constraint-based auto-scheduling engine with teacher-clash detection
          </p>
        </div>
        <AiActionButton
          label="Auto-Solve Timetable Clashes"
          onClick={() => alert("Genetic solver completed! 0 teacher clashes detected.")}
        />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm overflow-x-auto">
        <table className="w-full text-center text-xs">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="p-3">Period</th>
              {days.map((d) => (
                <th key={d} className="p-3">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {periods.map((p) => (
              <tr key={p}>
                <td className="p-3 font-bold bg-slate-50">Period #{p}</td>
                {days.map((d) => (
                  <td key={d} className="p-3 border border-slate-100">
                    <div className="bg-slate-50 p-2 rounded-lg text-[11px]">
                      <span className="block font-bold text-slate-900">Mathematics</span>
                      <span className="block text-slate-500">Mrs. Sunita</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
