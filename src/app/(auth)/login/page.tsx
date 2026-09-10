"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
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
  Lock,
  Eye,
  EyeOff,
  KeyRound,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

type RoleTab = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";

const roleConfig: Record<
  RoleTab,
  {
    icon: typeof Shield;
    bg: string;
    text: string;
    badgeBg: string;
    label: string;
    desc: string;
    demoPhone: string;
    demoName: string;
  }
> = {
  ADMIN: {
    icon: Shield,
    bg: "bg-blue-600",
    text: "text-blue-700",
    badgeBg: "bg-blue-50 text-blue-800 border-blue-200",
    label: "Admin",
    desc: "Institutional Control & Finance",
    demoPhone: "9876543210",
    demoName: "Principal Dr. Sharma",
  },
  TEACHER: {
    icon: BookOpen,
    bg: "bg-violet-600",
    text: "text-violet-700",
    badgeBg: "bg-violet-50 text-violet-800 border-violet-200",
    label: "Teacher",
    desc: "Classroom & Attendance Hub",
    demoPhone: "9812345678",
    demoName: "Meera Ma'am (Class 8-A)",
  },
  STUDENT: {
    icon: GraduationCap,
    bg: "bg-cyan-600",
    text: "text-cyan-700",
    badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
    label: "Student",
    desc: "Learning Portal & Assignments",
    demoPhone: "9765432109",
    demoName: "Aarav Sharma (Roll #01)",
  },
  PARENT: {
    icon: Users,
    bg: "bg-emerald-600",
    text: "text-emerald-700",
    badgeBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    label: "Parent",
    desc: "Child Monitoring & Instant UPI Fees",
    demoPhone: "9988776655",
    demoName: "Rajesh Sharma (Parent)",
  },
};

export default function LoginPage() {
  const [role, setRole] = useState<RoleTab>("PARENT");
  const [phone, setPhone] = useState("9988776655");
  const [pin, setPin] = useState("1234");
  const [showPin, setShowPin] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Mode A: Direct PIN / Password Login
  const handlePinLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!pin || pin.length < 4) {
      setError("Please enter your 4-digit security PIN");
      return;
    }

    setError("");
    setLoading(true);
    setStatusMsg("Verifying Credentials...");

    try {
      const res = await signIn("credentials", {
        phone,
        password: pin,
        role,
        authMode: "PASSWORD",
        redirect: false,
      });

      if (res?.error) {
        setError("Incorrect PIN. Use default PIN '1234' or click 'Forgot PIN' below.");
        setLoading(false);
        setStatusMsg("");
      } else {
        setStatusMsg("Access Granted! Opening portal...");
        await new Promise((r) => setTimeout(r, 400));
        const dest =
          role === "ADMIN"
            ? "/dashboard"
            : role === "TEACHER"
            ? "/teacher/dashboard"
            : role === "STUDENT"
            ? "/student/dashboard"
            : "/parent/overview";
        router.push(dest);
      }
    } catch {
      setError("Login failed due to a network issue. Please retry.");
      setLoading(false);
      setStatusMsg("");
    }
  };

  // Recovery: Forgot PIN -> Dispatch WhatsApp OTP
  const handleForgotPinOtp = async () => {
    if (!phone || phone.length < 10) {
      setError("Please enter your mobile number first");
      return;
    }
    setError("");
    setLoading(true);
    setStatusMsg("Sending recovery OTP via WhatsApp...");

    try {
      const res = await fetch("/api/v1/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, role }),
      });
      const data = await res.json();

      if (data.success) {
        setStatusMsg("Recovery Code Sent! Redirecting...");
        await new Promise((r) => setTimeout(r, 300));
        router.push(`/verify?phone=${encodeURIComponent(phone)}&role=${role}`);
      } else {
        setError(data.error || "Failed to dispatch recovery OTP");
        setLoading(false);
        setStatusMsg("");
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
      setStatusMsg("");
    }
  };

  // 1-Click Instant Demo Login
  const handleQuickDemoLogin = async (selectedRole: RoleTab) => {
    const d = roleConfig[selectedRole];
    setRole(selectedRole);
    setPhone(d.demoPhone);
    setPin("1234");
    setLoading(true);
    setStatusMsg(`Signing in as ${d.label}...`);

    try {
      const res = await signIn("credentials", {
        phone: d.demoPhone,
        password: "1234",
        role: selectedRole,
        authMode: "PASSWORD",
        redirect: false,
      });

      if (!res?.error) {
        setStatusMsg("Access Granted!");
        const dest =
          selectedRole === "ADMIN"
            ? "/dashboard"
            : selectedRole === "TEACHER"
            ? "/teacher/dashboard"
            : selectedRole === "STUDENT"
            ? "/student/dashboard"
            : "/parent/overview";
        router.push(dest);
      } else {
        setError("Demo login failed.");
        setLoading(false);
      }
    } catch {
      setError("Demo login failed.");
      setLoading(false);
    }
  };

  const currentRole = roleConfig[role];
  const RoleIcon = currentRole.icon;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-lg relative">
      {/* Top Header */}
      <div className="text-center mb-6">
        <div
          className={cn(
            "w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-white shadow-sm transition-all",
            currentRole.bg
          )}
        >
          <RoleIcon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Unified Multi-Portal Access
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          {currentRole.desc}
        </p>
      </div>

      {/* Role Switcher Tabs */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-xl mb-6 text-center text-xs font-semibold">
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
                "py-2 rounded-lg transition-all flex flex-col items-center gap-1",
                role === tab
                  ? "bg-white text-slate-900 shadow-sm font-bold scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span className="text-[10px]">{roleConfig[tab].label}</span>
            </button>
          );
        })}
      </div>

      {/* 🔒 PRIMARY PIN LOGIN FORM */}
      <form onSubmit={handlePinLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Registered Mobile Number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
              +91
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              maxLength={10}
              disabled={loading}
              className="w-full pl-12 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 font-mono transition-all"
            />
            <Phone className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-semibold text-slate-700">
              4-Digit Security PIN
            </label>
          </div>
          <div className="relative">
            <input
              type={showPin ? "text" : "password"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN (default: 1234)"
              maxLength={8}
              disabled={loading}
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 font-mono tracking-wider transition-all"
            />
            <KeyRound className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <button
              type="button"
              onClick={() => setShowPin(!showPin)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Recovery */}
        <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded bg-slate-100 border-slate-300 text-slate-900 focus:ring-0"
            />
            <span>Stay Signed In</span>
          </label>

          <button
            type="button"
            onClick={handleForgotPinOtp}
            className="font-semibold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 hover:underline transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Forgot PIN? WhatsApp OTP →</span>
          </button>
        </div>

        {/* Status */}
        {loading && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center gap-2 text-blue-800 text-xs font-semibold">
            <Loader2 className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
            <span>{statusMsg || "Authenticating..."}</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-3 bg-rose-50 text-rose-700 text-xs font-medium rounded-xl border border-rose-200">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying...</span>
            </>
          ) : (
            <>
              <span>Sign In to {currentRole.label} Portal</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* ⚡ 1-Click Demo Login */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
            <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>1-Click Quick Demo Access</span>
          </div>
          <span className="text-[10px] text-slate-400">Skip PIN</span>
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
                className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-left transition-all text-xs group"
              >
                <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-white shadow-xs", d.bg)}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-slate-800 group-hover:text-slate-900 truncate">{d.label}</p>
                  <p className="text-[9px] text-slate-500 truncate">{d.demoName}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dev Mode Banner */}
      <div className="mt-4 p-2.5 bg-violet-50 border border-violet-100 rounded-xl flex items-center justify-between text-violet-900 text-[11px] font-medium">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
          <span>Default PIN: <strong className="font-mono text-violet-800 font-bold">1234</strong></span>
        </div>
        <Lock className="w-3.5 h-3.5 text-violet-500" />
      </div>
    </div>
  );
}
