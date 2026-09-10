import { AiActionButton } from '@/components/teacher/AiActionButton';

export default function ReportCardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Report Card Generator</h1>
          <p className="text-slate-500 text-sm">Generate personalized holistic progress remarks for students.</p>
        </div>
        <AiActionButton prompt="Draft holistic progress remarks for Class 8-A students based on mid-term performance." label="Generate Remarks" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-base font-semibold text-slate-900">Class 8-A Student Progress Reports</h2>
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
            <div>
              <p className="font-semibold text-slate-900">Aarav Sharma (Roll 01)</p>
              <p className="text-xs text-slate-500">Overall Grade: A1 (92%) | Subject Strengths: Math, Science</p>
            </div>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}
