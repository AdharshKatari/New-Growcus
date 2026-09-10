import { ReactNode } from "react";
import Link from "next/link";
import { GrowcusLogo } from "@/components/brand/GrowcusLogo";
import { ArrowRight, Building2, Layers } from "lucide-react";

export default function MarketplaceLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 md:px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <GrowcusLogo variant="color" size="sm" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
          <Link href="/search" className="hover:text-slate-900 transition-colors">Find Schools</Link>
          <Link href="/features" className="hover:text-slate-900 transition-colors flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            ERP Modules
          </Link>
          <Link href="/pricing" className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5" />
            Pricing & For Schools
          </Link>
          <Link href="/compare" className="hover:text-slate-900 transition-colors">Compare (40 Metrics)</Link>
          <Link href="/bus-routes" className="hover:text-slate-900 transition-colors">Bus Simulator</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/pricing#book-demo"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold rounded-lg border border-blue-200 transition-all"
          >
            <span>Book School Demo</span>
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-[0.98]"
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
          <div className="flex flex-wrap gap-4 text-[11px]">
            <Link href="/features" className="hover:text-white transition-colors">ERP Modules & Features</Link>
            <Link href="/pricing" className="text-blue-400 font-bold hover:text-white transition-colors">
              School ERP Pricing & Plans
            </Link>
            <Link href="/login" className="hover:text-white transition-colors">School ERP Admin Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
