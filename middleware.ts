import { updateSession } from '@/app/lib/supabase/middleware';
import { type NextRequest } from 'next/server';
import { createClient } from './app/lib/supabase/server';

export async function middleware(request: NextRequest) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (data?.user && request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/writer', request.url));
    }
    if (!data?.user && request.nextUrl.pathname.startsWith('/write')) {
        return Response.redirect(new URL('/login', request.url));
    }

    return await updateSession(request);
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)'],
}