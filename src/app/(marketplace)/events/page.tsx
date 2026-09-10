import { Calendar, Video } from "lucide-react";

export default function EventsPage() {
  const events = [
    { title: "2026-27 CBSE Admissions Orientation Webinar", date: "Sep 15, 2026 • 05:00 PM", status: "LIVE" },
    { title: "Campus Open House & Science Lab Tour", date: "Sep 20, 2026 • 10:00 AM", status: "UPCOMING" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Live Admissions Event & Webinar Tracker
        </h1>
        <p className="text-xs text-slate-500">
          Virtual campus tours & interactive Q&A sessions with principals (PRD MP-09)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((e, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full ${e.status === "LIVE" ? "bg-red-50 text-red-600 border border-red-200" : "bg-slate-100 text-slate-700"}`}>
              {e.status}
            </span>
            <h3 className="font-bold text-sm text-slate-900">{e.title}</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{e.date}</span>
            </p>
            <button className="w-full py-2 bg-slate-900 text-white font-bold text-xs rounded-lg">
              Register for Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
