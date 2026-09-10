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

  return (
    <aside className="w-60 bg-[--color-navy] text-white flex flex-col min-h-screen border-r border-slate-800 shrink-0">
      {/* Brand Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[--color-pay] flex items-center bg-emerald-500 font-bold text-white justify-center text-lg">
            G
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-white">Growcus</span>
            <span className="block text-[10px] text-slate-400 -mt-1 font-medium">
              {role} PORTAL
            </span>
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          const isAi = item.name.includes("AI") || item.name.includes("Orbit");
          const isPay = item.name.includes("UPI");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-150",
                isActive
                  ? "bg-slate-800 text-white shadow-sm font-semibold border-l-2 border-[--color-pay]"
                  : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 shrink-0",
                  isAi
                    ? "text-[--color-ai-light]"
                    : isPay
                    ? "text-[--color-pay-light]"
                    : isActive
                    ? "text-white"
                    : "text-slate-400"
                )}
              />
              <span className="truncate">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer License */}
      <div className="p-4 border-t border-slate-800 text-[11px] text-slate-400">
        <p className="font-medium text-slate-300">Growcus ERP v1.0</p>
        <p className="text-[10px]">Licensed to Model Academy</p>
      </div>
    </aside>
  );
}
