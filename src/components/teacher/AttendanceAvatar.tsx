"use client";

import { getInitials } from "@/lib/utils";
import { Check, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface AttendanceAvatarProps {
  id: string;
  name: string;
  rollNumber: number;
  status: "PRESENT" | "ABSENT" | "LATE";
  onToggle: (id: string, newStatus: "PRESENT" | "ABSENT" | "LATE") => void;
}

export function AttendanceAvatar({
  id,
  name,
  rollNumber,
  status,
  onToggle,
}: AttendanceAvatarProps) {
  const isPresent = status === "PRESENT";
  const isAbsent = status === "ABSENT";
  const isLate = status === "LATE";

  const handleNextStatus = () => {
    if (isPresent) onToggle(id, "ABSENT");
    else if (isAbsent) onToggle(id, "LATE");
    else onToggle(id, "PRESENT");
  };

  return (
    <button
      onClick={handleNextStatus}
      className={cn(
        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-150 active:scale-95 text-center relative",
        isPresent && "bg-emerald-50/60 border-emerald-300 text-emerald-950 shadow-sm",
        isAbsent && "bg-red-50/80 border-red-300 text-red-950 shadow-sm",
        isLate && "bg-amber-50/80 border-amber-300 text-amber-950 shadow-sm"
      )}
    >
      {/* Badge Indicator */}
      <div
        className={cn(
          "absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-xs",
          isPresent && "bg-emerald-500",
          isAbsent && "bg-red-500",
          isLate && "bg-amber-500"
        )}
      >
        {isPresent && <Check className="w-3 h-3 stroke-[3]" />}
        {isAbsent && <X className="w-3 h-3 stroke-[3]" />}
        {isLate && <Clock className="w-3 h-3 stroke-[3]" />}
      </div>

      {/* Avatar Circle */}
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-1.5 border-2 shadow-xs",
          isPresent && "bg-emerald-100 text-emerald-800 border-emerald-400",
          isAbsent && "bg-red-100 text-red-800 border-red-400",
          isLate && "bg-amber-100 text-amber-800 border-amber-400"
        )}
      >
        {getInitials(name)}
      </div>

      {/* Name & Roll */}
      <span className="text-xs font-bold truncate max-w-full leading-tight">
        {name}
      </span>
      <span className="text-[10px] text-slate-500 font-medium">Roll #{rollNumber}</span>
      <span
        className={cn(
          "text-[9px] font-bold mt-1 uppercase tracking-wider px-1.5 py-0.2 rounded-md",
          isPresent && "bg-emerald-200/60 text-emerald-800",
          isAbsent && "bg-red-200/60 text-red-800",
          isLate && "bg-amber-200/60 text-amber-800"
        )}
      >
        {status}
      </span>
    </button>
  );
}
