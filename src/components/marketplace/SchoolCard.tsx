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
}: SchoolCardProps) {
  return (
    <div className="card-elevated p-6 flex flex-col justify-between relative group overflow-hidden bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Featured Ribbon */}
      {featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-500 text-white text-[10px] font-black tracking-wider uppercase px-4 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3 fill-white" /> Verified Platinum
        </div>
      )}

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-extrabold uppercase rounded-lg tracking-wider shadow-xs">
              {boardType}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-[10px] font-bold">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Affiliated
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg text-amber-700 text-xs font-black">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
            <span className="text-slate-400 text-[10px] font-medium">({reviewCount})</span>
          </div>
        </div>

        {/* Title & Location */}
        <h3 className="font-black text-slate-900 text-lg leading-snug mb-1 group-hover:text-emerald-700 transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-4 font-medium">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{location}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400 text-[10px] font-mono">ID: {affiliationNo}</span>
        </p>

        {/* Facilities Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {facilities.map((fac, idx) => (
            <span key={idx} className="px-2.5 py-0.5 bg-slate-100/80 text-slate-700 border border-slate-200/60 rounded-md text-[10px] font-bold">
              {fac}
            </span>
          ))}
        </div>

        {/* Transparent Fee & Performance Grid */}
        <div className="bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/80 neu-inset mb-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Audited Fee (Per Annum)
              </span>
              <span className="text-sm font-black text-slate-900">
                {formatCurrency(feeRange.min)} – {formatCurrency(feeRange.max)}
              </span>
            </div>
            <div className="text-right border-l border-slate-200 pl-3">
              <span className="block text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                Class X Pass Rate
              </span>
              <span className="text-sm font-black text-emerald-800">{passRate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
        <Link
          href={`/schools/${id}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all border border-slate-200"
        >
          <Eye className="w-3.5 h-3.5 text-slate-500" />
          <span>3D Tour</span>
        </Link>
        <Link
          href={`/apply?schoolId=${id}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-emerald-600/20 transition-all"
        >
          <span>Common Application</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
