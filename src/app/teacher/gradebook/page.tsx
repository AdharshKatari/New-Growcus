export default function GradebookPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Gradebook — Class 8-A</h1>
          <p className="text-slate-500 text-sm">Comprehensive marks entry grid with automatic CGPA calculation.</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
          Save & Sync Marks
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-500 uppercase border-b border-slate-200">
            <tr>
              <th className="px-4 py-3">Roll</th>
              <th className="px-4 py-3">Student Name</th>
              <th className="px-4 py-3">UT 1 (20)</th>
              <th className="px-4 py-3">Mid-Term (80)</th>
              <th className="px-4 py-3">Practical (20)</th>
              <th className="px-4 py-3">Total (120)</th>
              <th className="px-4 py-3">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-4 py-3 font-semibold">01</td>
              <td className="px-4 py-3 font-medium text-slate-900">Aarav Sharma</td>
              <td className="px-4 py-3"><input type="number" defaultValue={18} className="w-16 border rounded p-1 text-center" /></td>
              <td className="px-4 py-3"><input type="number" defaultValue={74} className="w-16 border rounded p-1 text-center" /></td>
              <td className="px-4 py-3"><input type="number" defaultValue={19} className="w-16 border rounded p-1 text-center" /></td>
              <td className="px-4 py-3 font-bold text-slate-900">111 / 120</td>
              <td className="px-4 py-3 font-semibold text-emerald-600">A1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
