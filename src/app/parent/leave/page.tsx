export default function ParentLeavePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Digital Leave Application</h1>
        <p className="text-slate-500 text-sm">Apply for leave, track approval status & upload medical certificates.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Apply New Leave</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Start Date</label>
            <input type="date" className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">End Date</label>
            <input type="date" className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Reason for Leave</label>
          <textarea rows={3} className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50" placeholder="State reason..." />
        </div>
        <button className="px-5 py-2.5 bg-indigo-600 text-white font-medium text-sm rounded-lg hover:bg-indigo-700">
          Submit Leave Application
        </button>
      </div>
    </div>
  );
}
