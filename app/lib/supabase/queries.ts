import { createClient } from "@/app/lib/supabase/core/client";
import { Draft } from "@/app/types/draft";

const DRAFT_TABLE = 'draft';

export async function getDraft(uuid: string) {
    const supabase = createClient();
    const { data, error } = await supabase.from(DRAFT_TABLE).select().eq('uuid', uuid).single<Draft>();
    return data;
}

export async function saveDraft(draft: Draft) {
    const supabase = createClient();
    const { data, error } = await supabase.from(DRAFT_TABLE).insert(draft).select().single<Draft>();
    return data?.uuid;
}

export async function updateDraft(uuid: string, data: any) {
    const supabase = createClient();
    await supabase.from(DRAFT_TABLE).update(data).eq('uuid', uuid);
}

export async function getDraftsByUserID() {
    const supabase = createClient();
    const userData = await supabase.auth.getUser();
    const user_id = userData?.data?.user?.id;
    const { data, error } = await supabase.from(DRAFT_TABLE).select().eq('user_id', user_id).order('created_at', { ascending: false });
    return data || [];
}
