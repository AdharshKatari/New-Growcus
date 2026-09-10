import Link from "next/link";
import {
  Flame,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Trophy,
  Target,
  FileText,
  CalendarDays
} from "lucide-react";

const todayClasses = [
  { time: "08:30 AM", subject: "Mathematics", topic: "Quadratic Equations", teacher: "Meera Ma'am", status: "Completed", room: "Room 204" },
  { time: "10:15 AM", subject: "Physics", topic: "Newton's Laws of Motion", teacher: "Dr. K. Verma", status: "In Progress", room: "Physics Lab 1" },
  { time: "11:45 AM", subject: "English Lit", topic: "The Merchant of Venice", teacher: "Ms. Ananya", status: "Next", room: "Room 204" },
  { time: "02:00 PM", subject: "Computer Science", topic: "Python Data Structures", teacher: "Mr. Rajesh", status: "Upcoming", room: "Comp Lab B" },
];

const pendingAssignments = [
  { id: "HW-1", title: "Math Worksheet 4.2 — Factorization", subject: "Mathematics", due: "Tomorrow, 08:30 AM", status: "Pending", points: "+50 Pts" },
  { id: "HW-2", title: "Physics Friction Experiment Report", subject: "Physics", due: "Friday, 05:00 PM", status: "In Progress", points: "+75 Pts" },
  { id: "HW-3", title: "English Essay — Shakespearean Themes", subject: "English", due: "Monday, 10:00 AM", status: "Not Started", points: "+40 Pts" },
];

const houseRankings = [
  { house: "Blue Dragons 🐉", points: 1450, rank: 1, isUserHouse: true },
  { house: "Red Phoenix 🦅", points: 1380, rank: 2, isUserHouse: false },
  { house: "Green Griffins 🦁", points: 1290, rank: 3, isUserHouse: false },
  { house: "Gold Lions 👑", points: 1220, rank: 4, isUserHouse: false },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white rounded-2xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Welcome Back, Aarav! 👋</h1>
            <span className="px-2.5 py-0.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold rounded-full">
              Class 8-A · Roll #01
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Delhi Public School, Vasant Kunj · Academic Year 2026-27
          </p>
        </div>

        {/* Gamified Streak & House Pill */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 px-3 py-2 rounded-xl">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <div>
              <p className="text-xs font-bold text-amber-300">12 Day Streak!</p>
              <p className="text-[10px] text-amber-200/70">Top 5% of class</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 px-3 py-2 rounded-xl">
            <Trophy className="w-5 h-5 text-cyan-300" />
            <div>
              <p className="text-xs font-bold text-cyan-200">Blue Dragons</p>
              <p className="text-[10px] text-cyan-300/70">House Rank #1</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Stat KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Overall GPA</span>
            <Award className="w-4 h-4 text-cyan-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">92.4%</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Grade A1 (Top Tier)</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Attendance</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-emerald-600 mt-1">98.2%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Present 110 / 112 Days</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Pending Tasks</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-bold text-amber-600 mt-1">3 Due</p>
          <p className="text-[11px] text-slate-500 mt-0.5">2 Homework, 1 Quiz</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase">Earned Points</span>
            <Sparkles className="w-4 h-4 text-violet-600" />
          </div>
          <p className="text-2xl font-bold text-violet-600 mt-1">450 Pts</p>
          <p className="text-[11px] text-violet-700 font-semibold mt-0.5">+50 pts this week</p>
        </div>
      </div>

      {/* Main Grid: Quiz Hero + Timetable + Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Next Assessment & Today's Classes */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Quiz Banner */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-xl p-5 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="px-2.5 py-0.5 bg-white/20 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                Upcoming Assessment Today
              </span>
              <h2 className="text-lg font-bold mt-2">Physics — Newton's Laws of Motion Quiz</h2>
              <p className="text-xs text-cyan-100 mt-0.5">
                Scheduled for 02:00 PM · 15 Multiple Choice Questions · 20 Mins Limit
              </p>
            </div>
            <Link
              href="/student/assessment"
              className="px-4 py-2.5 bg-white text-cyan-900 font-bold rounded-xl text-xs hover:bg-cyan-50 shadow-md shrink-0 transition-all text-center"
            >
              Start Assessment →
            </Link>
          </div>

          {/* Today's Live Timetable */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <h3 className="font-bold text-sm text-slate-900 mb-4 flex items-center justify-between">
              <span>Today's Class Schedule</span>
              <span className="text-xs text-slate-500 font-normal flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" /> 4 Period Slots
              </span>
            </h3>

            <div className="space-y-3">
              {todayClasses.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-xl border ${
                    item.status === "In Progress"
                      ? "bg-cyan-50/60 border-cyan-200"
                      : item.status === "Completed"
                      ? "bg-slate-50 border-slate-100 opacity-80"
                      : "bg-white border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                      item.status === "In Progress" ? "bg-cyan-600 text-white" : "bg-slate-200 text-slate-700"
                    }`}>
                      {item.time}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">
                        {item.subject} <span className="font-normal text-slate-500">— {item.topic}</span>
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Teacher: {item.teacher} · {item.room}
                      </p>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    item.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                    item.status === "In Progress" ? "bg-cyan-100 text-cyan-800 animate-pulse" :
                    "bg-slate-100 text-slate-600"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Homework */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-600" />
                Homework & Assignment Tracker
              </h3>
              <Link href="/student/homework" className="text-xs font-semibold text-cyan-700 hover:underline">
                View All →
              </Link>
            </div>

            <div className="space-y-3">
              {pendingAssignments.map((hw) => (
                <div key={hw.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-cyan-700 uppercase bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                      {hw.subject}
                    </span>
                    <p className="text-xs font-bold text-slate-900 mt-1">{hw.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Due: {hw.due}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-violet-600 block mb-1">{hw.points}</span>
                    <Link
                      href="/student/homework"
                      className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold rounded-lg"
                    >
                      Submit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Gamified House Leaderboard + AI Study Plan */}
        <div className="space-y-6">
          {/* House Leaderboard */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <h3 className="font-bold text-sm text-slate-900 mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-500" /> Inter-House Leaderboard
              </span>
              <span className="text-[10px] text-slate-400 font-normal">Term 2</span>
            </h3>

            <div className="space-y-2.5">
              {houseRankings.map((h) => (
                <div
                  key={h.house}
                  className={`p-3 rounded-xl border flex items-center justify-between ${
                    h.isUserHouse
                      ? "bg-cyan-50 border-cyan-300 font-bold"
                      : "bg-slate-50 border-slate-100 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold ${
                      h.rank === 1 ? "bg-amber-400 text-slate-900" :
                      h.rank === 2 ? "bg-slate-300 text-slate-900" :
                      "bg-amber-700/20 text-slate-700"
                    }`}>
                      #{h.rank}
                    </span>
                    <span className="text-xs font-semibold">{h.house}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">{h.points} Pts</span>
                </div>
              ))}
            </div>
          </div>

          {/* Remediation Study Plan */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-violet-700 font-bold text-xs">
              <Target className="w-4 h-4 text-violet-600" />
              <span>Personalized Remediation Plan</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Based on your last Mathematics quiz, 3 practice problems have been selected to master <strong>Quadratic Factorization</strong>.
            </p>
            <Link
              href="/student/remediation"
              className="w-full py-2 bg-violet-50 hover:bg-violet-100 text-violet-800 border border-violet-200 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Practice Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
