import { createClient } from "@/app/lib/supabase/client";

const DRAFT_TABLE = 'draft';

export async function getDraft(uuid: string) {
    const supabase = createClient();
    const { data, error } = await supabase.from(DRAFT_TABLE).select().eq('uuid', uuid).single<Draft>();
    return { key: data?.uuid, draft: data };
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

