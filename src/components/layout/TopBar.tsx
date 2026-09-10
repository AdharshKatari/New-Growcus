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
  return (
    <header className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shrink-0">
      {/* Search & School Name */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-1 rounded-md">
          {schoolName}
        </span>
        <div className="relative hidden md:block">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search students, fees, classes..."
            className="pl-8 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-slate-400"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button
          aria-label="Notifications"
          className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User Pill & Signout */}
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
            {role[0]}
          </div>
          <div className="hidden sm:block text-left">
            <span className="block text-xs font-semibold text-slate-900 leading-tight">
              {role} User
            </span>
            <span className="block text-[10px] text-slate-500">{userPhone}</span>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            title="Log out"
            className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-1"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
