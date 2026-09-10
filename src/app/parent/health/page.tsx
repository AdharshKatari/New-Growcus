export default function HealthPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Student Health & Infirmary Records</h1>
        <p className="text-slate-500 text-sm">Medical checkup history, BMI tracking, vaccinations & allergy alerts.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Annual Medical Assessment 2026</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-500 uppercase font-semibold">Height & Weight</p>
            <p className="font-bold text-slate-900 text-base mt-1">152 cm / 44 kg</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-500 uppercase font-semibold">Vision (Left/Right)</p>
            <p className="font-bold text-slate-900 text-base mt-1">6/6 | 6/6</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-500 uppercase font-semibold">Blood Group</p>
            <p className="font-bold text-slate-900 text-base mt-1">B Positive (B+)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
