import Link from "next/link";
import { MapPin, Star, ShieldCheck, ArrowRight } from "lucide-react";
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
}: SchoolCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase rounded-md">
            {boardType}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
            <span className="text-slate-400 text-[10px]">({reviewCount})</span>
          </div>
        </div>

        {/* Title & Location */}
        <h3 className="font-bold text-slate-900 text-base leading-snug mb-1">
          {name}
        </h3>
        <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{location}</span>
        </p>

        {/* Transparent Fee & Stats */}
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 mb-4">
          <span className="block text-[10px] uppercase font-semibold text-slate-400">
            Transparent Fee Structure
          </span>
          <span className="text-xs font-bold text-slate-800">
            {formatCurrency(feeRange.min)} – {formatCurrency(feeRange.max)}{" "}
            <span className="text-[10px] font-normal text-slate-500">/ annum</span>
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
        <Link
          href={`/schools/${id}`}
          className="flex-1 text-center py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
        >
          View Prospectus
        </Link>
        <Link
          href={`/apply?schoolId=${id}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[--color-pay] hover:bg-[--color-pay-light] text-white text-xs font-semibold rounded-lg transition-colors"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
