"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Shield, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type RoleTab = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";

export default function LoginPage() {
  const [role, setRole] = useState<RoleTab>("PARENT");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/v1/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, role }),
      });
      const data = await res.json();

      if (data.success) {
        router.push(`/verify?phone=${encodeURIComponent(phone)}&role=${role}`);
      } else {
        setError(data.error || "Failed to send OTP");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <div className="text-center mb-6">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Unified Multi-Portal Access
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Passwordless 4-digit OTP login via WhatsApp
        </p>
      </div>

      {/* Role Tab Switcher (PRD AUTH-01) */}
      <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-lg mb-6 text-center text-xs font-semibold">
        {(["ADMIN", "TEACHER", "STUDENT", "PARENT"] as RoleTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setRole(tab)}
            className={cn(
              "py-2 rounded-md transition-all duration-150",
              role === tab
                ? "bg-white text-slate-900 shadow-xs font-bold"
                : "text-slate-500 hover:text-slate-900"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Login Form */}
      <form onSubmit={handleRequestOtp} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Registered WhatsApp Number
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
              className="w-full pl-12 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800 font-mono"
            />
            <Phone className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-xs font-medium rounded-lg border border-red-200">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[--color-pay] hover:bg-[--color-pay-light] text-white font-bold text-xs rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98]"
        >
          <span>{loading ? "Dispatching OTP..." : `Request WhatsApp OTP (${role})`}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {/* Dev Mode Banner */}
      <div className="mt-6 p-3 bg-violet-50 border border-violet-100 rounded-lg flex items-center gap-2 text-violet-900 text-xs font-medium">
        <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
        <span>Dev Mode Active: Use code <strong className="font-mono">1234</strong> on verification step.</span>
      </div>
    </div>
  );
}
