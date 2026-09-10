export default function DiaryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Digital School Diary & Remarks</h1>
        <p className="text-slate-500 text-sm">Daily homework assignments, teacher notes & acknowledgment logs.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Diary Entries for 10 Sep 2026</h2>
        <div className="p-4 bg-slate-50 rounded-lg space-y-2">
          <p className="text-xs font-semibold text-indigo-600">Mathematics Homework</p>
          <p className="text-sm font-medium text-slate-800">Solve Exercise 4.2 Questions 1 to 8 in homework register.</p>
          <button className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-semibold">Acknowledge Read ✓</button>
        </div>
      </div>
    </div>
  );
}
