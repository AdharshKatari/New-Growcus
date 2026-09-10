'use client';
import { useState } from 'react';
import { AttendanceAvatar } from '@/components/teacher/AttendanceAvatar';

const initialStudents = [
  { id: '1', rollNumber: 1, name: 'Aarav Sharma', status: 'PRESENT' as const },
  { id: '2', rollNumber: 2, name: 'Ananya Verma', status: 'PRESENT' as const },
  { id: '3', rollNumber: 3, name: 'Devansh Gupta', status: 'ABSENT' as const },
  { id: '4', rollNumber: 4, name: 'Isha Patel', status: 'PRESENT' as const },
  { id: '5', rollNumber: 5, name: 'Kabir Mehta', status: 'LATE' as const },
];

export default function AttendancePage() {
  const [students, setStudents] = useState(initialStudents);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleStatus = (id: string, newStatus: 'PRESENT' | 'ABSENT' | 'LATE') => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  const handleDispatch = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const presentCount = students.filter(s => s.status === 'PRESENT').length;
  const absentCount = students.filter(s => s.status === 'ABSENT').length;
  const lateCount = students.filter(s => s.status === 'LATE').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Attendance Dispatch — Class 8-A</h1>
          <p className="text-slate-500 text-sm">Tap student card to toggle Present / Absent / Late. Auto-sends WhatsApp alerts to absent parents.</p>
        </div>
        <button
          onClick={handleDispatch}
          disabled={isSubmitting || submitted}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg shadow-sm disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? 'Dispatching WhatsApp Alerts...' : submitted ? '✓ Attendance Dispatched' : 'Submit & Alert Parents'}
        </button>
      </div>

      <div className="flex gap-4 border-b border-slate-200 pb-4">
        <div className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold">Present: {presentCount}</div>
        <div className="px-3 py-1 bg-rose-50 text-rose-700 rounded-md text-xs font-semibold">Absent: {absentCount}</div>
        <div className="px-3 py-1 bg-amber-50 text-amber-700 rounded-md text-xs font-semibold">Late: {lateCount}</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {students.map(s => (
          <AttendanceAvatar key={s.id} {...s} onToggle={toggleStatus} />
        ))}
      </div>
    </div>
  );
}
