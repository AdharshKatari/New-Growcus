"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  Shield,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Users,
  BookOpen,
  Loader2,
  Zap,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

type RoleTab = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";

const roleConfig: Record<
  RoleTab,
  {
    icon: typeof Shield;
    gradient: string;
    label: string;
    desc: string;
    demoPhone: string;
    demoName: string;
  }
> = {
  ADMIN: {
    icon: Shield,
    gradient: "from-blue-600 to-indigo-700",
    label: "Admin",
    desc: "School Management & Finance",
    demoPhone: "9876543210",
    demoName: "Principal Dr. Sharma",
  },
  TEACHER: {
    icon: BookOpen,
    gradient: "from-violet-600 to-purple-700",
    label: "Teacher",
    desc: "Classroom & Attendance Control",
    demoPhone: "9812345678",
    demoName: "Meera Ma'am (Class 8-A)",
  },
  STUDENT: {
    icon: GraduationCap,
    gradient: "from-cyan-500 to-blue-600",
    label: "Student",
    desc: "Learning Hub & Assignments",
    demoPhone: "9765432109",
    demoName: "Aarav Sharma (Roll #01)",
  },
  PARENT: {
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
    label: "Parent",
    desc: "Child Attendance & UPI Fees",
    demoPhone: "9988776655",
    demoName: "Rajesh Sharma (Parent)",
  },
};

export default function LoginPage() {
  const [role, setRole] = useState<RoleTab>("PARENT");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRequestOtp = async (e: React.FormEvent, customPhone?: string, customRole?: RoleTab) => {
    if (e) e.preventDefault();

    const targetPhone = customPhone || phone;
    const targetRole = customRole || role;

    if (!targetPhone || targetPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setLoading(true);
    setStatusMsg("Connecting to WhatsApp Business API...");

    try {
      // Step 1 status simulation for super clear UX feedback
      await new Promise((r) => setTimeout(r, 400));
      setStatusMsg("Dispatching 4-Digit Security Code...");

      const res = await fetch("/api/v1/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: targetPhone, role: targetRole }),
      });
      const data = await res.json();

      if (data.success) {
        setStatusMsg("OTP Dispatched! Redirecting to Verification...");
        await new Promise((r) => setTimeout(r, 300));
        router.push(
          `/verify?phone=${encodeURIComponent(targetPhone)}&role=${targetRole}`
        );
      } else {
        setError(data.error || "Failed to send OTP");
        setLoading(false);
        setStatusMsg("");
      }
    } catch (err) {
      setError("Network connection error. Please try again.");
      setLoading(false);
      setStatusMsg("");
    }
  };

  const handleQuickDemoLogin = (selectedRole: RoleTab) => {
    const demo = roleConfig[selectedRole];
    setRole(selectedRole);
    setPhone(demo.demoPhone);
    handleRequestOtp(null as any, demo.demoPhone, selectedRole);
  };

  const currentRole = roleConfig[role];
  const RoleIcon = currentRole.icon;

  return (
    <div className="bg-white/[0.08] backdrop-blur-2xl rounded-2xl border border-white/[0.12] p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Top Gradient accent line */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r transition-all duration-300",
          currentRole.gradient
        )}
      />

      {/* Header */}
      <div className="text-center mb-6">
        <div
          className={cn(
            "w-14 h-14 rounded-2xl bg-gradient-to-br mx-auto mb-3 flex items-center justify-center shadow-xl transition-all duration-300",
            currentRole.gradient
          )}
        >
          <RoleIcon className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight">
          Unified Multi-Portal Access
        </h1>
        <p className="text-xs text-blue-200/70 mt-1">
          {currentRole.desc} · Passwordless WhatsApp OTP
        </p>
      </div>

      {/* Role Tab Switcher */}
      <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-white/[0.06] rounded-xl mb-6 text-center text-xs font-semibold border border-white/[0.06]">
        {(["ADMIN", "TEACHER", "STUDENT", "PARENT"] as RoleTab[]).map((tab) => {
          const TabIcon = roleConfig[tab].icon;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setRole(tab);
                setPhone(roleConfig[tab].demoPhone);
              }}
              className={cn(
                "py-2.5 rounded-lg transition-all duration-200 flex flex-col items-center gap-1",
                role === tab
                  ? `bg-gradient-to-br ${roleConfig[tab].gradient} text-white shadow-lg font-bold scale-[1.02]`
                  : "text-blue-200/60 hover:text-white hover:bg-white/[0.06]"
              )}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span className="text-[10px]">{roleConfig[tab].label}</span>
            </button>
          );
        })}
      </div>

      {/* Login Form */}
      <form onSubmit={(e) => handleRequestOtp(e)} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-blue-100/80 mb-1.5">
            Registered WhatsApp Mobile Number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-200/60">
              +91
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10-digit number"
              maxLength={10}
              disabled={loading}
              className="w-full pl-12 pr-10 py-3 text-sm bg-white/[0.06] border border-white/[0.1] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 font-mono text-white placeholder:text-blue-200/30 transition-all"
            />
            <Phone className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-blue-300/40" />
          </div>
        </div>

        {/* Live Loading Status Message */}
        {loading && (
          <div className="p-3.5 bg-blue-500/15 border border-blue-400/30 rounded-xl flex items-center justify-center gap-3 text-blue-200 text-xs font-semibold backdrop-blur-sm animate-pulse">
            <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
            <span>{statusMsg || "Dispatching OTP..."}</span>
          </div>
        )}

        {/* Error Feedback */}
        {error && (
          <div className="p-3 bg-red-500/20 text-red-200 text-xs font-medium rounded-xl border border-red-500/30 backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Dispatch OTP Button */}
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full py-3.5 text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] bg-gradient-to-r",
            currentRole.gradient,
            loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-2xl hover:brightness-110"
          )}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{statusMsg || "Dispatching..."}</span>
            </>
          ) : (
            <>
              <span>Request WhatsApp OTP ({currentRole.label})</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* ⚡ Quick 1-Click Demo Portal Access Section */}
      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-amber-300">
          <Zap className="w-3.5 h-3.5 fill-amber-300" />
          <span>Quick 1-Click Demo Logins</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(["ADMIN", "TEACHER", "PARENT", "STUDENT"] as RoleTab[]).map((tab) => {
            const d = roleConfig[tab];
            const Icon = d.icon;
            return (
              <button
                key={tab}
                type="button"
                disabled={loading}
                onClick={() => handleQuickDemoLogin(tab)}
                className="flex items-center gap-2 p-2.5 bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.2] rounded-xl text-left transition-all text-xs group"
              >
                <div className={cn("w-7 h-7 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0 text-white shadow-sm", d.gradient)}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-white group-hover:text-blue-200 truncate">{d.label}</p>
                  <p className="text-[9px] text-blue-200/50 truncate">{d.demoName}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-4 mt-5 text-[10px] text-blue-200/40 font-medium">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" /> 256-bit Encrypted
        </span>
        <span>•</span>
        <span>TRAI Compliant</span>
        <span>•</span>
        <span>DPDPA 2023</span>
      </div>

      {/* Dev Mode Banner */}
      <div className="mt-4 p-2.5 bg-violet-500/10 border border-violet-400/20 rounded-xl flex items-center gap-2 text-violet-200 text-[11px] font-medium backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
        <span>Dev Mode: Use OTP code <strong className="font-mono text-violet-300 font-bold">1234</strong> on verification step.</span>
      </div>
    </div>
  );
}
