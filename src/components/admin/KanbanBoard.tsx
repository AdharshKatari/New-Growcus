"use client";

import { useState } from "react";
import { admissionStageLabels } from "@/lib/utils";
import { User, Phone, BookOpen, Plus, X } from "lucide-react";

interface LeadItem {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  grade: string;
  stage: "LEAD" | "INQUIRY" | "INTERVIEW" | "DOC_REVIEW" | "REGISTERED";
  notes?: string;
}

const STAGES: ("LEAD" | "INQUIRY" | "INTERVIEW" | "DOC_REVIEW" | "REGISTERED")[] = [
  "LEAD",
  "INQUIRY",
  "INTERVIEW",
  "DOC_REVIEW",
  "REGISTERED",
];

const INITIAL_LEADS: LeadItem[] = [
  {
    id: "lead-1",
    studentName: "Aarav Sharma",
    parentName: "Rajesh Sharma",
    phone: "+91 98112 34567",
    grade: "Grade 6",
    stage: "LEAD",
    notes: "Inquired via Facebook ad",
  },
  {
    id: "lead-2",
    studentName: "Ananya Patel",
    parentName: "Suresh Patel",
    phone: "+91 98223 45678",
    grade: "Grade 1",
    stage: "INQUIRY",
    notes: "Campus tour scheduled",
  },
  {
    id: "lead-3",
    studentName: "Rohan Gupta",
    parentName: "Vikram Gupta",
    phone: "+91 98334 56789",
    grade: "Grade 9",
    stage: "INTERVIEW",
    notes: "Principal interview pending",
  },
  {
    id: "lead-4",
    studentName: "Diya Verma",
    parentName: "Meena Verma",
    phone: "+91 98445 67890",
    grade: "Grade 4",
    stage: "DOC_REVIEW",
    notes: "TC and marksheets submitted",
  },
  {
    id: "lead-5",
    studentName: "Karan Singh",
    parentName: "Harpal Singh",
    phone: "+91 98556 78901",
    grade: "Grade 11 (CBSE)",
    stage: "REGISTERED",
    notes: "Registration fee paid",
  },
];

export function KanbanBoard() {
  const [leads, setLeads] = useState<LeadItem[]>(INITIAL_LEADS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLead, setNewLead] = useState<Partial<LeadItem>>({
    studentName: "",
    parentName: "",
    phone: "",
    grade: "Grade 1",
    stage: "LEAD",
    notes: "",
  });

  const moveLead = (
    leadId: string,
    nextStage: "LEAD" | "INQUIRY" | "INTERVIEW" | "DOC_REVIEW" | "REGISTERED"
  ) => {
    setLeads((prev) =>
      prev.map((item) => (item.id === leadId ? { ...item, stage: nextStage } : item))
    );
  };

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.studentName || !newLead.parentName || !newLead.phone) return;

    const created: LeadItem = {
      id: `lead-${Date.now()}`,
      studentName: newLead.studentName,
      parentName: newLead.parentName,
      phone: newLead.phone,
      grade: newLead.grade || "Grade 1",
      stage: newLead.stage || "LEAD",
      notes: newLead.notes || "",
    };

    setLeads((prev) => [created, ...prev]);
    setIsModalOpen(false);
    setNewLead({ studentName: "", parentName: "", phone: "", grade: "Grade 1", stage: "LEAD", notes: "" });
  };

  return (
    <div className="space-y-4">
      {/* Header bar with Add Lead Button */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <h3 className="font-bold text-sm text-slate-900">Active Admissions CRM Pipeline</h3>
          <p className="text-xs text-slate-500">Total Leads: {leads.length} | Dynamic Drag & Stage Transition Enabled</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Admission Lead</span>
        </button>
      </div>

      {/* Kanban Board Columns */}
      <div className="flex gap-4 overflow-x-auto pb-4 pt-2">
        {STAGES.map((stage) => {
          const stageLeads = leads.filter((item) => item.stage === stage);

          return (
            <div
              key={stage}
              className="w-72 shrink-0 bg-slate-100/80 rounded-xl p-3 border border-slate-200 flex flex-col min-h-[500px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                    {admissionStageLabels[stage]}
                  </span>
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center">
                    {stageLeads.length}
                  </span>
                </div>
              </div>

              {/* Lead Cards List */}
              <div className="flex-1 space-y-2.5 overflow-y-auto pr-0.5">
                {stageLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-white rounded-lg p-3 border border-slate-200 shadow-xs hover:shadow-sm transition-all duration-150 group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 leading-tight">
                          {lead.studentName}
                        </h4>
                        <span className="inline-block mt-1 text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          {lead.grade}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] text-slate-500 space-y-1">
                      <p className="flex items-center gap-1.5">
                        <User className="w-3 h-3 text-slate-400" />
                        <span>{lead.parentName}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-slate-400" />
                        <span>{lead.phone}</span>
                      </p>
                      {lead.notes && (
                        <p className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-1.5 rounded-md italic text-[10px] mt-2">
                          <BookOpen className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>{lead.notes}</span>
                        </p>
                      )}
                    </div>

                    {/* Move Controls */}
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">Move to:</span>
                      <div className="flex gap-1">
                        {STAGES.filter((s) => s !== stage).map((targetStage) => (
                          <button
                            key={targetStage}
                            onClick={() => moveLead(lead.id, targetStage)}
                            className="px-1.5 py-0.5 bg-slate-100 hover:bg-slate-800 hover:text-white text-slate-700 text-[9px] font-bold rounded transition-colors cursor-pointer"
                            title={`Move to ${admissionStageLabels[targetStage]}`}
                          >
                            {targetStage[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {stageLeads.length === 0 && (
                  <div className="h-32 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xs font-medium">
                    No leads in stage
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Lead Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm">Add New Admission Lead</h3>
              <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-slate-100 rounded">
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-600 mb-1">Student Name</label>
                <input
                  type="text"
                  required
                  value={newLead.studentName}
                  onChange={(e) => setNewLead({ ...newLead, studentName: e.target.value })}
                  placeholder="e.g. Rahul Kumar"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">Parent Name</label>
                <input
                  type="text"
                  required
                  value={newLead.parentName}
                  onChange={(e) => setNewLead({ ...newLead, parentName: e.target.value })}
                  placeholder="e.g. Amit Kumar"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">WhatsApp Phone</label>
                <input
                  type="tel"
                  required
                  value={newLead.phone}
                  onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Target Grade</label>
                  <select
                    value={newLead.grade}
                    onChange={(e) => setNewLead({ ...newLead, grade: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    <option>Nursery</option>
                    <option>Grade 1</option>
                    <option>Grade 6</option>
                    <option>Grade 9</option>
                    <option>Grade 11 (CBSE)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Pipeline Stage</label>
                  <select
                    value={newLead.stage}
                    onChange={(e) => setNewLead({ ...newLead, stage: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    {STAGES.map((s) => (
                      <option key={s} value={s}>{admissionStageLabels[s]}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-600 mb-1">Inquiry Notes</label>
                <textarea
                  rows={2}
                  value={newLead.notes}
                  onChange={(e) => setNewLead({ ...newLead, notes: e.target.value })}
                  placeholder="e.g. Interested in STEM robotics & bus transport"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-xs mt-2"
              >
                Save Lead to CRM Pipeline
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
