import { createClient } from "@/app/lib/supabase/core/server";

export async function GET(request: Request) {
    const supabase = createClient();
    const oauthResponse = await supabase.auth.signOut();
    if (oauthResponse.error) {
        return new Response(oauthResponse.error.message, { status: 500 });
    }
    return new Response('OK', { status: 200 });
}