import { ReactNode } from 'react';
import { PortalShell } from '@/components/layout/PortalShell';

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      role="STUDENT"
      userPhone="+91 98765 00002"
      schoolName="Delhi Public School, Vasant Kunj"
    >
      {children}
    </PortalShell>
  );
}
