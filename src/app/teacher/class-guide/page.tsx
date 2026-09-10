import { AiActionButton } from '@/components/teacher/AiActionButton';

export default function ClassGuidePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Class Guide & Pedagogical Assistant</h1>
          <p className="text-slate-500 text-sm">Real-time teaching suggestions, differentiated instruction & classroom management strategies.</p>
        </div>
        <AiActionButton prompt="Give me 3 interactive hook activities for teaching Newton's Third Law to Grade 8" label="Ask Pedagogical Assistant" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">🎯</div>
          <h3 className="font-semibold text-slate-900">Differentiated Learning Strategies</h3>
          <p className="text-sm text-slate-600">Tailored activity sheets for fast learners and remedial support exercises for struggling students in Mathematics.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">💡</div>
          <h3 className="font-semibold text-slate-900">Concept Visualizations</h3>
          <p className="text-sm text-slate-600">AI-suggested real-world metaphors and hands-on experiments for complex STEM topics.</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">⚡</div>
          <h3 className="font-semibold text-slate-900">Classroom Management Hacks</h3>
          <p className="text-sm text-slate-600">Quick 2-minute energizers and focus exercises to maintain student engagement during period transitions.</p>
        </div>
      </div>
    </div>
  );
}
