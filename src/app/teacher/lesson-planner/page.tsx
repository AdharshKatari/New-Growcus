import { AiActionButton } from '@/components/teacher/AiActionButton';

export default function LessonPlannerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">AI Lesson Planner</h1>
          <p className="text-slate-500 text-sm">Generate NEP 2020 compliant lesson plans aligned with CBSE/ICSE learning outcomes.</p>
        </div>
        <AiActionButton prompt="Generate a 45-minute lesson plan for Grade 8 Algebra with Learning Objectives and Assessment Quiz" label="Generate Lesson Plan" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">Active Lesson Plan: Quadratic Equations (Grade 8)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-2">Target Objectives</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Understand standard form \(ax^2 + bx + c = 0\)</li>
              <li>Solve equations by factorization method</li>
              <li>Apply quadratic models to real-world projectile motion problems</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold text-slate-800 mb-2">Classroom Breakdown (45 min)</h3>
            <ul className="text-slate-600 space-y-1">
              <li><strong>0-10 min:</strong> Real-world hook & recap</li>
              <li><strong>10-25 min:</strong> Direct instruction & board examples</li>
              <li><strong>25-35 min:</strong> Guided pair-share problem solving</li>
              <li><strong>35-45 min:</strong> Exit ticket assessment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
