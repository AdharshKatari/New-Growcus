import { AiActionButton } from '@/components/teacher/AiActionButton';
import Link from 'next/link';

export default function TeacherDashboard() {
  const classesToday = [
    { period: '1st (08:30 AM)', grade: 'Class 8-A', subject: 'Mathematics', topic: 'Quadratic Equations', status: 'Completed' },
    { period: '3rd (10:15 AM)', grade: 'Class 9-B', subject: 'Mathematics', topic: 'Trigonometric Ratios', status: 'Next' },
    { period: '5th (12:30 PM)', grade: 'Class 8-A', subject: 'Physics', topic: 'Force & Motion', status: 'Upcoming' },
  ];

  const pendingTasks = [
    { task: 'Submit Gradebook for Class 8-A Mid-Term', priority: 'High', due: 'Today, 5:00 PM' },
    { task: 'Review Homework Submissions (24 pending)', priority: 'Medium', due: 'Tomorrow' },
    { task: 'Generate Monthly Progress Report for Class 9-B', priority: 'Low', due: '14 Sep 2026' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Good Morning, Meera Ma'am 👋</h1>
          <p className="text-slate-500 text-sm">Class Teacher of 8-A | Senior Mathematics & Physics</p>
        </div>
        <div className="flex items-center gap-3">
          <AiActionButton prompt="Generate quick lesson plan for Class 8-A Math" label="Lesson Co-pilot" />
          <Link href="/teacher/attendance" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
            Mark Morning Attendance
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Class 8-A Attendance</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">38 / 40</span>
            <span className="text-xs font-medium text-emerald-600">95% Present</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Homework Pending</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">24</span>
            <span className="text-xs font-medium text-amber-600">Submissions</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Class Performance Avg</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">78.4%</span>
            <span className="text-xs font-medium text-emerald-600">+3.2% vs Last Exam</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase">Parent Messages</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">3 Unread</span>
            <span className="text-xs font-medium text-indigo-600">View Comms</span>
          </div>
        </div>
      </div>

      {/* Schedule and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Today's Class Schedule</h2>
          <div className="space-y-3">
            {classesToday.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div>
                  <span className="text-xs font-semibold text-indigo-600">{item.period}</span>
                  <h3 className="font-semibold text-slate-800">{item.grade} — {item.subject}</h3>
                  <p className="text-xs text-slate-500">Topic: {item.topic}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  item.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                  item.status === 'Next' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-700'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="text-base font-semibold text-slate-900 mb-4">Priority Tasks</h2>
          <div className="space-y-3">
            {pendingTasks.map((t, i) => (
              <div key={i} className="p-3 border border-slate-100 rounded-lg bg-slate-50">
                <p className="text-sm font-medium text-slate-800">{t.task}</p>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <span className={`font-semibold ${t.priority === 'High' ? 'text-rose-600' : 'text-amber-600'}`}>
                    {t.priority} Priority
                  </span>
                  <span className="text-slate-400">Due {t.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
