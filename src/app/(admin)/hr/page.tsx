export default function HrPage() {
  const staff = [
    { id: "tch-1", name: "Sunita Sharma", subject: "Mathematics", workload: "18 periods/wk", status: "PRESENT" },
    { id: "tch-2", name: "Vikram Malhotra", subject: "Physics", workload: "20 periods/wk", status: "PRESENT" },
    { id: "tch-3", name: "Anita Roy", subject: "English", workload: "16 periods/wk", status: "LEAVE" },
    { id: "tch-4", name: "Rajesh Varma", subject: "Chemistry", workload: "22 periods/wk", status: "PRESENT" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          HR & Teacher Deployment Logs
        </h1>
        <p className="text-xs text-slate-500">
          Faculty attendance tracking, workload distribution & leave approvals
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-bold text-sm text-slate-900 mb-4">Faculty Deployment Registry</h3>
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] font-bold">
            <tr>
              <th className="p-3">Faculty Name</th>
              <th className="p-3">Primary Subject</th>
              <th className="p-3">Weekly Workload</th>
              <th className="p-3">Today Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {staff.map((s) => (
              <tr key={s.id}>
                <td className="p-3 font-bold text-slate-900">{s.name}</td>
                <td className="p-3 text-slate-600">{s.subject}</td>
                <td className="p-3 text-slate-700">{s.workload}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      s.status === "PRESENT"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button className="text-slate-600 hover:text-slate-900 font-bold">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
