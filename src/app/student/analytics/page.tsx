export default function StudentAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Personal Growth & Skill Radar</h1>
        <p className="text-slate-500 text-sm">Subject-wise performance, learning speed & retention metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Mathematics</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">92%</p>
          <span className="text-xs text-emerald-600 font-semibold">Top 5% in Class</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Physics</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">88%</p>
          <span className="text-xs text-emerald-600 font-semibold">Above Class Average</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Chemistry</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">79%</p>
          <span className="text-xs text-amber-600 font-semibold">Focus Area</span>
        </div>
      </div>
    </div>
  );
}
