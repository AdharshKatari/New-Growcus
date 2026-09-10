import Link from "next/link";
import { MapPin, Star, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default async function SchoolProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Prospectus Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
            CBSE Pre-Certified
          </span>
          <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>4.9 / 5.0 (128 Parent Reviews)</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Growcus Model International Academy
          </h1>
          <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Indiranagar 100ft Road, Bengaluru, Karnataka - 560038</span>
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
          <div>
            <span className="text-xs text-slate-400 block">Annual Fee Range:</span>
            <span className="text-lg font-bold text-white">
              {formatCurrency(85000)} – {formatCurrency(140000)}
            </span>
          </div>

          <Link
            href="/apply?schoolId=sch-1"
            className="px-6 py-2.5 bg-[--color-pay] hover:bg-[--color-pay-light] text-white text-xs font-bold rounded-xl shadow-xs"
          >
            Apply Now (Common Application)
          </Link>
        </div>
      </div>

      {/* Tabs Breakdown */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h3 className="font-bold text-sm text-slate-900 border-b pb-2">
          Transparent Fee Breakdown (No Hidden Costs Guarantee)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="text-slate-500 block">Tuition Fee:</span>
            <span className="font-bold text-slate-900">{formatCurrency(60000)}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="text-slate-500 block">Lab & Smart Board:</span>
            <span className="font-bold text-slate-900">{formatCurrency(15000)}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="text-slate-500 block">Sports & Activities:</span>
            <span className="font-bold text-slate-900">{formatCurrency(10000)}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg">
            <span className="text-slate-500 block">Transport (Optional):</span>
            <span className="font-bold text-slate-900">{formatCurrency(25000)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
