"use client";

import { useState } from "react";
import { Search, Filter, Plus, UserCheck, Shield } from "lucide-react";

export default function StudentsPage() {
  const [search, setSearch] = useState("");

  const students = [
    { id: "stu-1", name: "Aarav Sharma", roll: 101, class: "Class 10A", parent: "Rajesh Sharma", phone: "+91 98112 34567" },
    { id: "stu-2", name: "Ananya Patel", roll: 102, class: "Class 8B", parent: "Suresh Patel", phone: "+91 98223 45678" },
    { id: "stu-3", name: "Rohan Gupta", roll: 103, class: "Class 9A", parent: "Vikram Gupta", phone: "+91 98334 56789" },
    { id: "stu-4", name: "Diya Verma", roll: 104, class: "Class 5C", parent: "Meena Verma", phone: "+91 98445 67890" },
    { id: "stu-5", name: "Karan Singh", roll: 105, class: "Class 11A", parent: "Harpal Singh", phone: "+91 98556 78901" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Smart Student Directory & Profile Vault
          </h1>
          <p className="text-xs text-slate-500">
            Centralized student registry with strict multi-tenant school isolation
          </p>
        </div>
        <button
          onClick={() => alert("Student creation form opened!")}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-lg hover:bg-slate-800"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Student</span>
        </button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by student name, roll number, parent phone..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-800"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3.5">Roll #</th>
              <th className="p-3.5">Student Name</th>
              <th className="p-3.5">Class / Section</th>
              <th className="p-3.5">Parent Name</th>
              <th className="p-3.5">Parent WhatsApp Phone</th>
              <th className="p-3.5 text-right">Vault Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {students.map((s) => (
              <tr key={s.id} className="hover:bg-slate-50/80">
                <td className="p-3.5 font-mono text-slate-500 font-bold">#{s.roll}</td>
                <td className="p-3.5 font-bold text-slate-900">{s.name}</td>
                <td className="p-3.5 text-slate-600">{s.class}</td>
                <td className="p-3.5 text-slate-700">{s.parent}</td>
                <td className="p-3.5 font-mono text-slate-600">{s.phone}</td>
                <td className="p-3.5 text-right">
                  <button
                    onClick={() => alert(`Viewing profile vault for ${s.name}`)}
                    className="text-xs font-bold text-emerald-600 hover:underline"
                  >
                    View Vault
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
