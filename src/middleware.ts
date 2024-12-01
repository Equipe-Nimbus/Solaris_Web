import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const isAuthenticated = req.cookies.get("user");
    if (!isAuthenticated) {
        const redirectUrl = process.env.NEXT_PUBLIC_UNAUTHENTICATED_REDIRECT_URL;
        if (redirectUrl) {
            return NextResponse.redirect(redirectUrl);
        } else {
            throw new Error("NEXT_PUBLIC_UNAUTHORIZED_REDIRECT_URL is not defined");
        }
    }
}

export const config = {
    matcher: '/app/:path*',
};