import { AiActionButton } from '@/components/teacher/AiActionButton';

export default function HomeworkAssessorPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Homework Assessor</h1>
          <p className="text-slate-500 text-sm">Automated grading feedback and handwritten submission OCR analysis.</p>
        </div>
        <AiActionButton prompt="Grade pending homework batch for Class 8-A Quadratic Assignment" label="Run Auto-Assessor" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-base font-semibold text-slate-900">Pending Assignments to Review</h2>
        <div className="divide-y divide-slate-100">
          <div className="py-3 flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-800">Chapter 4 — Quadratic Equations Problem Set</p>
              <p className="text-xs text-slate-500">Submitted by 34/40 students | Class 8-A</p>
            </div>
            <button className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-semibold hover:bg-indigo-100">
              Review Submissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
