import { BookOpen } from "lucide-react";

export default function BlogPage() {
  const articles = [
    { title: "CBSE vs ICSE vs IB: Choosing the Right Curriculum in 2026", cat: "CBSE Compliance", date: "Sep 05, 2026" },
    { title: "Understanding NEP 2020 Skill-Based Grading System", cat: "Policy Guide", date: "Aug 28, 2026" },
    { title: "How to Avoid Hidden School Fees: A Parent Checklist", cat: "Fee Transparency", date: "Aug 15, 2026" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Educational Blog & Board Compliance Guide
        </h1>
        <p className="text-xs text-slate-500">
          3-column article directory (CBSE/ICSE/State compliance & NEP 2020 rules)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <span className="text-[10px] font-bold uppercase text-violet-600 bg-violet-50 px-2 py-0.5 rounded">
              {art.cat}
            </span>
            <h3 className="font-bold text-sm text-slate-900 leading-snug">{art.title}</h3>
            <p className="text-[11px] text-slate-400">{art.date}</p>
            <button className="text-xs font-bold text-emerald-600 hover:underline">
              Read Full Guide →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
