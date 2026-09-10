"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import {
  MessageSquare,
  ArrowLeft,
  ShieldCheck,
  RefreshCw,
  Loader2,
  CheckCircle2,
  Lock,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";

const roleColors: Record<Role, { badge: string; border: string; glow: string }> = {
  ADMIN: { badge: "from-blue-600 to-indigo-600", border: "border-blue-500/40", glow: "shadow-blue-500/20" },
  TEACHER: { badge: "from-violet-600 to-purple-600", border: "border-violet-500/40", glow: "shadow-violet-500/20" },
  STUDENT: { badge: "from-cyan-500 to-blue-600", border: "border-cyan-500/40", glow: "shadow-cyan-500/20" },
  PARENT: { badge: "from-emerald-500 to-teal-600", border: "border-emerald-500/40", glow: "shadow-emerald-500/20" },
};

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get("phone") || "9876543210";
  const role = (searchParams.get("role") as Role) || "PARENT";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [error, setError] = useState("");
  const [resending, setResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Auto-focus first input
  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Take only last entered digit if typing multiple
    const digit = value.slice(-1);
    if (digit && !/^\d+$/.test(digit)) return; // Only numbers allowed

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    // Auto-advance to next input
    if (digit && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim().slice(0, 4);
    if (/^\d{1,4}$/.test(pasted)) {
      const digits = pasted.split("");
      const newOtp = ["", "", "", ""];
      digits.forEach((d, i) => {
        newOtp[i] = d;
      });
      setOtp(newOtp);
      const nextIndex = Math.min(digits.length, 3);
      inputRefs[nextIndex].current?.focus();
    }
  };

  const fillDevOtp = () => {
    setOtp(["1", "2", "3", "4"]);
    inputRefs[3].current?.focus();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 4) {
      setError("Please enter all 4 digits of the OTP code");
      return;
    }
    setError("");
    setLoading(true);
    setStatusMsg("Validating Security Token with Multi-Portal Auth...");

    try {
      // Simulate visual progress stage 1
      await new Promise((r) => setTimeout(r, 600));
      setStatusMsg("Decrypting session keys...");

      const res = await signIn("credentials", {
        phone,
        otp: code,
        role,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid OTP code. Use code '1234' for Dev Mode access.");
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
    } catch (err) {
      setError("Verification failed due to a network error. Please retry.");
      setLoading(false);
      setStatusMsg("");
    }
  };

  const handleResend = async () => {
    setResending(true);
    setResendSuccess(false);
    try {
      await fetch("/api/v1/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, role }),
      });
      setResendSuccess(true);
      setTimeout(() => setResendSuccess(false), 3000);
    } catch {
      setError("Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  const theme = roleColors[role] || roleColors.PARENT;

  return (
    <div className="bg-white/[0.08] backdrop-blur-2xl rounded-2xl border border-white/[0.12] p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Top Banner accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.badge}`} />

      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
          <MessageSquare className="w-7 h-7" />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight">
          Verify WhatsApp Security Code
        </h1>
        <p className="text-xs text-blue-200/70 mt-1.5 flex items-center justify-center gap-1.5">
          <span>Sent to</span>
          <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            +91 {phone}
          </span>
        </p>
        <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider bg-white/[0.06] border border-white/[0.1]">
          <span>Role:</span>
          <span className={`bg-gradient-to-r ${theme.badge} px-2 py-0.2 rounded text-white`}>
            {role}
          </span>
        </div>
      </div>

      {/* 4-digit OTP grid */}
      <form onSubmit={handleVerify} className="space-y-6">
        <div>
          <div className="flex justify-center gap-3">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                disabled={loading}
                className={cn(
                  "w-12 h-14 text-center text-2xl font-mono font-bold bg-white/[0.06] border rounded-xl focus:outline-none transition-all duration-200 text-white placeholder-blue-300/30",
                  digit
                    ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-300 shadow-lg shadow-emerald-500/10 scale-105"
                    : "border-white/[0.15] focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                )}
              />
            ))}
          </div>

          {/* Quick Auto-Fill Button for Dev Mode */}
          <div className="text-center mt-3">
            <button
              type="button"
              onClick={fillDevOtp}
              className="text-[11px] font-medium text-violet-300/80 hover:text-violet-200 underline decoration-dotted flex items-center gap-1 mx-auto"
            >
              <Sparkles className="w-3 h-3 text-violet-400" />
              Auto-fill Dev Code (1234)
            </button>
          </div>
        </div>

        {/* Live Loading & Verification Status Indicator */}
        {loading && (
          <div className="p-3.5 bg-blue-500/15 border border-blue-400/30 rounded-xl flex items-center justify-center gap-3 text-blue-200 text-xs font-semibold backdrop-blur-sm animate-pulse">
            <Loader2 className="w-4 h-4 text-blue-400 animate-spin shrink-0" />
            <span>{statusMsg || "Verifying token..."}</span>
          </div>
        )}

        {/* Error Feedback */}
        {error && (
          <div className="p-3 bg-red-500/20 text-red-200 text-xs font-medium rounded-xl border border-red-500/30 text-center backdrop-blur-sm">
            {error}
          </div>
        )}

        {/* Resend success notice */}
        {resendSuccess && (
          <div className="p-3 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-xl border border-emerald-500/30 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>New OTP dispatched via WhatsApp API!</span>
          </div>
        )}

        {/* Submit Verification Button */}
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "w-full py-3.5 text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] bg-gradient-to-r",
            theme.badge,
            loading ? "opacity-75 cursor-not-allowed" : "hover:brightness-110 hover:shadow-2xl"
          )}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying Token...</span>
            </>
          ) : (
            <>
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticate & Enter Portal</span>
            </>
          )}
        </button>
      </form>

      {/* Navigation & Resend Actions */}
      <div className="mt-6 flex items-center justify-between text-xs text-blue-200/60 border-t border-white/[0.08] pt-4">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Change Mobile Number</span>
        </button>
        <button
          type="button"
          onClick={handleResend}
          disabled={resending || loading}
          className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-3.5 h-3.5", resending && "animate-spin")} />
          <span>{resending ? "Dispatching..." : "Resend OTP"}</span>
        </button>
      </div>

      {/* Security footer badge */}
      <div className="mt-4 pt-3 text-center border-t border-white/[0.04]">
        <span className="text-[10px] text-blue-300/40 flex items-center justify-center gap-1 font-mono">
          <Lock className="w-3 h-3" /> End-to-End Encrypted Token Authentication
        </span>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-white text-xs bg-white/[0.08] rounded-2xl border border-white/10">
          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-blue-400" />
          Loading OTP gateway...
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
