import { generateThesis } from '@/app/lib/writer/ai';
import { getCacheByDraftUUID, getDraft, saveCache, updateCacheByDraftUUI as updateCacheByDraftUUID } from '@/app/lib/supabase/queries';
import { useCallback, useEffect, useState } from 'react';
import type { Cache, Draft } from '@/app/types/draft';

export function useDraft(uuid: string) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cache, setCache] = useState<Cache>();
  const [draft, setDraft] = useState<Draft | null>();

  const fetchDraft = useCallback(async () => {
    if (draft) return;
    const data = await getDraft(uuid);
    setDraft(data);
  }, [uuid]);

  useEffect(() => {
    async function updateCache() {
      if (!cache) return;
      await updateCacheByDraftUUID(uuid, cache);
    }
    console.log('Cache updated');
  }, [cache]);

  const genThesis = useCallback(async () => {
    try {
      await fetchDraft();
      if (!draft) throw new Error('Draft not found');
      const { topics, field_of_study } = draft;
      const data = await generateThesis(topics, field_of_study);
      setCache({ draft_uuid: uuid, thesis: data });
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  }, [uuid]);

  return { cache, draft, loading, error, genThesis };
}