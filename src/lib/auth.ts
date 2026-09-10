import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyOTP } from "@/features/auth/services/otp.service";
import { prisma } from "@/lib/prisma";
import { UserRole } from "@/types";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.phone = (user as any).phone;
        token.role = (user as any).role;
        token.schoolId = (user as any).schoolId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        (session.user as any).phone = token.phone as string;
        (session.user as any).role = token.role as UserRole;
        (session.user as any).schoolId = token.schoolId as string;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      name: "WhatsApp OTP",
      credentials: {
        phone: { label: "Phone Number", type: "tel" },
        otp: { label: "OTP Code", type: "text" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        const phone = credentials?.phone as string;
        const otp = credentials?.otp as string;
        const requestedRole = (credentials?.role as UserRole) || "PARENT";

        if (!phone || !otp) return null;

        const isValid = await verifyOTP(phone, otp);
        if (!isValid) return null;

        try {
          // Find or auto-provision user during dev/demo phase
          let user = await prisma.user.findFirst({
            where: { phone },
            include: { school: true },
          });

          if (!user) {
            let defaultSchool = await prisma.school.findFirst();
            if (!defaultSchool) {
              defaultSchool = await prisma.school.create({
                data: {
                  name: "Growcus Model Academy",
                  licenseKey: "GROWCUS-DEMO-2026",
                  boardType: "CBSE",
                },
              });
            }

            user = await prisma.user.create({
              data: {
                phone,
                role: requestedRole,
                schoolId: defaultSchool.id,
                name: `Demo ${requestedRole}`,
              },
              include: { school: true },
            });
          }

          return {
            id: user.id,
            phone: user.phone,
            role: user.role,
            schoolId: user.schoolId,
            name: user.name,
          };
        } catch (dbErr) {
          console.warn("[Auth] Database connection warning (using mock dev user session):", dbErr);
          return {
            id: "demo-user-id",
            phone,
            role: requestedRole,
            schoolId: "sch-1",
            name: `Demo User (${requestedRole})`,
          };
        }
      },
    }),
  ],
});
