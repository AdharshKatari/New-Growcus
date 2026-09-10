export default function CompliancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Board Compliance & Report Card Builder
        </h1>
        <p className="text-xs text-slate-500">
          Pre-certified CBSE, ICSE, and State Board official templates
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { board: "CBSE", title: "CCE Continuous Assessment Template", status: "Pre-Certified 2026" },
          { board: "ICSE", title: "CISCE Comprehensive Progress Report", status: "Pre-Certified 2026" },
          { board: "STATE", title: "State Board Official Mark Ledger", status: "Pre-Certified 2026" },
        ].map((b) => (
          <div key={b.board} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <span className="px-2.5 py-0.5 bg-slate-900 text-white font-bold text-[10px] rounded-md uppercase">
              {b.board}
            </span>
            <h3 className="font-bold text-sm text-slate-900">{b.title}</h3>
            <p className="text-xs text-emerald-600 font-semibold">{b.status}</p>
            <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition-colors">
              Configure Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
