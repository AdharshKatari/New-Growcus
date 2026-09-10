import { formatCurrency } from "@/lib/utils";

export default function ComparePage() {
  const metrics = [
    { name: "Board Affiliation", sch1: "CBSE", sch2: "ICSE", sch3: "STATE" },
    { name: "Annual Tuition Fee", sch1: formatCurrency(85000), sch2: formatCurrency(110000), sch3: formatCurrency(45000) },
    { name: "Student-to-Teacher Ratio", sch1: "14:1", sch2: "12:1", sch3: "25:1" },
    { name: "Campus Area", sch1: "4.5 Acres", sch2: "3.2 Acres", sch3: "1.5 Acres" },
    { name: "Smart Classrooms", sch1: "100%", sch2: "100%", sch3: "60%" },
    { name: "Transport Fleet GPS", sch1: "Yes (Live)", sch2: "Yes (Live)", sch3: "No" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Comparative Analysis Board
        </h1>
        <p className="text-xs text-slate-500">
          Up to 3-school side-by-side comparison across 40 metrics (PRD MP-04)
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 text-white font-bold text-center">
            <tr>
              <th className="p-4 text-left">Metric</th>
              <th className="p-4 border-l border-slate-800">Growcus Model Academy</th>
              <th className="p-4 border-l border-slate-800">St. Xavier's Heritage</th>
              <th className="p-4 border-l border-slate-800">National Vidyalaya</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {metrics.map((m, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900 bg-slate-50">{m.name}</td>
                <td className="p-3.5 text-center">{m.sch1}</td>
                <td className="p-3.5 text-center">{m.sch2}</td>
                <td className="p-3.5 text-center">{m.sch3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
