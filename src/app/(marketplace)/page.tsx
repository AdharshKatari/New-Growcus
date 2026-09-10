"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ShieldCheck, Award } from "lucide-react";
import { SchoolCard } from "@/components/marketplace/SchoolCard";

export default function MarketplaceHomePage() {
  const [search, setSearch] = useState("");
  const [board, setBoard] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?search=${encodeURIComponent(search)}&board=${board}`);
  };

  const featuredSchools = [
    {
      id: "sch-1",
      name: "Growcus Model International Academy",
      location: "Indiranagar, Bengaluru",
      boardType: "CBSE",
      feeRange: { min: 85000, max: 140000 },
      rating: 4.9,
      reviewCount: 128,
    },
    {
      id: "sch-2",
      name: "St. Xavier's Heritage Public School",
      location: "Koramangala, Bengaluru",
      boardType: "ICSE",
      feeRange: { min: 110000, max: 185000 },
      rating: 4.8,
      reviewCount: 94,
    },
    {
      id: "sch-3",
      name: "National Vidyalaya Public School",
      location: "Jayanagar, Bengaluru",
      boardType: "STATE",
      feeRange: { min: 45000, max: 75000 },
      rating: 4.7,
      reviewCount: 62,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Search Section (PRD MP-01) */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Organic Rankings Only — Zero Paid Lead-Gen Bias</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Find the Perfect School for Your Child's Future
        </h1>

        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Explore transparent fee structures, 3D tours, and common admission applications across pre-certified CBSE, ICSE & State Board schools.
        </p>

        {/* Search Console Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-2 md:p-3 rounded-2xl border border-slate-200 shadow-md flex flex-col md:flex-row gap-2 max-w-2xl mx-auto"
        >
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="School name, locality, or city..."
              className="w-full pl-10 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          </div>

          <div className="w-full md:w-40">
            <select
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none font-semibold text-slate-700"
            >
              <option value="">All Boards</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="STATE">State Board</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-2.5 px-6 bg-[--color-pay] hover:bg-[--color-pay-light] text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
          >
            Search Schools
          </button>
        </form>
      </section>

      {/* Discovery Engine Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Featured Verified Institutions
            </h2>
            <p className="text-xs text-slate-500">
              100% transparent fee breakdowns with common admission forms
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredSchools.map((sch) => (
            <SchoolCard key={sch.id} {...sch} />
          ))}
        </div>
      </section>
    </div>
  );
}
