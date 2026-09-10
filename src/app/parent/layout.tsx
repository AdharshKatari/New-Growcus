import { ReactNode } from 'react';
import { PortalShell } from '@/components/layout/PortalShell';

export default function ParentLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      role="PARENT"
      userPhone="+91 98765 00003"
      schoolName="Delhi Public School, Vasant Kunj"
    >
      {children}
    </PortalShell>
  );
}
