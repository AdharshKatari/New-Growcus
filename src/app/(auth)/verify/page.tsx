"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { MessageSquare, ArrowLeft, ShieldCheck, RefreshCw } from "lucide-react";

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get("phone") || "9876543210";
  const role = searchParams.get("role") || "PARENT";

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
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

    try {
      const res = await signIn("credentials", {
        phone,
        otp: code,
        role,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid OTP code. Try code 1234 in dev mode.");
      } else {
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
      setError("Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="text-center mb-6">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Enter WhatsApp Verification Code
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Sent to <span className="font-bold text-slate-800">+91 {phone}</span>
        </p>
      </div>

      {/* 4-digit OTP grid */}
      <form onSubmit={handleVerify} className="space-y-6">
        <div className="flex justify-center gap-3">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              id={`otp-input-${idx}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              className="w-12 h-14 text-center text-xl font-mono font-bold bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
          ))}
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-xs font-medium rounded-lg border border-red-200 text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[--color-pay] hover:bg-[--color-pay-light] text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98]"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>{loading ? "Verifying Token..." : `Authenticate as ${role}`}</span>
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-1 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Change Number</span>
        </button>
        <button
          onClick={() => alert("OTP re-dispatched via WhatsApp!")}
          className="flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Resend OTP</span>
        </button>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs">Loading OTP gateway...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
