"use client";

import { useState } from "react";
import { SchoolCard } from "@/components/marketplace/SchoolCard";
import { Filter, Search, RotateCcw, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const ALL_SCHOOLS = [
  { id: "sch-1", name: "Growcus Model International Academy", location: "Indiranagar, Bengaluru", boardType: "CBSE", feeRange: { min: 85000, max: 140000 }, rating: 4.9, reviewCount: 342, featured: true, facilities: ["3D VR Lab", "AC Bus Fleet", "Robotics", "Olympic Pool"], passRate: "100%", affiliationNo: "CBSE/2021/10492" },
  { id: "sch-2", name: "St. Xavier's Heritage Public School", location: "Koramangala, Bengaluru", boardType: "ICSE", feeRange: { min: 110000, max: 185000 }, rating: 4.8, reviewCount: 284, featured: true, facilities: ["Cambridge STEM", "Smart Classrooms", "Horse Riding"], passRate: "99.6%", affiliationNo: "ICSE/2019/8831" },
  { id: "sch-3", name: "Oakridge World International School", location: "Whitefield, Bengaluru", boardType: "IB WORLD", feeRange: { min: 180000, max: 320000 }, rating: 4.9, reviewCount: 196, featured: true, facilities: ["IB PYP/MYP", "AI Tinkering Lab", "State Art Studio"], passRate: "100%", affiliationNo: "IB/2018/0094" },
  { id: "sch-4", name: "National Vidyalaya Public School", location: "Jayanagar, Bengaluru", boardType: "STATE", feeRange: { min: 45000, max: 75000 }, rating: 4.7, reviewCount: 162, featured: false, facilities: ["Digitized Library", "Science Park", "Cricket Academy"], passRate: "98.8%", affiliationNo: "KAR/2017/4491" },
  { id: "sch-5", name: "Delhi Public Global Campus", location: "HSR Layout, Bengaluru", boardType: "CBSE", feeRange: { min: 95000, max: 155000 }, rating: 4.8, reviewCount: 220, featured: false, facilities: ["Astronomy Observatory", "Indoor Badminton", "Robotics"], passRate: "99.4%", affiliationNo: "CBSE/2020/5531" },
  { id: "sch-6", name: "Greenwood High International", location: "Sarjapur Road, Bengaluru", boardType: "ICSE", feeRange: { min: 140000, max: 240000 }, rating: 4.9, reviewCount: 410, featured: true, facilities: ["Bilingual Curriculum", "Heated Pool", "Tennis Court"], passRate: "100%", affiliationNo: "ICSE/2016/1104" },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBoard, setSelectedBoard] = useState<string>("ALL");
  const [maxFee, setMaxFee] = useState<number>(350000);

  const filteredSchools = ALL_SCHOOLS.filter((sch) => {
    const matchesSearch =
      sch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sch.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBoard = selectedBoard === "ALL" || sch.boardType === selectedBoard;
    const matchesFee = sch.feeRange.max <= maxFee;
    return matchesSearch && matchesBoard && matchesFee;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBoard("ALL");
    setMaxFee(350000);
  };

  return (
    <div className="space-y-8 py-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-3xl font-black text-slate-950 tracking-tight">
            Verified School Discovery Engine
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Real-time multi-metric school lookup | 100% Organic ranking algorithm with audited fee benchmarks
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-black text-emerald-800 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Showing {filteredSchools.length} of {ALL_SCHOOLS.length} Certified Institutions</span>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Dynamic Filter Sidebar */}
        <div className="card-elevated bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-6 h-fit">
          <div className="flex justify-between items-center border-b border-slate-200/80 pb-4">
            <h3 className="font-extrabold text-xs text-slate-900 flex items-center gap-2 uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Multi-Metric Filters</span>
            </h3>
            <button
              onClick={resetFilters}
              className="text-[11px] font-bold text-slate-500 hover:text-emerald-600 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Keyword Search */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">School Name or Locality</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Indiranagar, DPS, ICSE..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 font-semibold text-slate-900 placeholder:text-slate-400"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Board Tabs */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-800">Curriculum Board</label>
            <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100/80 rounded-xl text-center text-[11px] font-black">
              {["ALL", "CBSE", "ICSE", "IB WORLD", "STATE"].map((board) => (
                <button
                  key={board}
                  onClick={() => setSelectedBoard(board)}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    selectedBoard === board
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {board}
                </button>
              ))}
            </div>
          </div>

          {/* Fee Range Slider */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-slate-800">Max Annual Fee</label>
              <span className="font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {formatCurrency(maxFee)}
              </span>
            </div>
            <input
              type="range"
              min={50000}
              max={350000}
              step={10000}
              value={maxFee}
              onChange={(e) => setMaxFee(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold">
              <span>₹50k</span>
              <span>₹3.5 Lakhs</span>
            </div>
          </div>
        </div>

        {/* Dynamic School Cards Grid */}
        <div className="lg:col-span-2 space-y-6">
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSchools.map((sch) => (
                <SchoolCard key={sch.id} {...sch} />
              ))}
            </div>
          ) : (
            <div className="card-elevated bg-white rounded-3xl border border-slate-200/90 p-12 text-center space-y-4">
              <p className="text-base font-black text-slate-900">No schools match your search parameters</p>
              <p className="text-xs text-slate-500 font-medium">Try adjusting your fee slider or board filter parameters.</p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
