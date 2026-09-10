import { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen bg-slate-50 text-slate-900 flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Brand Header */}
      <header className="flex items-center justify-between max-w-md w-full mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[--color-pay] flex items-center justify-center font-bold text-white text-lg">
            G
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Growcus</span>
            <span className="block text-[10px] text-slate-500 font-medium -mt-1">
              Multi-Portal Gateway
            </span>
          </div>
        </Link>
        <Link href="/" className="text-xs font-semibold text-slate-600 hover:text-slate-900">
          ← Back to Directory
        </Link>
      </header>

      {/* Form Container */}
      <main className="w-full max-w-md mx-auto my-auto py-6">{children}</main>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-500 max-w-md w-full mx-auto">
        <p>© 2026 Growcus Platform. Zero vendor lock-in multi-tenant ERP.</p>
      </footer>
    </div>
  );
}
