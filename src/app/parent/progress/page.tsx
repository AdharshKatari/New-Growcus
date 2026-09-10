export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Child Progress & Report Cards</h1>
        <p className="text-slate-500 text-sm">Holistic growth trajectory, subject grades & teacher remarks.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Mid-Term Academic Summary (AY 2026-27)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg text-center">
            <p className="text-xs font-semibold text-slate-500 uppercase">Overall Percentage</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">89.4%</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg text-center">
            <p className="text-xs font-semibold text-slate-500 uppercase">Grade Point Average</p>
            <p className="text-3xl font-bold text-indigo-600 mt-1">9.2 CGPA</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg text-center">
            <p className="text-xs font-semibold text-slate-500 uppercase">Attendance Record</p>
            <p className="text-3xl font-bold text-emerald-600 mt-1">96%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
