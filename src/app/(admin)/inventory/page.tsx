import { formatCurrency } from "@/lib/utils";

export default function InventoryPage() {
  const items = [
    { name: "A4 Answer Sheets (Reams)", stock: 45, threshold: 50, price: 250, alert: true },
    { name: "Whiteboard Markers (Box)", stock: 120, threshold: 30, price: 180, alert: false },
    { name: "NCERT Class 10 Math Textbooks", stock: 12, threshold: 20, price: 150, alert: true },
    { name: "Science Lab Test Tubes (Sets)", stock: 80, threshold: 15, price: 450, alert: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Vendor, Asset & Inventory Control
        </h1>
        <p className="text-xs text-slate-500">
          Stock tracking & automated reorder alerts for uniform/book store
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
            <tr>
              <th className="p-3">Item Name</th>
              <th className="p-3">Stock Level</th>
              <th className="p-3">Reorder Threshold</th>
              <th className="p-3">Unit Price</th>
              <th className="p-3">Alert Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {items.map((item, i) => (
              <tr key={i}>
                <td className="p-3 font-bold text-slate-900">{item.name}</td>
                <td className="p-3 text-slate-800 font-semibold">{item.stock} units</td>
                <td className="p-3 text-slate-500">{item.threshold} units</td>
                <td className="p-3 text-slate-700">{formatCurrency(item.price)}</td>
                <td className="p-3">
                  {item.alert ? (
                    <span className="px-2.5 py-0.5 bg-red-50 text-red-600 font-bold text-[10px] rounded-full">
                      REORDER NOW
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 font-bold text-[10px] rounded-full">
                      OPTIMAL
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
