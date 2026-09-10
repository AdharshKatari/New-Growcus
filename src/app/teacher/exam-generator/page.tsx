import { AiActionButton } from '@/components/teacher/AiActionButton';

export default function ExamGeneratorPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Exam & Quiz Generator</h1>
          <p className="text-slate-500 text-sm">Create question papers with Bloom's Taxonomy difficulty distribution & answer keys.</p>
        </div>
        <AiActionButton prompt="Create a 25-mark quiz on Light & Optics for Grade 8 with MCQs, short questions, and 1 numerical." label="Generate Question Paper" />
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Paper Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Subject</label>
            <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50">
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Total Marks</label>
            <input type="number" defaultValue={50} className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Difficulty</label>
            <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50">
              <option>Balanced (30% Easy, 50% Medium, 20% Hard)</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
