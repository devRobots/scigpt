import { createClient } from "@/app/lib/supabase/core/client";
import { Draft, Cache } from "@/app/types/draft";

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

const CACHE_TABLE = 'cache';

export async function getCacheByDraftUUID(draft_uuid: string): Promise<Cache | null> {
    const supabase = createClient();
    const { data, error } = await supabase.from(CACHE_TABLE).select().eq('draft_uuid', draft_uuid).single<Cache>();
    return data;
}

export async function saveCache(cache: Cache) {
    const supabase = createClient();
    await supabase.from(CACHE_TABLE).insert(cache);
}

export async function updateCacheByDraftUUI(draft_uuid: string, data: any) {
    const supabase = createClient();
    await supabase.from(CACHE_TABLE).update(data).eq('draft_uuid', draft_uuid);
}