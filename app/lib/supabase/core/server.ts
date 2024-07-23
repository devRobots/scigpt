import { CookieOptions, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export const createClient = () => {
    const cookieStore = cookies();

    return createServerClient<any>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                setAll: (cookies: {
                    name: string;
                    value: string;
                    options: CookieOptions;
                }[]) => {
                    cookies.forEach(cookie => {
                        cookieStore.set(cookie.name, cookie.value, cookie.options);
                    });
                },
                getAll: cookieStore.getAll
            }
        }
    );
};