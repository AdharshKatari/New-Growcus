import { AiActionButton } from '@/components/teacher/AiActionButton';

export default function ParentCommsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Parent Communication Hub</h1>
          <p className="text-slate-500 text-sm">Send WhatsApp circulars, progress updates & PTM scheduling.</p>
        </div>
        <AiActionButton prompt="Draft a polite WhatsApp notice to Class 8-A parents regarding upcoming Science Fair on Friday." label="Draft Broadcast Message" />
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-base font-semibold text-slate-900">Broadcast Channel & WhatsApp Templates</h2>
        <div className="p-4 bg-slate-50 rounded-lg space-y-2">
          <p className="text-sm font-semibold text-slate-800">Class 8-A Announcement Broadcast</p>
          <textarea className="w-full border border-slate-200 rounded-lg p-3 text-sm" rows={4} placeholder="Type announcement or use AI generator..." />
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
            Send WhatsApp Broadcast to 40 Parents
          </button>
        </div>
      </div>
    </div>
  );
}
