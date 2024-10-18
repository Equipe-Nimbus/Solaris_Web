import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const isAuthenticated = req.cookies.get("user");
    if (!isAuthenticated) {
        return NextResponse.redirect("http://localhost:3000/auth/login");
    }
    
}

export const config = {
    matcher: '/app/:path*',
};