import React from "react";
import { ShieldCheck, Star, Building2 } from "lucide-react";

const partnerSchools = [
  { name: "Delhi Public School", city: "New Delhi", board: "CBSE", rating: 4.9, students: "3,200 Students" },
  { name: "St. Xavier's Heritage School", city: "Bengaluru", board: "ICSE", rating: 4.8, students: "2,400 Students" },
  { name: "Oakridge World International", city: "Hyderabad", board: "IB World", rating: 4.9, students: "1,800 Students" },
  { name: "Greenwood High International", city: "Bengaluru", board: "ICSE", rating: 4.9, students: "3,800 Students" },
  { name: "Kendriya Vidyalaya Command", city: "Mumbai", board: "CBSE", rating: 4.7, students: "2,100 Students" },
  { name: "National Public School (NPS)", city: "Bengaluru", board: "CBSE", rating: 4.9, students: "2,900 Students" },
  { name: "Ryan International Academy", city: "Pune", board: "ICSE", rating: 4.8, students: "3,100 Students" },
  { name: "DAV Public School", city: "Chandigarh", board: "CBSE", rating: 4.8, students: "2,600 Students" },
];

export function SchoolMarquee() {
  const list = [...partnerSchools, ...partnerSchools];

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 text-slate-900 py-3.5 overflow-hidden border-y border-blue-200/80 relative shadow-xs">
      {/* Top Banner Announcement Ticker */}
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between text-xs border-b border-blue-200/60 pb-2">
        <div className="flex items-center gap-2 text-blue-900 font-bold">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="uppercase tracking-wider text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300 font-extrabold">
            Live ERP Network
          </span>
          <span className="text-slate-700 hidden md:inline font-semibold">
            500+ Accredited Campuses Powered Across India · Over 120,000 Active Students
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-emerald-700 font-bold shrink-0">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% TRAI & DPDPA Compliant
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {list.map((sch, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white hover:bg-blue-100/50 border border-blue-200 px-4 py-2 rounded-xl shrink-0 transition-colors shadow-xs group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs shadow-xs">
                <Building2 className="w-4 h-4 text-white" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xs text-slate-900 group-hover:text-blue-700 transition-colors">
                    {sch.name}
                  </span>
                  <span className="px-1.5 py-0.2 bg-blue-100 text-blue-800 text-[9px] font-extrabold uppercase rounded border border-blue-200">
                    {sch.board}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 flex items-center gap-2 mt-0.5">
                  <span className="font-medium">{sch.city}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold">{sch.students}</span>
                  <span>•</span>
                  <span className="text-amber-700 flex items-center gap-0.5 font-bold">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-500" /> {sch.rating}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
