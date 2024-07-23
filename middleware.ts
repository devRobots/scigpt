import { createClient, updateSession } from '@/app/lib/supabase/core/middleware';
import { type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { supabase } = createClient(request);
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