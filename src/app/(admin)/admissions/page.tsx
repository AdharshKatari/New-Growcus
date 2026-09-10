import { KanbanBoard } from "@/components/admin/KanbanBoard";

export default function AdmissionsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Admissions Pipeline CRM Terminal
        </h1>
        <p className="text-xs text-slate-500">
          Kanban pipeline tracking candidates from lead inflow to final registration
        </p>
      </div>

      <KanbanBoard />
    </div>
  );
}
