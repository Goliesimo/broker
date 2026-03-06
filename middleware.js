// middleware.js — place this at the ROOT of your project (same level as package.json)
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const sessionCookie = request.cookies.get("cv_session");
  let session = null;
  try {
    if (sessionCookie?.value) {
      session = JSON.parse(decodeURIComponent(sessionCookie.value));
    }
  } catch {
    session = null;
  }

  const isLoggedIn = !!session;
  const isAdmin    = session?.role === "admin";

  // Protect /dashboard — must be logged in
  if (pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", request.url));
  }

  // Protect /admin — must be logged in AND admin
  if (pathname.startsWith("/admin")) {
    if (!isLoggedIn) return NextResponse.redirect(new URL("/login", request.url));
    if (!isAdmin)    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect already-logged-in users away from login/register
  if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL(isAdmin ? "/admin" : "/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register"],
};
