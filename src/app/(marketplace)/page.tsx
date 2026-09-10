"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  MapPin,
  ShieldCheck,
  Award,
  Sparkles,
  Building2,
  Users,
  FileCheck2,
  CheckCircle,
  ArrowRight,
  Zap,
  BookOpen,
  GraduationCap,
  Shield,
  Layers,
  Star,
  Quote
} from "lucide-react";
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
  ];

  const testimonials = [
    {
      quote: "Growcus reduced our fee default rate from 18% down to 1.2% in just 60 days! Automated WhatsApp payment links with direct UPI settlement have eliminated manual queueing at our cash counter.",
      name: "Dr. R. K. Sharma",
      title: "Director & Principal",
      school: "Delhi Public School, Vasant Kunj",
      avatarBg: "bg-blue-600",
    },
    {
      quote: "The PWA offline attendance feature is a lifesaver for our teachers in classrooms with thick concrete walls. Marking morning attendance takes 30 seconds, and absent alerts reach parents instantly.",
      name: "Meera Deshmukh",
      title: "Vice Principal & Academic Coordinator",
      school: "St. Xavier's Heritage Academy",
      avatarBg: "bg-emerald-600",
    },
  ];

  return (
    <div className="space-y-16 py-4">
      {/* Hero Search Section */}
      <section className="text-center max-w-4xl mx-auto space-y-8 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-full text-xs font-extrabold shadow-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>India's #1 Verified School ERP & B2C Discovery Marketplace</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
          Modernizing School ERP <br />
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-700 bg-clip-text text-transparent">
            For Institutions & Parents
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Compare 500+ pre-certified CBSE, ICSE & IB schools, or automate your campus with Growcus Smart ERP—featuring instant UPI fee collection, PWA offline attendance, and Gemini AI lesson planning.
        </p>

        {/* Search Console Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-3 md:p-4 rounded-3xl border border-slate-200 card-elevated flex flex-col md:flex-row gap-3 max-w-3xl mx-auto shadow-md"
        >
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search school name, locality, or landmark (e.g. Indiranagar)..."
              className="w-full pl-12 pr-4 py-3.5 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 font-semibold placeholder:text-slate-400"
            />
          </div>

          <div className="w-full md:w-48">
            <select
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="w-full px-4 py-3.5 text-xs md:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none font-bold text-slate-800"
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
            className="py-3.5 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search Schools</span>
          </button>
        </form>
      </section>

      {/* 🚀 Interactive Live Portal Demo Launcher (Public Sandbox) */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>Interactive Live Demo Sandbox</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Try Live Multi-Portal Demo Sessions Instantly</h2>
          </div>
          <Link
            href="/pricing"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-sm self-start md:self-auto"
          >
            View Pricing & Onboard School →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/dashboard"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-blue-300">Admin Control</h3>
            <p className="text-[11px] text-slate-400">Executive KPIs, admissions funnel, & fee ledger</p>
          </Link>

          <Link
            href="/teacher/dashboard"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-violet-300">Teacher Portal</h3>
            <p className="text-[11px] text-slate-400">Attendance, AI remarks, & gradebook</p>
          </Link>

          <Link
            href="/parent/overview"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-emerald-300">Parent Portal</h3>
            <p className="text-[11px] text-slate-400">Attendance alerts & 1-click UPI fee receipts</p>
          </Link>

          <Link
            href="/student/dashboard"
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all space-y-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center font-bold text-white shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-cyan-300">Student Portal</h3>
            <p className="text-[11px] text-slate-400">Streak, house leaderboard, & online quizzes</p>
          </Link>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-slate-100">
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-black text-3xl md:text-4xl">
              <Building2 className="w-7 h-7" /> 500+
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Verified Campuses</p>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-blue-600 font-black text-3xl md:text-4xl">
              <Users className="w-7 h-7" /> 120,000+
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Parents Assisted</p>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-violet-600 font-black text-3xl md:text-4xl">
              <FileCheck2 className="w-7 h-7" /> 100%
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Audited Fee Ledgers</p>
          </div>
          <div className="space-y-1 p-2">
            <div className="flex items-center justify-center gap-2 text-amber-500 font-black text-3xl md:text-4xl">
              <Award className="w-7 h-7" /> 4.9 / 5.0
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Parent Rating Score</p>
          </div>
        </div>
      </section>

      {/* Featured Institutions Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Featured Verified Campuses</span>
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

      {/* School Testimonials */}
      <section className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Trusted by Leading School Principals</h2>
          <p className="text-xs text-slate-500">Read how Growcus transformed operations for top institutions across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <p className="text-xs text-slate-700 leading-relaxed italic">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}>
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{t.name}</h4>
                  <p className="text-[10px] text-slate-500">{t.title} · {t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
