'use client';

import { usePager } from '@/app/hooks/usePager';
import { usePaper } from '@/app/hooks/usePaper';
import { useThesis } from '@/app/hooks/useThesis';
import ThesisList from '@/app/writer/thesis/Thesis';
import { useEffect } from 'react';

export default function Thesis() {
  const { paper } = usePaper();
  const { setPage } = usePager();

  const { thesis, loading, getThesis } = useThesis();

  useEffect(() => {
    setPage('2');
    getThesis(paper.topic, paper.fieldOfStudy);
  }, []);

  return (
    <main className="p-8">
      <h1 className="editorial-header mb-8">Thesis</h1>
      {loading ? <p>Loading...</p> : <ThesisList thesis={thesis} />}
    </main>
  );
}
