export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">PTM & Teacher Appointments</h1>
        <p className="text-slate-500 text-sm">Schedule 1-on-1 meeting slots with class & subject teachers.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Upcoming PTM Meeting</h2>
        <div className="p-4 bg-indigo-50 rounded-lg flex justify-between items-center">
          <div>
            <p className="font-bold text-indigo-900">Class Teacher Meeting — Meera Sharma</p>
            <p className="text-xs text-indigo-700">Saturday, 16 Sep 2026 | Slot: 10:30 AM - 10:45 AM</p>
          </div>
          <span className="px-3 py-1 bg-indigo-600 text-white rounded text-xs font-semibold">Confirmed Slot</span>
        </div>
      </div>
    </div>
  );
}
