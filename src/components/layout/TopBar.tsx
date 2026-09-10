"use client";

import { Bell, Search, User, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface TopBarProps {
  userPhone?: string;
  role?: string;
  schoolName?: string;
}

export function TopBar({
  userPhone = "+91 98765 43210",
  role = "ADMIN",
  schoolName = "Growcus Model Academy",
}: TopBarProps) {
  const roleBadgeStyle =
    role === "ADMIN"
      ? "bg-blue-100 text-blue-800 border-blue-200"
      : role === "PARENT"
      ? "bg-emerald-100 text-emerald-800 border-emerald-200"
      : role === "TEACHER"
      ? "bg-violet-100 text-violet-800 border-violet-200"
      : "bg-cyan-100 text-cyan-800 border-cyan-200";

  const roleAvatarStyle =
    role === "ADMIN"
      ? "bg-blue-600 shadow-blue-500/30"
      : role === "PARENT"
      ? "bg-emerald-600 shadow-emerald-500/30"
      : role === "TEACHER"
      ? "bg-violet-600 shadow-violet-500/30"
      : "bg-cyan-600 shadow-cyan-500/30";

  return (
    <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-6 flex items-center justify-between sticky top-0 z-30 shrink-0 shadow-sm">
      {/* Search & School Name */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold text-slate-800 bg-slate-100/80 border border-slate-200/80 px-3.5 py-1.5 rounded-xl shadow-xs">
          {schoolName}
        </span>
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search students, fees, classes..."
            className="pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl w-72 focus:outline-none focus:ring-2 focus:ring-slate-400 text-slate-900 font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Role Badge */}
        <span className={`hidden sm:inline-flex text-[11px] font-extrabold px-3 py-1 rounded-lg border uppercase tracking-wider ${roleBadgeStyle}`}>
          {role}
        </span>

        {/* Notification Bell */}
        <button
          aria-label="Notifications"
          className="relative p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors neu-inset"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User Pill & Signout */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className={`w-9 h-9 rounded-xl text-white flex items-center justify-center font-black text-xs shadow-md ${roleAvatarStyle}`}>
            {role[0]}
          </div>
          <div className="hidden md:block text-left">
            <span className="block text-xs font-extrabold text-slate-900 leading-tight">
              {role} Account
            </span>
            <span className="block text-[10px] text-slate-500 font-semibold">{userPhone}</span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            title="Log out"
            className="p-2.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors ml-1"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
