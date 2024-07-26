/* eslint-disable react-hooks/exhaustive-deps */
import { generateObjectives, generateThesis } from '@/app/lib/writer/ai';
import { getCacheByDraftUUID, getDraft, updateCacheByDraftUUID } from '@/app/lib/supabase/queries';
import { useCallback, useEffect, useState } from 'react';
import type { Cache, Draft } from '@/app/types/draft';

export function useDraft(uuid: string) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cache, setCache] = useState<Cache | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);

  const fetchDraft = useCallback(async () => {
    if (draft) return;
    const data = await getDraft(uuid);
    setDraft(data);
  }, [uuid]);

  const fetchCache = useCallback(async () => {
    if (cache) return;
    const data = await getCacheByDraftUUID(uuid);
    setCache(data);
  }, [uuid]);

  useEffect(() => {
    async function updateCache() {
      if (!cache) return;
      await updateCacheByDraftUUID(uuid, cache);
    }
    updateCache();
  }, [cache]);

  async function genList(target: string, handler: any) {
    try {
      await fetchCache();
      if (cache && cache[target as keyof Cache]) return;
      await fetchDraft();
      if (!draft) throw new Error('Draft not found');
      const data = await handler(draft);
      setCache({ draft_uuid: uuid, [target]: data });
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const genThesis = useCallback(async () => {
    genList('thesis', (draft: Draft) => {
      const { topics, field_of_study } = draft;
      return generateThesis(topics, field_of_study);
    });
  }, [uuid]);

  const genObjectives = useCallback(async () => {
    genList('objectives', (draft: Draft) => {
      const { thesis, topics, field_of_study } = draft;
      return generateObjectives(thesis!, topics, field_of_study);
    });
  }, [uuid]);

  return {
    thesisList: cache?.thesis,
    objectivesList: cache?.objectives,
    draft, loading, error,
    genThesis, genObjectives
  };
}