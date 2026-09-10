"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, ShieldCheck, Award, Sparkles, Building2, Users, FileCheck2, CheckCircle } from "lucide-react";
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
      reviewCount: 342,
      featured: true,
      facilities: ["3D VR Lab", "AC Bus Fleet", "Robotics", "Olympic Pool"],
      passRate: "100%",
      affiliationNo: "CBSE/2021/10492",
    },
    {
      id: "sch-2",
      name: "St. Xavier's Heritage Public School",
      location: "Koramangala, Bengaluru",
      boardType: "ICSE",
      feeRange: { min: 110000, max: 185000 },
      rating: 4.8,
      reviewCount: 284,
      featured: true,
      facilities: ["Cambridge STEM", "Smart Classrooms", "Horse Riding"],
      passRate: "99.6%",
      affiliationNo: "ICSE/2019/8831",
    },
    {
      id: "sch-3",
      name: "Oakridge World International School",
      location: "Whitefield, Bengaluru",
      boardType: "IB WORLD",
      feeRange: { min: 180000, max: 320000 },
      rating: 4.9,
      reviewCount: 196,
      featured: true,
      facilities: ["IB PYP/MYP", "AI Tinkering Lab", "State Art Studio"],
      passRate: "100%",
      affiliationNo: "IB/2018/0094",
    },
    {
      id: "sch-4",
      name: "National Vidyalaya Public School",
      location: "Jayanagar, Bengaluru",
      boardType: "STATE",
      feeRange: { min: 45000, max: 75000 },
      rating: 4.7,
      reviewCount: 162,
      featured: false,
      facilities: ["Digitized Library", "Science Park", "Cricket Academy"],
      passRate: "98.8%",
      affiliationNo: "KAR/2017/4491",
    },
    {
      id: "sch-5",
      name: "Delhi Public Global Campus",
      location: "HSR Layout, Bengaluru",
      boardType: "CBSE",
      feeRange: { min: 95000, max: 155000 },
      rating: 4.8,
      reviewCount: 220,
      featured: false,
      facilities: ["Astronomy Observatory", "Indoor Badminton", "Robotics"],
      passRate: "99.4%",
      affiliationNo: "CBSE/2020/5531",
    },
    {
      id: "sch-6",
      name: "Greenwood High International",
      location: "Sarjapur Road, Bengaluru",
      boardType: "ICSE",
      feeRange: { min: 140000, max: 240000 },
      rating: 4.9,
      reviewCount: 410,
      featured: true,
      facilities: ["Bilingual Curriculum", "Heated Pool", "Tennis Court"],
      passRate: "100%",
      affiliationNo: "ICSE/2016/1104",
    },
  ];

  return (
    <div className="space-y-16 py-4">
      {/* Hero Search Section */}
      <section className="text-center max-w-4xl mx-auto space-y-8 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-900 border border-emerald-200/90 rounded-full text-xs font-extrabold shadow-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Established 2021 — 100% Audited Fee Transparency & Zero Lead-Gen Bias</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
          India's Premier <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-700 bg-clip-text text-transparent">Verified School</span> Discovery Marketplace
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Compare 500+ pre-certified CBSE, ICSE, IB & State Board schools. Access audited fee ledgers, 3D virtual campus tours, and submit common admission applications with zero markup.
        </p>

        {/* Search Console Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-3 md:p-4 rounded-3xl border border-slate-200/90 card-elevated flex flex-col md:flex-row gap-3 max-w-3xl mx-auto"
        >
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search school name, locality, or landmark (e.g. Indiranagar)..."
              className="w-full pl-12 pr-4 py-3.5 text-xs md:text-sm bg-slate-50 border border-slate-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 font-semibold placeholder:text-slate-400"
            />
          </div>

          <div className="w-full md:w-48">
            <select
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="w-full px-4 py-3.5 text-xs md:text-sm bg-slate-50 border border-slate-200/80 rounded-2xl focus:outline-none font-bold text-slate-800"
            >
              <option value="">All Curriculum Boards</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="IB WORLD">IB World</option>
              <option value="STATE">State Board</option>
            </select>
          </div>

          <button
            type="submit"
            className="py-3.5 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-lg shadow-emerald-600/30 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search Marketplace</span>
          </button>
        </form>
      </section>

      {/* 5-Year Trust Stats Bar */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-800">
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-black text-3xl md:text-4xl">
              <Building2 className="w-7 h-7" /> 500+
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Verified Campuses</p>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-blue-400 font-black text-3xl md:text-4xl">
              <Users className="w-7 h-7" /> 120,000+
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Parents Assisted</p>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-violet-400 font-black text-3xl md:text-4xl">
              <FileCheck2 className="w-7 h-7" /> 100%
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Audited Fee Records</p>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-amber-400 font-black text-3xl md:text-4xl">
              <Award className="w-7 h-7" /> 4.9 / 5.0
            </div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Parent Rating Score</p>
          </div>
        </div>
      </section>

      {/* Discovery Engine Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Featured & Certified Institutions</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-extrabold">2026 Batch</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Direct common application portal with 3D virtual tour walk-throughs & verified transport routes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSchools.map((sch) => (
            <SchoolCard key={sch.id} {...sch} />
          ))}
        </div>
      </section>
    </div>
  );
}
