import Link from 'next/link';

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back, Aarav! 🚀</h1>
          <p className="text-slate-500 text-sm">Class 8-A | Roll No. 01 | House: Blue Dragons</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
          <span className="text-xl">🔥</span>
          <div>
            <p className="text-xs font-bold text-amber-800">12 Day Streak!</p>
            <p className="text-[10px] text-amber-600">Keep learning daily</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl p-5 text-white space-y-4">
          <span className="text-xs font-semibold uppercase bg-white/20 px-2 py-1 rounded-md">Next Assessment</span>
          <h2 className="text-xl font-bold">Physics — Newton's Laws Quiz</h2>
          <p className="text-xs text-indigo-100">Scheduled for Today, 2:00 PM (20 mins, 15 MCQs)</p>
          <Link href="/student/assessment" className="inline-block px-4 py-2 bg-white text-indigo-700 font-bold rounded-lg text-sm">
            Start Assessment →
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
          <h3 className="font-semibold text-slate-900">AI Remediation Plan</h3>
          <p className="text-xs text-slate-500">Based on your last Math test, AI generated 3 practice problems to master Quadratic Factorization.</p>
          <Link href="/student/remediation" className="inline-block text-xs font-bold text-indigo-600 hover:underline">
            View Learning Path →
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-3">
          <h3 className="font-semibold text-slate-900">Homework Tracker</h3>
          <p className="text-xs text-slate-500">2 assignments due this week:</p>
          <ul className="text-xs space-y-1 text-slate-600">
            <li>• Math Chapter 4 (Due Tomorrow)</li>
            <li>• Chemistry Lab Sheet (Due Friday)</li>
          </ul>
          <Link href="/student/homework" className="inline-block text-xs font-bold text-indigo-600 hover:underline">
            Submit Homework →
          </Link>
        </div>
      </div>
    </div>
  );
}
