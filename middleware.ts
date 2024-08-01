import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { App, Pages } from '@/app/lib/data/consts';

export async function middleware(request: NextRequest) {
  const session = await auth();
  const user = session?.user;

  const path = request.nextUrl.pathname;
  const basePath = request.nextUrl.origin;

  if (user && path === Pages.Login) {
    return NextResponse.redirect(new URL(Pages.Writer, basePath));
  }
  if (!user && path.includes(Pages.Writer)) {
    return NextResponse.redirect(new URL(Pages.Login, basePath));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)']
};
