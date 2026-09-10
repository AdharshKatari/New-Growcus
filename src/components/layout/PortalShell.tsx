import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { MobileNav } from "./MobileNav";
import { UserRole } from "@/types";

interface PortalShellProps {
  children: ReactNode;
  role: UserRole;
  userPhone?: string;
  schoolName?: string;
}

export function PortalShell({
  children,
  role,
  userPhone,
  schoolName,
}: PortalShellProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar Navigation */}
      <div className="hidden md:block">
        <Sidebar role={role} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <TopBar role={role} userPhone={userPhone} schoolName={schoolName} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 pb-20 md:pb-6">
          {children}
        </main>

        <MobileNav role={role} />
      </div>
    </div>
  );
}
