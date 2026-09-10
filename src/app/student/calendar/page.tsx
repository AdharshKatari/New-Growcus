export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Academic & Exam Calendar</h1>
        <p className="text-slate-500 text-sm">Timetable, examination dates, assignment deadlines & school holidays.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Upcoming Events (September 2026)</h2>
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800 text-sm">Mid-Term Examination Starts</p>
              <p className="text-xs text-slate-500">18 Sep 2026 — All Subjects</p>
            </div>
            <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded text-xs font-semibold">Exams</span>
          </div>
        </div>
      </div>
    </div>
  );
}
