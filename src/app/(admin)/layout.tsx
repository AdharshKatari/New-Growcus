import { ReactNode } from "react";
import { PortalShell } from "@/components/layout/PortalShell";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell role="ADMIN" userPhone="+91 98765 43210" schoolName="Growcus Central Admin">
      {children}
    </PortalShell>
  );
}
