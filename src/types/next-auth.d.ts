import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { UserRole } from "./index";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone: string;
      role: UserRole;
      schoolId: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    phone: string;
    role: UserRole;
    schoolId: string;
    name?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    phone: string;
    role: UserRole;
    schoolId: string;
  }
}
