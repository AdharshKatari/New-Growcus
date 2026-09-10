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
  CheckSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

type RoleTab = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
type AuthMethod = "PASSWORD" | "OTP";

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
    desc: "School Management & Executive Control",
    demoPhone: "9876543210",
    demoName: "Principal Dr. Sharma",
  },
  TEACHER: {
    icon: BookOpen,
    gradient: "from-violet-600 to-purple-700",
    label: "Teacher",
    desc: "Classroom & Attendance Hub",
    demoPhone: "9812345678",
    demoName: "Meera Ma'am (Class 8-A)",
  },
  STUDENT: {
    icon: GraduationCap,
    gradient: "from-cyan-500 to-blue-600",
    label: "Student",
    desc: "Learning Portal & Assignments",
    demoPhone: "9765432109",
    demoName: "Aarav Sharma (Roll #01)",
  },
  PARENT: {
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
    label: "Parent",
    desc: "Attendance & Instant UPI Fees",
    demoPhone: "9988776655",
    demoName: "Rajesh Sharma (Parent)",
  },
};

export default function LoginPage() {
  const [role, setRole] = useState<RoleTab>("PARENT");
  const [authMethod, setAuthMethod] = useState<AuthMethod>("PASSWORD");
  const [phone, setPhone] = useState("9988776655");
  const [password, setPassword] = useState("pass1234");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Direct Password / PIN Login
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!password || password.length < 4) {
      setError("Please enter your password or 4-digit PIN");
      return;
    }

    setError("");
    setLoading(true);
    setStatusMsg("Authenticating credentials...");

    try {
      const res = await signIn("credentials", {
        phone,
        password,
        role,
        authMode: "PASSWORD",
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid credentials. Try password 'pass1234' or use WhatsApp OTP.");
        setLoading(false);
        setStatusMsg("");
      } else {
        setStatusMsg("Access Granted! Opening dashboard...");
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
      setError("Login failed due to a network error. Please try again.");
      setLoading(false);
      setStatusMsg("");
    }
  };

  // WhatsApp OTP Fallback Request
  const handleRequestOtp = async () => {
    if (!phone || phone.length < 10) {
      setError("Please enter a valid 10-digit mobile number for OTP");
      return;
    }
    setError("");
    setLoading(true);
    setStatusMsg("Connecting to WhatsApp Business API...");

    try {
      await new Promise((r) => setTimeout(r, 300));
      setStatusMsg("Dispatching 4-Digit Security Code...");

      const res = await fetch("/api/v1/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, role }),
      });
      const data = await res.json();

      if (data.success) {
        setStatusMsg("OTP Dispatched! Redirecting...");
        await new Promise((r) => setTimeout(r, 200));
        router.push(`/verify?phone=${encodeURIComponent(phone)}&role=${role}`);
      } else {
        setError(data.error || "Failed to send WhatsApp OTP");
        setLoading(false);
        setStatusMsg("");
      }
    } catch {
      setError("Network error sending OTP. Please try again.");
      setLoading(false);
      setStatusMsg("");
    }
  };

  // 1-Click Demo Login
  const handleQuickDemoLogin = async (selectedRole: RoleTab) => {
    const d = roleConfig[selectedRole];
    setRole(selectedRole);
    setPhone(d.demoPhone);
    setPassword("pass1234");
    setLoading(true);
    setStatusMsg(`Logging in as ${d.label}...`);

    try {
      const res = await signIn("credentials", {
        phone: d.demoPhone,
        password: "pass1234",
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
          Unified Portal Access
        </h1>
        <p className="text-xs text-blue-200/70 mt-1">
          {currentRole.desc}
        </p>
      </div>

      {/* Role Switcher Tabs */}
      <div className="grid grid-cols-4 gap-1.5 p-1.5 bg-white/[0.06] rounded-xl mb-5 text-center text-xs font-semibold border border-white/[0.06]">
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

      {/* Auth Method Switcher (Password/PIN vs WhatsApp OTP) */}
      <div className="flex bg-white/[0.04] p-1 rounded-xl mb-5 border border-white/[0.08] text-xs font-semibold">
        <button
          type="button"
          onClick={() => setAuthMethod("PASSWORD")}
          className={cn(
            "flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all",
            authMethod === "PASSWORD"
              ? "bg-white/15 text-white font-bold shadow"
              : "text-blue-200/50 hover:text-white"
          )}
        >
          <KeyRound className="w-3.5 h-3.5 text-blue-300" />
          <span>Password / Quick PIN</span>
        </button>
        <button
          type="button"
          onClick={() => setAuthMethod("OTP")}
          className={cn(
            "flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all",
            authMethod === "OTP"
              ? "bg-white/15 text-white font-bold shadow"
              : "text-blue-200/50 hover:text-white"
          )}
        >
          <Phone className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp OTP</span>
        </button>
      </div>

      {/* FORM MODE A: Direct Password / PIN Login */}
      {authMethod === "PASSWORD" ? (
        <form onSubmit={handlePasswordLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-blue-100/80 mb-1.5">
              Mobile Number or Username
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
                Password or 4-Digit Security PIN
              </label>
              <button
                type="button"
                onClick={() => setAuthMethod("OTP")}
                className="text-[11px] font-medium text-emerald-400 hover:underline"
              >
                Forgot Password? Use OTP →
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (dev: pass1234)"
                disabled={loading}
                className="w-full pl-3 pr-10 py-3 text-sm bg-white/[0.06] border border-white/[0.1] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-white placeholder:text-blue-200/30 transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300/50 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2 text-xs text-blue-200/70">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded bg-white/10 border-white/20 text-blue-500 focus:ring-0"
            />
            <label htmlFor="rememberMe" className="cursor-pointer select-none">
              Remember me on this browser (Persistent Session)
            </label>
          </div>

          {/* Status Message */}
          {loading && (
            <div className="p-3 bg-blue-500/15 border border-blue-400/30 rounded-xl flex items-center justify-center gap-3 text-blue-200 text-xs font-semibold backdrop-blur-sm animate-pulse">
              <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
              <span>{statusMsg || "Authenticating..."}</span>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-500/20 text-red-200 text-xs font-medium rounded-xl border border-red-500/30 backdrop-blur-sm">
              {error}
            </div>
          )}

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
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <span>Sign In to {currentRole.label} Portal</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      ) : (
        /* FORM MODE B: WhatsApp OTP Recovery Mode */
        <div className="space-y-4">
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
                placeholder="98765 43210"
                maxLength={10}
                disabled={loading}
                className="w-full pl-12 pr-10 py-3 text-sm bg-white/[0.06] border border-white/[0.1] rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 text-white placeholder:text-blue-200/30 font-mono transition-all"
              />
              <Phone className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-emerald-400/60" />
            </div>
          </div>

          {loading && (
            <div className="p-3 bg-emerald-500/15 border border-emerald-400/30 rounded-xl flex items-center justify-center gap-3 text-emerald-200 text-xs font-semibold backdrop-blur-sm animate-pulse">
              <Loader2 className="w-4 h-4 text-emerald-400 animate-spin shrink-0" />
              <span>{statusMsg || "Dispatching OTP..."}</span>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-500/20 text-red-200 text-xs font-medium rounded-xl border border-red-500/30 backdrop-blur-sm">
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={handleRequestOtp}
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Code...</span>
              </>
            ) : (
              <>
                <span>Send WhatsApp OTP Access Code</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}

      {/* ⚡ Quick 1-Click Instant Demo Login Buttons */}
      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
            <Zap className="w-3.5 h-3.5 fill-amber-300" />
            <span>Instant 1-Click Demo Login</span>
          </div>
          <span className="text-[10px] text-blue-200/50">Skip Typing</span>
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

      {/* Dev Mode Credentials Note */}
      <div className="mt-4 p-2.5 bg-violet-500/10 border border-violet-400/20 rounded-xl flex items-center justify-between text-violet-200 text-[11px] font-medium backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
          <span>Dev Password: <strong className="font-mono text-violet-300">pass1234</strong></span>
        </div>
        <span className="text-[10px] text-violet-300/70 font-mono">OTP: 1234</span>
      </div>
    </div>
  );
}
