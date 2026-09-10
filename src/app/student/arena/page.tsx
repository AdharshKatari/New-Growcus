export default function ArenaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Gamified Quiz Arena & Leaderboard</h1>
        <p className="text-slate-500 text-sm">Compete with classmates in live quiz battles and earn badges.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <h2 className="font-semibold text-slate-900">Class 8-A Weekly Leaderboard 🏆</h2>
        <div className="space-y-2">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-amber-700">🥇 #1</span>
              <div>
                <p className="font-bold text-slate-900 text-sm">Ananya Verma</p>
                <p className="text-xs text-slate-500">2,450 XP</p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded">Math Champion</span>
          </div>

          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-indigo-700">🥈 #2</span>
              <div>
                <p className="font-bold text-slate-900 text-sm">Aarav Sharma (You)</p>
                <p className="text-xs text-slate-500">2,280 XP</p>
              </div>
            </div>
            <span className="text-xs font-bold text-indigo-800 bg-indigo-100 px-2.5 py-1 rounded">Streak Master</span>
          </div>
        </div>
      </div>
    </div>
  );
}
