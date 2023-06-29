import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isPasswordEnabled = !!process.env.PASSWORD_PROTECT

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.has('login');
  const isPathPasswordProtect = req.nextUrl.pathname.startsWith("/password");

  if(isPasswordEnabled && !isLoggedIn && !isPathPasswordProtect) {
    return NextResponse.redirect(new URL("/password", req.url))
  }

  return NextResponse.next()
}

export const config = {
	matcher: [
		/*
			* Match all request paths except for the ones starting with:
			* - api (API routes)
			* - _next/static (static files)
			* - favicon.ico (favicon file)
			*/
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
