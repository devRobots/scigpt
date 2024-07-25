import { updateSession } from '@/app/lib/supabase/core/middleware';
import { type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    return await updateSession(request);
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)'],
}