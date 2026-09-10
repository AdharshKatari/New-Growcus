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
  Quote,
  CreditCard,
  UserCheck,
  FileSpreadsheet,
  Bus,
  MessageSquare,
  Bot,
  TrendingUp,
  CheckCircle2,
  Smartphone
} from "lucide-react";
import { SchoolCard } from "@/components/marketplace/SchoolCard";
import { SchoolMarquee } from "@/components/brand/SchoolMarquee";

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
      location: "Indiranagar 100ft Road, Bengaluru",
      boardType: "CBSE",
      feeRange: { min: 85000, max: 140000 },
      rating: 4.9,
      reviewCount: 342,
      featured: true,
      facilities: ["3D VR Lab", "AC Bus Fleet", "Robotics", "Olympic Pool"],
      passRate: "100%",
      affiliationNo: "CBSE/2021/10492",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "sch-2",
      name: "St. Xavier's Heritage Public School",
      location: "Koramangala 4th Block, Bengaluru",
      boardType: "ICSE",
      feeRange: { min: 110000, max: 185000 },
      rating: 4.8,
      reviewCount: 284,
      featured: true,
      facilities: ["Cambridge STEM", "Smart Classrooms", "Horse Riding"],
      passRate: "99.6%",
      affiliationNo: "ICSE/2019/8831",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "sch-3",
      name: "Oakridge World International School",
      location: "Whitefield Main Road, Bengaluru",
      boardType: "IB WORLD",
      feeRange: { min: 180000, max: 320000 },
      rating: 4.9,
      reviewCount: 196,
      featured: true,
      facilities: ["IB PYP/MYP", "AI Tinkering Lab", "State Art Studio"],
      passRate: "100%",
      affiliationNo: "IB/2018/0094",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "sch-4",
      name: "Delhi Public Global Campus",
      location: "HSR Layout Sector 1, Bengaluru",
      boardType: "CBSE",
      feeRange: { min: 95000, max: 155000 },
      rating: 4.8,
      reviewCount: 220,
      featured: false,
      facilities: ["Astronomy Observatory", "Indoor Badminton", "Robotics"],
      passRate: "99.4%",
      affiliationNo: "CBSE/2020/5531",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "sch-5",
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
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: "sch-6",
      name: "National Vidyalaya Academy",
      location: "Jayanagar 3rd Block, Bengaluru",
      boardType: "STATE",
      feeRange: { min: 45000, max: 75000 },
      rating: 4.7,
      reviewCount: 162,
      featured: false,
      facilities: ["Digitized Library", "Science Park", "Cricket Academy"],
      passRate: "98.8%",
      affiliationNo: "KAR/2017/4491",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const erpFeaturePillars = [
    {
      icon: CreditCard,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      title: "Automated Fee Collection",
      desc: "Instant WhatsApp fee reminders with direct NPCI UPI payment links. Zero cash counter queues and automated receipt generation.",
      tag: "Zero Manual Ledger",
    },
    {
      icon: UserCheck,
      color: "bg-blue-50 text-blue-700 border-blue-200",
      title: "AI Classroom Attendance",
      desc: "Mark morning attendance in 30 seconds. PWA offline classroom mode syncs attendance logs and sends instant WhatsApp absent alerts to parents.",
      tag: "Offline PWA Mode",
    },
    {
      icon: Users,
      color: "bg-purple-50 text-purple-700 border-purple-200",
      title: "Paperless Admission CRM",
      desc: "Digital student application pipeline from lead inflow to document verification and instant online fee deposit.",
      tag: "100% Digital Pipeline",
    },
    {
      icon: Bot,
      color: "bg-amber-50 text-amber-700 border-amber-200",
      title: "Gemini AI Co-Pilot & Remarks",
      desc: "Generate personalized report card progress remarks and structured CBSE lesson plans in seconds using AI assistance.",
      tag: "AI Co-Pilot",
    },
    {
      icon: Bus,
      color: "bg-cyan-50 text-cyan-700 border-cyan-200",
      title: "Real-time GPS Bus Fleet",
      desc: "Live GPS bus location tracking on parent apps with pickup/drop notifications, speed alerts, and automated transport billing.",
      tag: "Live Parent Tracking",
    },
    {
      icon: FileSpreadsheet,
      color: "bg-rose-50 text-rose-700 border-rose-200",
      title: "CBSE / ICSE Report Cards",
      desc: "Automated grade percentile calculation (A1-E), co-scholastic rubrics, and 1-click bulk PDF printing for report cards.",
      tag: "Statutory Compliant",
    },
  ];

  const testimonials = [
    {
      quote: "Growcus reduced our fee default rate from 18% down to 1.2% in just 60 days! Automated WhatsApp payment links with direct UPI settlement have eliminated manual queueing at our cash counter.",
      name: "Dr. R. K. Sharma",
      title: "Director & Principal",
      school: "Delhi Public School, Vasant Kunj",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80",
    },
    {
      quote: "The PWA offline attendance feature is a lifesaver for our teachers in classrooms with thick concrete walls. Marking morning attendance takes 30 seconds, and absent alerts reach parents instantly.",
      name: "Mrs. Meera Deshmukh",
      title: "Vice Principal & Academic Coordinator",
      school: "St. Xavier's Heritage Academy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-8 pt-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-900 border border-blue-200 rounded-full text-xs font-extrabold shadow-xs">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Growcus Enterprise · #1 AI-Powered School Operating Infrastructure</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Run Your School on Autopilot with <br />
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">
            AI Automation & Verified Marketplace
          </span>
        </h1>

        <p className="text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Growcus automates fees, attendance, admissions, classrooms, and parent communication on one unified platform. Trusted by 250+ Indian schools and 120,000+ parents.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/pricing#book-demo"
            className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-xs md:text-sm rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <span>Book Free School Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/features"
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs md:text-sm rounded-2xl shadow-xs transition-all flex items-center gap-2"
          >
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Explore All 14 ERP Modules</span>
          </Link>
        </div>

        {/* Search Console Bar */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-3 md:p-4 rounded-3xl border border-slate-200 flex flex-col md:flex-row gap-3 max-w-3xl mx-auto shadow-md"
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

      {/* Infinite School Marquee Banner */}
      <section className="-mx-4 md:-mx-8">
        <SchoolMarquee />
      </section>

      {/* Core Feature Pillars */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-[11px] font-bold rounded-full border border-blue-200">
            6 Core Platform Pillars
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Designed Specifically for Modern Indian Schools
          </h2>
          <p className="text-xs text-slate-600">
            Eliminate administrative headaches and save ₹4.2 Lakhs annually in manual operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {erpFeaturePillars.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${m.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900">{m.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 🚀 Interactive Live Portal Demo Launcher (Public Sandbox) */}
      <section className="bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60 rounded-3xl p-6 md:p-8 shadow-md border border-blue-200 space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-blue-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Interactive Live Demo Sandbox</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">Try Live Multi-Portal Demo Sessions Instantly</h2>
          </div>
          <Link
            href="/pricing"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm self-start md:self-auto"
          >
            View Pricing & Onboard School →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/dashboard"
            className="p-4 bg-white hover:bg-blue-50/80 border border-slate-200 rounded-2xl transition-all space-y-2 group shadow-xs hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-700">Admin Control</h3>
            <p className="text-[11px] text-slate-500">Executive KPIs, admissions funnel, & fee ledger</p>
          </Link>

          <Link
            href="/teacher/dashboard"
            className="p-4 bg-white hover:bg-violet-50/80 border border-slate-200 rounded-2xl transition-all space-y-2 group shadow-xs hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center font-bold text-white shadow-sm">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-violet-700">Teacher Portal</h3>
            <p className="text-[11px] text-slate-500">Attendance, AI remarks, & gradebook</p>
          </Link>

          <Link
            href="/parent/overview"
            className="p-4 bg-white hover:bg-emerald-50/80 border border-slate-200 rounded-2xl transition-all space-y-2 group shadow-xs hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700">Parent Portal</h3>
            <p className="text-[11px] text-slate-500">Attendance alerts & 1-click UPI fee receipts</p>
          </Link>

          <Link
            href="/student/dashboard"
            className="p-4 bg-white hover:bg-cyan-50/80 border border-slate-200 rounded-2xl transition-all space-y-2 group shadow-xs hover:shadow-md"
          >
            <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center font-bold text-white shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 group-hover:text-cyan-700">Student Portal</h3>
            <p className="text-[11px] text-slate-500">Streak, house leaderboard, & online quizzes</p>
          </Link>
        </div>
      </section>

      {/* Featured Institutions Grid */}
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

      {/* Real Principal & School Testimonials */}
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
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs shrink-0"
                />
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
