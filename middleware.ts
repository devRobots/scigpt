import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { Pages } from '@/app/lib/data/consts';

export async function middleware(request: NextRequest) {
  const session = await auth();
  const user = session?.user;

  const basePath = request.nextUrl.origin;
  if (user && request.nextUrl.pathname === Pages.Login) {
    return NextResponse.redirect(new URL(Pages.Writer, basePath));
  }
  if (!user && request.nextUrl.pathname === Pages.Writer) {
    return NextResponse.redirect(new URL(Pages.Login, basePath));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)']
};
