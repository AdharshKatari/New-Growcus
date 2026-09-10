import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

const ROLE_ROUTES: Record<string, string[]> = {
  "/dashboard": ["ADMIN"],
  "/admissions": ["ADMIN"],
  "/fees": ["ADMIN"],
  "/billing": ["ADMIN"],
  "/students": ["ADMIN"],
  "/hr": ["ADMIN"],
  "/timetable": ["ADMIN"],
  "/inventory": ["ADMIN"],
  "/transport": ["ADMIN"],
  "/compliance": ["ADMIN"],
  "/exports": ["ADMIN"],
  "/settings": ["ADMIN"],
  "/analytics": ["ADMIN"],
  "/teacher": ["TEACHER", "ADMIN"],
  "/student": ["STUDENT", "ADMIN"],
  "/parent": ["PARENT", "ADMIN"],
};

export default auth(async (req) => {
  const { nextUrl, auth: session } = req;
  const pathname = nextUrl.pathname;

  // Allow public marketplace, auth endpoints & public API
  const isPublic = [
    "/",
    "/search",
    "/schools",
    "/compare",
    "/apply",
    "/onboarding",
    "/bus-routes",
    "/fee-estimator",
    "/events",
    "/blog",
    "/help",
    "/login",
    "/verify",
    "/register",
    "/recover",
    "/api",
  ].some((path) => pathname === path || pathname.startsWith(`${path}/`));

  if (isPublic && !pathname.startsWith("/dashboard") && !pathname.startsWith("/teacher") && !pathname.startsWith("/student") && !pathname.startsWith("/parent")) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users accessing protected portal routes to login
  if (!session?.user) {
    if (!isPublic) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  // Check role-based route permissions
  for (const [routePrefix, allowedRoles] of Object.entries(ROLE_ROUTES)) {
    if (pathname.startsWith(routePrefix)) {
      if (!allowedRoles.includes(session.user.role)) {
        // Redirect to their appropriate portal home if role mismatch
        const roleHome =
          session.user.role === "ADMIN"
            ? "/dashboard"
            : session.user.role === "TEACHER"
            ? "/teacher/dashboard"
            : session.user.role === "STUDENT"
            ? "/student/dashboard"
            : "/parent/overview";
        return NextResponse.redirect(new URL(roleHome, req.url));
      }
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public/).*)"],
};
