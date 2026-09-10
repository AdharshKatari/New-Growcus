import Link from "next/link";
import { MapPin, Star, ShieldCheck, ArrowRight, Eye, CheckCircle2, Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface SchoolCardProps {
  id: string;
  name: string;
  location: string;
  boardType: string;
  feeRange: { min: number; max: number };
  rating: number;
  reviewCount: number;
  featured?: boolean;
  facilities?: string[];
  passRate?: string;
  affiliationNo?: string;
  image?: string;
}

export function SchoolCard({
  id,
  name,
  location,
  boardType,
  feeRange,
  rating,
  reviewCount,
  featured = false,
  facilities = ["Smart Labs", "AC Transport", "Robotics", "Sports Complex"],
  passRate = "99.4%",
  affiliationNo = "CBSE/2026/8940",
  image = "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80",
}: SchoolCardProps) {
  return (
    <div className="card-elevated flex flex-col justify-between relative group overflow-hidden bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Real Campus Image Preview Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

        {/* Board Badge & Verification Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase rounded-lg tracking-wider border border-white/20">
            {boardType}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/90 backdrop-blur-md text-white rounded-lg text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-white" /> Affiliated
          </span>
        </div>

        {/* Rating Pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-slate-900 text-xs font-black shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{rating}</span>
          <span className="text-slate-500 text-[10px] font-medium">({reviewCount})</span>
        </div>

        {/* Featured Platinum Ribbon */}
        {featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-white" /> Verified
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Location */}
          <h3 className="font-black text-slate-900 text-base leading-snug mb-1 group-hover:text-emerald-700 transition-colors">
            {name}
          </h3>
          <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-3 font-medium">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{location}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400 text-[10px] font-mono shrink-0">ID: {affiliationNo}</span>
          </p>

          {/* Facilities Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {facilities.map((fac, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200/60 rounded-md text-[10px] font-bold">
                {fac}
              </span>
            ))}
          </div>

          {/* Transparent Fee & Performance Grid */}
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                  Audited Annual Fee
                </span>
                <span className="text-xs font-black text-slate-900">
                  {formatCurrency(feeRange.min)} – {formatCurrency(feeRange.max)}
                </span>
              </div>
              <div className="text-right border-l border-slate-200 pl-3">
                <span className="block text-[9px] uppercase font-bold text-emerald-700 tracking-wider">
                  Class X Pass Rate
                </span>
                <span className="text-xs font-black text-emerald-800">{passRate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <Link
            href={`/schools/${id}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all border border-slate-200"
          >
            <Eye className="w-3.5 h-3.5 text-slate-500" />
            <span>3D Tour</span>
          </Link>
          <Link
            href={`/apply?schoolId=${id}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl shadow-xs transition-all"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
