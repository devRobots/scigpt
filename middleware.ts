import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const session = await auth();
  const user = session?.user;

  const basePath = request.nextUrl.origin;
  if (user && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/writer', basePath));
  }
  if (!user && request.nextUrl.pathname === '/writer') {
    return NextResponse.redirect(new URL('/login', basePath));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)']
};
