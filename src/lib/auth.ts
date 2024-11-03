import prisma from "@/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth"
import Github from "next-auth/providers/github";
import { NextResponse } from "next/server";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Github],
  pages: {
    signIn: '/signin'
  },

  session: {
    strategy: 'jwt'
  }
});

export const authMiddleware = auth((req) => {
    const isLoggedIn = !!req.auth;
    const isHomePage = req.nextUrl.pathname === '/';
    const isPublicFile = req.nextUrl.pathname.includes('.');
  
    // Allow access to public files and auth-related pages
    if (isPublicFile) {
      return NextResponse.next();
    }
  
    // Allow home page for everyone
    if (isHomePage) {
      return NextResponse.next();
    }
  
    // Redirect to home if not logged in
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  
    // Allow access to all other routes for logged-in users
    return NextResponse.next();
  });
