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

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    const digit = value.slice(-1);
    if (digit && !/^\d+$/.test(digit)) return;

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

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
    setStatusMsg("Validating Security Token...");

    try {
      await new Promise((r) => setTimeout(r, 400));
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
    } catch {
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

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-lg relative">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-3 shadow-xs">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Verify WhatsApp Security Code
        </h1>
        <p className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
          <span>Sent to</span>
          <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
            +91 {phone}
          </span>
        </p>
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
                  "w-12 h-14 text-center text-2xl font-mono font-bold bg-slate-50 border rounded-xl focus:outline-none transition-all duration-150 text-slate-900",
                  digit
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-xs"
                    : "border-slate-200 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                )}
              />
            ))}
          </div>

          <div className="text-center mt-3">
            <button
              type="button"
              onClick={fillDevOtp}
              className="text-[11px] font-medium text-violet-700 hover:underline flex items-center gap-1 mx-auto"
            >
              <Sparkles className="w-3 h-3 text-violet-600" />
              Auto-fill Dev Code (1234)
            </button>
          </div>
        </div>

        {loading && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center gap-2 text-blue-800 text-xs font-semibold">
            <Loader2 className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
            <span>{statusMsg || "Verifying..."}</span>
          </div>
        )}

        {error && (
          <div className="p-3 bg-rose-50 text-rose-700 text-xs font-medium rounded-xl border border-rose-200 text-center">
            {error}
          </div>
        )}

        {resendSuccess && (
          <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-200 text-center flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>New OTP sent via WhatsApp!</span>
          </div>
        )}

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
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticate & Enter Portal</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Login</span>
        </button>
        <button
          type="button"
          onClick={handleResend}
          disabled={resending || loading}
          className="flex items-center gap-1.5 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={cn("w-3.5 h-3.5", resending && "animate-spin")} />
          <span>{resending ? "Sending..." : "Resend OTP"}</span>
        </button>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-slate-600 text-xs bg-white rounded-2xl border border-slate-200">
          <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-slate-800" />
          Loading verification...
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
