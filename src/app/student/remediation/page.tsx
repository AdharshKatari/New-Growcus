export default function RemediationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Personalized AI Remediation Plan</h1>
        <p className="text-slate-500 text-sm">Targeted practice micro-modules tailored to your learning gaps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Needs Review</span>
          <h3 className="font-bold text-slate-900 text-lg">Factorization by Splitting the Middle Term</h3>
          <p className="text-sm text-slate-600">You scored 60% on this subtopic in Quiz 2. Watch a 3-minute video breakdown and solve 5 guided problems.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold">Start Remediation</button>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Mastered</span>
          <h3 className="font-bold text-slate-900 text-lg">Linear Equations in Two Variables</h3>
          <p className="text-sm text-slate-600">Scored 95%! Mastery unlocked on 04 Sep 2026.</p>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold" disabled>Mastery Achieved ✓</button>
        </div>
      </div>
    </div>
  );
}
