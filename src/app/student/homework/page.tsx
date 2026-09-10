export default function HomeworkPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Homework & Submissions</h1>
        <p className="text-slate-500 text-sm">Upload photos of handwritten assignments for instant AI review & submission.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="text-base font-semibold text-slate-900">Active Homework: Quadratic Equations Assignment</h2>
        <div className="p-4 border-2 border-dashed border-slate-300 rounded-lg text-center bg-slate-50 space-y-2">
          <p className="text-sm font-medium text-slate-700">Drag & drop photos of your notebook or PDF file here</p>
          <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg">Upload Submission</button>
        </div>
      </div>
    </div>
  );
}
