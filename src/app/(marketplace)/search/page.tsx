"use client";

import { useState } from "react";
import { SchoolCard } from "@/components/marketplace/SchoolCard";
import { Filter, Search, RotateCcw } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const ALL_SCHOOLS = [
  { id: "sch-1", name: "Growcus Model International Academy", location: "Indiranagar, Bengaluru", boardType: "CBSE", feeRange: { min: 85000, max: 140000 }, rating: 4.9, reviewCount: 128 },
  { id: "sch-2", name: "St. Xavier's Heritage Public School", location: "Koramangala, Bengaluru", boardType: "ICSE", feeRange: { min: 110000, max: 185000 }, rating: 4.8, reviewCount: 94 },
  { id: "sch-3", name: "National Vidyalaya Public School", location: "Jayanagar, Bengaluru", boardType: "STATE", feeRange: { min: 45000, max: 75000 }, rating: 4.7, reviewCount: 62 },
  { id: "sch-4", name: "Delhi Public School — East Campus", location: "Whitefield, Bengaluru", boardType: "CBSE", feeRange: { min: 95000, max: 160000 }, rating: 4.9, reviewCount: 210 },
  { id: "sch-5", name: "Bishop Cotton Boys' School", location: "St. Mark's Road, Bengaluru", boardType: "ICSE", feeRange: { min: 130000, max: 210000 }, rating: 4.9, reviewCount: 185 },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBoard, setSelectedBoard] = useState<string>("ALL");
  const [maxFee, setMaxFee] = useState<number>(220000);

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
    setMaxFee(220000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Discovery Engine & School Grid
          </h1>
          <p className="text-xs text-slate-500">
            Real-time multi-metric school finder | Organic ranking only (Zero paid bias)
          </p>
        </div>
        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
          Showing {filteredSchools.length} of {ALL_SCHOOLS.length} Pre-Certified Schools
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Dynamic Filter Sidebar */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-5 h-fit">
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="font-bold text-xs text-slate-900 flex items-center gap-1.5 uppercase">
              <Filter className="w-4 h-4 text-indigo-600" />
              <span>Interactive Filters</span>
            </h3>
            <button
              onClick={resetFilters}
              className="text-[11px] font-semibold text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Keyword Search */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">Search Name or Locality</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Indiranagar, DPS, ICSE..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Board Tabs */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">Board Affiliation</label>
            <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-lg text-center text-[11px] font-bold">
              {["ALL", "CBSE", "ICSE", "STATE"].map((board) => (
                <button
                  key={board}
                  onClick={() => setSelectedBoard(board)}
                  className={`py-1.5 rounded transition-all cursor-pointer ${
                    selectedBoard === board
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {board}
                </button>
              ))}
            </div>
          </div>

          {/* Fee Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-slate-700">Max Annual Fee</label>
              <span className="font-bold text-indigo-600">{formatCurrency(maxFee)}</span>
            </div>
            <input
              type="range"
              min={50000}
              max={220000}
              step={10000}
              value={maxFee}
              onChange={(e) => setMaxFee(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>₹50k</span>
              <span>₹2.2 Lakhs</span>
            </div>
          </div>
        </div>

        {/* Dynamic School Cards Grid */}
        <div className="lg:col-span-2 space-y-4">
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSchools.map((sch) => (
                <SchoolCard key={sch.id} {...sch} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
              <p className="text-sm font-bold text-slate-800">No schools match your search parameters</p>
              <p className="text-xs text-slate-500">Try adjusting your fee slider or board filter.</p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700"
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
