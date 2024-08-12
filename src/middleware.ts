import { NextResponse } from "next/server";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const session = request?.nextauth?.token;

    if (request.nextUrl.pathname === "/") return NextResponse.next();
    if (!session && request.nextUrl.pathname !== "/login")
      return NextResponse.redirect(new URL("/login", request.url));
    if (session && request.nextUrl.pathname !== "/resume")
      return NextResponse.redirect(new URL("/resume", request.url));

    return NextResponse.next();
  },

  {
    callbacks: {
      authorized: () => true,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    "/resume/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
