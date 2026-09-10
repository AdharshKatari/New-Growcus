import { ReactNode } from "react";
import Link from "next/link";
import { GrowcusLogo } from "@/components/brand/GrowcusLogo";

export default function MarketplaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <GrowcusLogo variant="color" size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <Link href="/search" className="hover:text-slate-900 transition-colors">Find Schools</Link>
          <Link href="/compare" className="hover:text-slate-900 transition-colors">Compare (40 Metrics)</Link>
          <Link href="/fee-estimator" className="hover:text-slate-900 transition-colors">Fee Estimator</Link>
          <Link href="/bus-routes" className="hover:text-slate-900 transition-colors">Bus Simulator</Link>
          <Link href="/events" className="hover:text-slate-900 transition-colors">Live Webinars</Link>
          <Link href="/blog" className="hover:text-slate-900 transition-colors">CBSE/ICSE Guides</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 bg-gradient-to-r from-slate-900 to-indigo-950 hover:from-slate-800 hover:to-indigo-900 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-[0.98]"
          >
            Portal Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">{children}</main>

      {/* Public Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <GrowcusLogo variant="light" size="sm" />
            <div>
              <p className="text-[11px] text-slate-400">Unbiased organic school rankings • Zero lead-gen algorithm bias</p>
            </div>
          </div>
          <div className="flex gap-4 text-[11px]">
            <Link href="/help" className="hover:text-white transition-colors">Public Support Node</Link>
            <Link href="/login" className="hover:text-white transition-colors">School ERP Admin Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
