'use client';

import { useDraft } from '@/app/hooks/useDraft';
import { usePager } from '@/app/hooks/usePager';
import { useThesis } from '@/app/hooks/useThesis';
import ThesisList from '@/app/writer/thesis/Thesis';
import { Spinner } from '@nextui-org/react';
import { useEffect } from 'react';

export default function Thesis() {
  const { draft } = useDraft();
  const { setPage } = usePager();

  const { thesis, loading, getThesis } = useThesis();

  useEffect(() => {
    setPage('2');
    getThesis(draft.topics, draft.fieldOfStudy);
  }, []);

  return (
    <main className="p-8">
      <h1 className="editorial-header mb-8">Thesis</h1>
      {loading ? <Spinner /> : <ThesisList thesis={thesis} />}
    </main>
  );
}
