import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export const createClient = (request: NextRequest) => {
    let response = NextResponse.next({ request: { headers: request.headers } });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookies: {
                    name: string;
                    value: string;
                    options: CookieOptions;
                }[]) {
                    cookies.forEach(cookie => {
                        response.cookies.set(cookie.name, cookie.value, cookie.options);
                    });
                }
            }
        }
    );

    return { supabase, response };
};

export const updateSession = async (request: NextRequest) => {
    const { supabase, response } = createClient(request);
    const { data } = await supabase.auth.getUser();

    if (data?.user && request.nextUrl.pathname.startsWith('/login')) {
        return Response.redirect(new URL('/writer', request.url));
    }
    if (!data?.user && request.nextUrl.pathname.startsWith('/write')) {
        return Response.redirect(new URL('/login', request.url));
    }

    response.user = data?.user;
    return response;
};