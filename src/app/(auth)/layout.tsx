import { ReactNode } from "react";
import Link from "next/link";
import { GrowcusLogo } from "@/components/brand/GrowcusLogo";
import { Shield, CheckCircle2 } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen bg-slate-100 text-slate-900 flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Brand Header */}
      <header className="flex items-center justify-between max-w-md w-full mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <GrowcusLogo variant="color" size="md" />
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors flex items-center gap-1 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs"
        >
          ← Back to Directory
        </Link>
      </header>

      {/* Main Form Container */}
      <main className="w-full max-w-md mx-auto my-auto py-6">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="text-center text-xs text-slate-500 max-w-md w-full mx-auto space-y-2">
        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-blue-600" /> Enterprise 256-bit SSL
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> CBSE Certified
          </span>
        </div>
        <p className="text-[11px] text-slate-400">© 2026 Growcus Smart Campus Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
