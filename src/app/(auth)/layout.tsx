import { ReactNode } from "react";
import Link from "next/link";
import { GrowcusLogo } from "@/components/brand/GrowcusLogo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white flex flex-col justify-between p-4 md:p-8 font-sans">
      {/* Decorative Mesh Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-emerald-500/10 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Brand Header */}
      <header className="relative z-10 flex items-center justify-between max-w-md w-full mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <GrowcusLogo variant="light" size="sm" />
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-blue-200 hover:text-white transition-colors"
        >
          ← Back to Directory
        </Link>
      </header>

      {/* Form Container */}
      <main className="relative z-10 w-full max-w-md mx-auto my-auto py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-xs text-blue-300/60 max-w-md w-full mx-auto">
        <p>© 2026 Growcus Platform. Zero vendor lock-in multi-tenant ERP.</p>
      </footer>
    </div>
  );
}
