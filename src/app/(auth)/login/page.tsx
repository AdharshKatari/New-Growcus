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
    desc: "Executive Control & Finance",
    demoPhone: "9876543210",
    demoName: "Principal Dr. Sharma",
  },
  TEACHER: {
    icon: BookOpen,
    gradient: "from-violet-600 to-purple-700",
    label: "Teacher",
    desc: "Classroom & Gradebook Hub",
    demoPhone: "9812345678",
    demoName: "Meera Ma'am (Class 8-A)",
  },
  STUDENT: {
    icon: GraduationCap,
    gradient: "from-cyan-500 to-blue-600",
    label: "Student",
    desc: "Learning Portal & Quizzes",
    demoPhone: "9765432109",
    demoName: "Aarav Sharma (Roll #01)",
  },
  PARENT: {
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
    label: "Parent",
    desc: "Child Monitoring & UPI Fees",
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
    setStatusMsg("Verifying PIN & Security Credentials...");

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
        setStatusMsg("Access Granted! Routing to portal...");
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
    setStatusMsg("Dispatching recovery OTP via WhatsApp Business API...");

    try {
      const res = await fetch("/api/v1/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, role }),
      });
      const data = await res.json();

      if (data.success) {
        setStatusMsg("Recovery Code Sent! Redirecting to OTP Verification...");
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
    setStatusMsg(`Logging into ${d.label} Portal...`);

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
    <div className="bg-white/[0.08] backdrop-blur-2xl rounded-2xl border border-white/[0.12] p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Top Accent Bar */}
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
          Unified Multi-Portal Gateway
        </h1>
        <p className="text-xs text-blue-200/70 mt-1">
          {currentRole.desc}
        </p>
      </div>

      {/* Role Switcher Tabs */}
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

      {/* 🔒 MODE A: PRIMARY PIN LOGIN FORM */}
      <form onSubmit={handlePinLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-blue-100/80 mb-1.5">
            Registered Mobile Number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-200/60">
              +91
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="98765 43210"
              maxLength={10}
              disabled={loading}
              className="w-full pl-12 pr-10 py-3 text-sm bg-white/[0.06] border border-white/[0.1] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder:text-blue-200/30 font-mono transition-all"
            />
            <Phone className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-blue-300/40" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="block text-xs font-semibold text-blue-100/80">
              4-Digit Security PIN
            </label>
          </div>
          <div className="relative">
            <input
              type={showPin ? "text" : "password"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter 4-digit PIN (default: 1234)"
              maxLength={8}
              disabled={loading}
              className="w-full pl-10 pr-10 py-3 text-sm bg-white/[0.06] border border-white/[0.1] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder:text-blue-200/30 transition-all font-mono tracking-wider"
            />
            <KeyRound className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-300/40" />
            <button
              type="button"
              onClick={() => setShowPin(!showPin)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300/50 hover:text-white"
            >
              {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Recovery Links */}
        <div className="flex items-center justify-between text-xs text-blue-200/70 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded bg-white/10 border-white/20 text-blue-500 focus:ring-0"
            />
            <span>Stay Signed In</span>
          </label>
          
          <button
            type="button"
            onClick={handleForgotPinOtp}
            className="font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 hover:underline transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            <span>Forgot PIN? WhatsApp OTP →</span>
          </button>
        </div>

        {/* Live Loading Status */}
        {loading && (
          <div className="p-3 bg-blue-500/15 border border-blue-400/30 rounded-xl flex items-center justify-center gap-3 text-blue-200 text-xs font-semibold backdrop-blur-sm animate-pulse">
            <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
            <span>{statusMsg || "Authenticating..."}</span>
          </div>
        )}

        {/* Error Feedback */}
        {error && (
          <div className="p-3 bg-red-500/20 text-red-200 text-xs font-medium rounded-xl border border-red-500/30 backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Primary Submit Button */}
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
              <span>Verifying PIN...</span>
            </>
          ) : (
            <>
              <span>Sign In with PIN ({currentRole.label})</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* ⚡ 1-Click Instant Demo Login Buttons */}
      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
            <Zap className="w-3.5 h-3.5 fill-amber-300" />
            <span>1-Click Instant Demo Access</span>
          </div>
          <span className="text-[10px] text-blue-200/50">Skip PIN</span>
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

      {/* Dev Mode Banner */}
      <div className="mt-4 p-2.5 bg-violet-500/10 border border-violet-400/20 rounded-xl flex items-center justify-between text-violet-200 text-[11px] font-medium backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
          <span>Default Security PIN: <strong className="font-mono text-violet-300 font-bold">1234</strong></span>
        </div>
        <Lock className="w-3 h-3 text-violet-400" />
      </div>
    </div>
  );
}
