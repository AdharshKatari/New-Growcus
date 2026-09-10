export default function ParentTransportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Live Transport Tracking</h1>
        <p className="text-slate-500 text-sm">Real-time GPS bus location & ETA updates.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-slate-900">Bus Route #12 — DLF Phase 3 Pickup</h2>
            <p className="text-xs text-slate-500">Driver: Ramesh Kumar (+91 98765 43210)</p>
          </div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">In Transit</span>
        </div>

        <div className="h-64 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
          <p className="text-slate-500 font-medium text-sm">📍 Interactive Bus GPS Map Component Loading...</p>
        </div>
      </div>
    </div>
  );
}
