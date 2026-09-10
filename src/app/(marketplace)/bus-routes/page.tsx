export default function BusRoutesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Interactive Bus Route Tracker & Simulator
        </h1>
        <p className="text-xs text-slate-500">
          Map utility for transit-time simulation from home locality to school campus (PRD MP-07)
        </p>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-8 h-80 flex flex-col justify-between shadow-sm relative">
        <span className="text-xs font-bold text-emerald-400 uppercase">Transit Time Simulator</span>
        <div className="text-center my-auto">
          <p className="text-3xl font-extrabold">Estimated Transit: 18 Mins</p>
          <p className="text-xs text-slate-400 mt-1">Route: HSR Layout Sector 1 → Growcus Model Academy</p>
        </div>
        <div className="text-[11px] text-slate-400 flex justify-between">
          <span>Morning Pickup: 07:45 AM</span>
          <span>Evening Drop: 03:45 PM</span>
        </div>
      </div>
    </div>
  );
}
