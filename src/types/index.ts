export type UserRole = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";

export interface UserSession {
  id: string;
  name?: string | null;
  phone: string;
  role: UserRole;
  schoolId: string;
}

export interface SchoolData {
  id: string;
  name: string;
  licenseKey: string;
  boardType: "CBSE" | "ICSE" | "STATE";
  currency: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
  role?: UserRole;
}
