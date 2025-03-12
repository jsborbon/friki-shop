import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define routes that require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Protect dashboard and subroutes
  "/profile(.*)", // Protect user profiles
  "/orders(.*)", // Protect order history
  "/cart/checkout", // Protect checkout process
  "/api/protected(.*)", // Protect API endpoints under /api/protected
]);

// Define routes restricted to admin users only
const isAdminRoute = createRouteMatcher([
  "/admin(.*)", // Admin-only routes
  "/api/admin/(.*)", // Admin-only API endpoints
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, getToken } = await auth();
  const token = await getToken(); // Fetch session token
  let userRole = "user"; // Default role

  if (token) {
    const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT token
    userRole = payload?.role || "user"; // Extract user role from token
  }

  // Redirect unauthenticated users to sign-in page
  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Redirect non-admins away from admin routes
  if (isAdminRoute(req) && userRole !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next(); // Allow access if authentication passes
});

export const config = {
  matcher: [
    "/(dashboard|profile|orders|cart|admin)/:path*",
    "/api/:path*"
  ]
};
