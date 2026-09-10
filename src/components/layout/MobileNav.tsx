"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, CreditCard, Bus, MessageSquare, User } from "lucide-react";

interface MobileNavProps {
  role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
}

export function MobileNav({ role }: MobileNavProps) {
  const pathname = usePathname();

  const links =
    role === "PARENT"
      ? [
          { name: "Home", href: "/parent/overview", icon: LayoutDashboard },
          { name: "UPI Pay", href: "/parent/fees", icon: CreditCard },
          { name: "Fleet GPS", href: "/parent/transport", icon: Bus },
          { name: "Diary", href: "/parent/diary", icon: MessageSquare },
        ]
      : role === "TEACHER"
      ? [
          { name: "Station", href: "/teacher/dashboard", icon: LayoutDashboard },
          { name: "Attendance", href: "/teacher/attendance", icon: User },
          { name: "Planner", href: "/teacher/lesson-planner", icon: MessageSquare },
          { name: "Comms", href: "/teacher/parent-comms", icon: MessageSquare },
        ]
      : role === "STUDENT"
      ? [
          { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
          { name: "Adaptive", href: "/student/assessment", icon: MessageSquare },
          { name: "Homework", href: "/student/homework", icon: User },
          { name: "Arena", href: "/student/arena", icon: CreditCard },
        ]
      : [
          { name: "Command", href: "/dashboard", icon: LayoutDashboard },
          { name: "CRM", href: "/admissions", icon: User },
          { name: "Fees", href: "/fees", icon: CreditCard },
          { name: "Directory", href: "/students", icon: MessageSquare },
        ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-slate-900 border-t border-slate-800 text-white flex items-center justify-around z-40 px-2">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center py-1 px-3 rounded-lg text-[10px] font-medium transition-colors",
              isActive ? "text-emerald-400 font-bold" : "text-slate-400 hover:text-white"
            )}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
