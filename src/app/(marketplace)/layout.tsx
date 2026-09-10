import { ReactNode } from "react";
import Link from "next/link";

export default function MarketplaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[--color-pay] flex items-center justify-center font-bold text-white text-lg">
            G
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-slate-900">Growcus</span>
            <span className="block text-[10px] text-slate-500 font-medium -mt-1">
              B2C Discovery Marketplace
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <Link href="/search" className="hover:text-slate-900">Find Schools</Link>
          <Link href="/compare" className="hover:text-slate-900">Compare (40 Metrics)</Link>
          <Link href="/fee-estimator" className="hover:text-slate-900">Fee Estimator</Link>
          <Link href="/bus-routes" className="hover:text-slate-900">Bus Simulator</Link>
          <Link href="/events" className="hover:text-slate-900">Live Webinars</Link>
          <Link href="/blog" className="hover:text-slate-900">CBSE/ICSE Guides</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm"
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
          <div>
            <span className="font-bold text-white text-sm">Growcus Marketplace</span>
            <p className="text-[11px] mt-1">Unbiased organic school rankings • Zero lead-gen algorithm bias</p>
          </div>
          <div className="flex gap-4 text-[11px]">
            <Link href="/help" className="hover:text-white">Public Support Node</Link>
            <Link href="/login" className="hover:text-white">School ERP Admin Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
