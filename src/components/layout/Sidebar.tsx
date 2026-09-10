"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  MessageSquare,
  GraduationCap,
  Calendar,
  Clock,
  Package,
  Bus,
  FileCheck,
  Download,
  Settings,
  BarChart3,
  BookOpen,
  Sparkles,
  Award,
  ShieldCheck,
  HeartPulse,
  UserCheck,
  ShoppingBag,
} from "lucide-react";

import { GrowcusLogo } from "@/components/brand/GrowcusLogo";

interface SidebarProps {
  role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const adminNav = [
    { name: "Command Center", href: "/dashboard", icon: LayoutDashboard },
    { name: "Admissions CRM", href: "/admissions", icon: Users },
    { name: "Fee Management", href: "/fees", icon: CreditCard },
    { name: "WhatsApp Billing", href: "/billing", icon: MessageSquare },
    { name: "Student Directory", href: "/students", icon: GraduationCap },
    { name: "HR & Staff", href: "/hr", icon: UserCheck },
    { name: "Timetable Co-Pilot", href: "/timetable", icon: Clock },
    { name: "Inventory & Assets", href: "/inventory", icon: Package },
    { name: "Transport Fleet", href: "/transport", icon: Bus },
    { name: "Board Compliance", href: "/compliance", icon: FileCheck },
    { name: "Data Exports", href: "/exports", icon: Download },
    { name: "System Settings", href: "/settings", icon: Settings },
    { name: "Audit & Analytics", href: "/analytics", icon: BarChart3 },
  ];

  const teacherNav = [
    { name: "Workstation", href: "/teacher/dashboard", icon: LayoutDashboard },
    { name: "5-Sec Attendance", href: "/teacher/attendance", icon: UserCheck },
    { name: "Socratic Guide", href: "/teacher/class-guide", icon: BookOpen },
    { name: "Orbit AI Planner", href: "/teacher/lesson-planner", icon: Sparkles },
    { name: "AI Exam Generator", href: "/teacher/exam-generator", icon: FileCheck },
    { name: "Homework Assessor", href: "/teacher/homework-assessor", icon: GraduationCap },
    { name: "Report Remarks AI", href: "/teacher/report-cards", icon: Award },
    { name: "Parent Comms Hub", href: "/teacher/parent-comms", icon: MessageSquare },
    { name: "Gradebook Ledger", href: "/teacher/gradebook", icon: BarChart3 },
  ];

  const studentNav = [
    { name: "Masterplay Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { name: "Adaptive Assessment", href: "/student/assessment", icon: Sparkles },
    { name: "Remediation Hub", href: "/student/remediation", icon: BookOpen },
    { name: "Digital Locker", href: "/student/homework", icon: GraduationCap },
    { name: "Milestones & Radar", href: "/student/analytics", icon: Award },
    { name: "Timetable & Activity", href: "/student/calendar", icon: Calendar },
    { name: "Peer Quiz Arena", href: "/student/arena", icon: ShieldCheck },
  ];

  const parentNav = [
    { name: "Household Overview", href: "/parent/overview", icon: LayoutDashboard },
    { name: "Instant UPI Pay", href: "/parent/fees", icon: CreditCard },
    { name: "Academic Radar", href: "/parent/progress", icon: BarChart3 },
    { name: "Safe Fleet Tracker", href: "/parent/transport", icon: Bus },
    { name: "School Diary & Feed", href: "/parent/diary", icon: MessageSquare },
    { name: "Teacher Appointments", href: "/parent/appointments", icon: Calendar },
    { name: "Health & Wallet", href: "/parent/health", icon: HeartPulse },
    { name: "Leave Application", href: "/parent/leave", icon: FileCheck },
    { name: "AI Tutor Store", href: "/parent/marketplace", icon: ShoppingBag },
  ];

  const items =
    role === "ADMIN"
      ? adminNav
      : role === "TEACHER"
      ? teacherNav
      : role === "STUDENT"
      ? studentNav
      : parentNav;

  const roleTheme =
    role === "ADMIN"
      ? {
          bg: "bg-slate-950 border-blue-900/40",
          badgeBg: "bg-blue-600",
          roleBadge: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
          activeBg: "bg-blue-600 text-white shadow-md shadow-blue-900/30 border-l-4 border-blue-400 font-bold",
          hoverBg: "hover:bg-slate-900 hover:text-white text-slate-300",
          iconActive: "text-white",
          iconInactive: "text-blue-400/70",
        }
      : role === "PARENT"
      ? {
          bg: "bg-emerald-950 border-emerald-900/40",
          badgeBg: "bg-emerald-600",
          roleBadge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
          activeBg: "bg-emerald-600 text-white shadow-md shadow-emerald-900/30 border-l-4 border-emerald-400 font-bold",
          hoverBg: "hover:bg-emerald-900/60 hover:text-white text-emerald-200/80",
          iconActive: "text-white",
          iconInactive: "text-emerald-400/70",
        }
      : role === "TEACHER"
      ? {
          bg: "bg-indigo-950 border-indigo-900/40",
          badgeBg: "bg-violet-600",
          roleBadge: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
          activeBg: "bg-violet-600 text-white shadow-md shadow-violet-900/30 border-l-4 border-violet-400 font-bold",
          hoverBg: "hover:bg-indigo-900/60 hover:text-white text-indigo-200/80",
          iconActive: "text-white",
          iconInactive: "text-violet-400/70",
        }
      : {
          bg: "bg-slate-950 border-cyan-900/40",
          badgeBg: "bg-cyan-600",
          roleBadge: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
          activeBg: "bg-gradient-to-r from-cyan-600 to-amber-500 text-white shadow-md shadow-cyan-900/30 border-l-4 border-amber-400 font-bold",
          hoverBg: "hover:bg-slate-900 hover:text-white text-slate-300",
          iconActive: "text-white",
          iconInactive: "text-cyan-400/70",
        };

  return (
    <aside className={cn("w-64 text-white flex flex-col min-h-screen border-r shrink-0 shadow-2xl z-20 transition-colors duration-200", roleTheme.bg)}>
      {/* Brand Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-between w-full">
          <GrowcusLogo variant="light" size="sm" />
          <span className={cn("inline-block text-[9px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider", roleTheme.roleBadge)}>
            {role}
          </span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all duration-150 tracking-wide",
                isActive
                  ? roleTheme.activeBg
                  : roleTheme.hoverBg
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 shrink-0 transition-transform duration-150 group-hover:scale-110",
                  isActive ? roleTheme.iconActive : roleTheme.iconInactive
                )}
              />
              <span className="truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer License */}
      <div className="p-4 border-t border-white/10 text-[11px] text-slate-400 bg-black/20">
        <p className="font-bold text-white">Growcus Enterprise v2.0</p>
        <p className="text-[10px] text-slate-400">High-Margin Edge System</p>
      </div>
    </aside>
  );
}
