export default function ParentMarketplacePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">School Uniform & Book Store</h1>
        <p className="text-slate-500 text-sm">Official school uniforms, textbook kits & stationery packages delivered home.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-4xl">👔</div>
          <h3 className="font-semibold text-slate-900">Grade 8 Official Winter Uniform Set</h3>
          <p className="text-xs text-slate-500">Blazer, 2 Trousers, 2 Shirts & Tie</p>
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-slate-900 text-base">₹3,499</span>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-semibold">Order Now</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
          <div className="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-4xl">📚</div>
          <h3 className="font-semibold text-slate-900">NCERT Grade 8 Complete Book Set</h3>
          <p className="text-xs text-slate-500">Math, Science, Social, English & Hindi</p>
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-slate-900 text-base">₹1,850</span>
            <button className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-semibold">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
