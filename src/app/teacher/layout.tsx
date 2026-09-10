import { ReactNode } from 'react';
import { PortalShell } from '@/components/layout/PortalShell';

export default function TeacherLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      role="TEACHER"
      userPhone="+91 98765 00001"
      schoolName="Delhi Public School, Vasant Kunj"
    >
      {children}
    </PortalShell>
  );
}
