import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ✅ HARD PROOF: if middleware runs, /__mw will show text
  if (pathname === "/__mw") {
    return new NextResponse("MIDDLEWARE IS RUNNING ✅", { status: 200 });
  }

  const session = req.cookies.get("civic_session")?.value;

  const isProtected =
    pathname.startsWith("/report") ||
    pathname.startsWith("/officer") ||
    pathname.startsWith("/admin");

  if (isProtected && !session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/__mw", "/report/:path*", "/officer/:path*", "/admin/:path*"],
};
