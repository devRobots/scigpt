/* eslint-disable react-hooks/exhaustive-deps */
import { generateObjectives, generateQueries, generateThesis } from '@/app/lib/writer/ai';
import { getDraft } from '@/app/lib/firebase/firestore';
import { useCallback, useState } from 'react';

export function useDraft(uuid: string) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [queryList, setQueryList] = useState<string[]>([]);
  const [thesisList, setThesisList] = useState<string[]>([]);
  const [objectivesList, setObjectivesList] = useState<string[]>([]);

  const genThesis = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      const draft = await getDraft(uuid);
      if (!draft) throw new Error('Draft not found');

      const { topics, field_of_study } = draft;
      const data = await generateThesis(topics, field_of_study);
      setThesisList(data);
    }
    catch (e: any) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }
  }, [uuid]);

  const genObjectives = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      const draft = await getDraft(uuid);
      if (!draft) throw new Error('Draft not found');

      const { thesis, topics, field_of_study } = draft;
      const data = await generateObjectives(thesis!, topics, field_of_study);
      setObjectivesList(data);
    }
    catch (e: any) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }
  }, [uuid]);

  const genQueries = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      const draft = await getDraft(uuid);
      if (!draft) throw new Error('Draft not found');

      const { thesis, topics, field_of_study } = draft;
      const data = await generateQueries(thesis!, topics, field_of_study);
      setQueryList(data);
    }
    catch (e: any) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }
  }, [uuid]);

  return {
    thesisList: thesisList,
    queryList: queryList,
    objectivesList: objectivesList,
    loading, error,
    genThesis, genObjectives, genQueries
  };
}