import Link from "next/link";
import { CheckCircle2, XCircle, Star, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const schoolColumns = [
  {
    id: "sch-1",
    name: "Growcus Model International Academy",
    location: "Indiranagar, Bengaluru",
    board: "CBSE",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 342,
  },
  {
    id: "sch-2",
    name: "St. Xavier's Heritage Public School",
    location: "Koramangala, Bengaluru",
    board: "ICSE",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=400&auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 284,
  },
  {
    id: "sch-3",
    name: "Oakridge World International School",
    location: "Whitefield, Bengaluru",
    board: "IB WORLD",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 196,
  },
];

const metricRows = [
  { category: "Basic Details & Affiliation", items: [
    { name: "Board Curriculum", val1: "CBSE Affiliated", val2: "ICSE Affiliated", val3: "IB World School" },
    { name: "CBSE/ICSE Code", val1: "CBSE/2021/10492", val2: "ICSE/2019/8831", val3: "IB/2018/0094" },
    { name: "Class X Board Pass Rate", val1: "100% (Pass Rate)", val2: "99.6% (Pass Rate)", val3: "100% (Pass Rate)" },
    { name: "Student-to-Teacher Ratio", val1: "14 : 1 (Optimal)", val2: "12 : 1 (Small Batch)", val3: "10 : 1 (Personalized)" },
  ]},
  { category: "Financials & Audited Fees", items: [
    { name: "Annual Tuition Fee", val1: formatCurrency(85000), val2: formatCurrency(110000), val3: formatCurrency(180000) },
    { name: "Admission Fee (One Time)", val1: formatCurrency(15000), val2: formatCurrency(20000), val3: formatCurrency(35000) },
    { name: "Transport Fee (Optional)", val1: formatCurrency(22000), val2: formatCurrency(28000), val3: formatCurrency(40000) },
    { name: "Hidden Fee Guarantee", val1: "100% Audited", val2: "100% Audited", val3: "100% Audited" },
  ]},
  { category: "Campus Infrastructure & Security", items: [
    { name: "Campus Land Area", val1: "4.5 Acres", val2: "3.8 Acres", val3: "6.2 Acres" },
    { name: "Air-Conditioned Classrooms", val1: "Yes (Smart AC)", val2: "Yes (Smart AC)", val3: "Yes (Centralized)" },
    { name: "Robotics & AI Tinkering Lab", val1: "Yes (Atelier Lab)", val2: "Yes (Cambridge STEM)", val3: "Yes (Innovation Hub)" },
    { name: "GPS Live Bus Tracking", val1: "Yes (Parent App)", val2: "Yes (Parent App)", val3: "Yes (Parent App)" },
    { name: "CCTV & Security Staff", val1: "24/7 Monitored", val2: "24/7 Monitored", val3: "24/7 Monitored" },
  ]},
];

export default function ComparePage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto py-2">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Institutional Comparative Matrix
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Side-by-side verified comparison across 40 metrics with audited fee transparency
          </p>
        </div>
        <Link
          href="/search"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs self-start"
        >
          + Add School to Compare
        </Link>
      </div>

      {/* School Header Cards Row */}
      <div className="grid grid-cols-4 gap-4 bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
        <div className="p-3 flex flex-col justify-center">
          <span className="px-2.5 py-1 bg-blue-50 text-blue-800 text-[10px] font-bold rounded-full w-max border border-blue-200">
            📊 Metric Filter
          </span>
          <h3 className="font-bold text-sm text-slate-900 mt-2">School Overview</h3>
          <p className="text-[11px] text-slate-500 mt-1">Comparing 3 Selected Campuses</p>
        </div>

        {schoolColumns.map((sch) => (
          <div key={sch.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between space-y-3">
            <div>
              <img
                src={sch.image}
                alt={sch.name}
                className="w-full h-24 rounded-lg object-cover mb-2 border border-slate-200"
              />
              <span className="px-2 py-0.5 bg-slate-900 text-white text-[9px] font-bold rounded uppercase">
                {sch.board}
              </span>
              <h4 className="font-bold text-xs text-slate-900 mt-1 leading-snug">{sch.name}</h4>
              <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-slate-400" />
                <span className="truncate">{sch.location}</span>
              </p>
            </div>

            <Link
              href={`/apply?schoolId=${sch.id}`}
              className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold rounded-lg text-center transition-all flex items-center justify-center gap-1"
            >
              <span>Apply</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>

      {/* Metric Breakdown Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-slate-100">
          {metricRows.map((cat) => (
            <div key={cat.category} className="p-4 space-y-3">
              <h3 className="font-extrabold text-xs text-blue-900 uppercase tracking-wider bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-100 w-max">
                {cat.category}
              </h3>

              <div className="space-y-1">
                {cat.items.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 gap-4 py-2.5 px-3 rounded-lg hover:bg-slate-50/80 text-xs items-center"
                  >
                    <span className="font-bold text-slate-800">{row.name}</span>
                    <span className="text-center font-semibold text-slate-900 bg-slate-50 py-1 rounded">{row.val1}</span>
                    <span className="text-center font-semibold text-slate-900 bg-slate-50 py-1 rounded">{row.val2}</span>
                    <span className="text-center font-semibold text-slate-900 bg-slate-50 py-1 rounded">{row.val3}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
