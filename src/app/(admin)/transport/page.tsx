export default function TransportPage() {
  const routes = [
    { route: "Route #12 (North Sector)", bus: "KA-01-EA-1234", driver: "Sohan Lal", status: "EN_ROUTE", eta: "12 Mins" },
    { route: "Route #05 (South Sector)", bus: "KA-01-EA-5678", driver: "Ramesh Singh", status: "STOPPED", eta: "At Campus" },
    { route: "Route #08 (East Ring Road)", bus: "KA-01-EA-9101", driver: "Gurpreet Singh", status: "EN_ROUTE", eta: "5 Mins" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Transport, Fleet & Smart Route Hub
        </h1>
        <p className="text-xs text-slate-500">
          Live GPS fleet tracking and student bus-pass assignment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900 text-white rounded-xl p-5 h-80 flex flex-col justify-between relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-center z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Live GPS Fleet Overlay</span>
            <span className="text-[10px] bg-slate-800 px-2 py-1 rounded">Satellite Active</span>
          </div>
          <div className="text-center z-10 my-auto">
            <p className="text-sm font-semibold text-slate-300">Map GPS Simulator Active</p>
            <p className="text-xs text-slate-500 mt-1">3 Active Buses currently transmitting telemetry</p>
          </div>
          <div className="flex justify-between text-xs text-slate-400 z-10">
            <span>Lat: 12.9716° N</span>
            <span>Long: 77.5946° E</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <h3 className="font-bold text-sm text-slate-900">Active Bus Fleet</h3>
          <div className="space-y-3">
            {routes.map((r, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex justify-between text-xs font-bold">
                  <span>{r.route}</span>
                  <span className="text-emerald-600">{r.eta}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">{r.bus} — Driver: {r.driver}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
