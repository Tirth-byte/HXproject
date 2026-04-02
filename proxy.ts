import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// Routes that require authentication
const PARTICIPANT_ROUTES = ["/dashboard"];
const ADMIN_ROUTES = ["/admin"];
// Routes that should redirect logged-in users away
const AUTH_ROUTES = ["/login", "/register"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuthenticated = !!token;
  const role = token?.role as string | undefined;

  // ── Guard: Authenticated users should not see /login or /register ────────
  if (AUTH_ROUTES.some((r) => pathname.startsWith(r))) {
    if (isAuthenticated) {
      const destination = role === "ADMIN" ? "/admin" : "/dashboard";
      return NextResponse.redirect(new URL(destination, req.url));
    }
    return NextResponse.next();
  }

  // ── Guard: /dashboard/* → requires PARTICIPANT role
  if (PARTICIPANT_ROUTES.some((r) => pathname.startsWith(r))) {
    if (!isAuthenticated || role !== "PARTICIPANT") {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // ── Guard: /admin/* → requires ADMIN role only ───────────────────────────
  if (ADMIN_ROUTES.some((r) => pathname.startsWith(r))) {
    if (!isAuthenticated || role !== "ADMIN") {
      const loginUrl = new URL("/login", req.url);
      loginUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register"],
};
