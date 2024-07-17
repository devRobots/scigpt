'use client';

import ThesisList from '@/app/writer/thesis/Thesis';
import { usePager } from '@/hooks/usePager';
import { useThesis } from '@/hooks/useThesis';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Thesis() {
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic') || 'artificial intelligence';
  const fieldOfStudy = searchParams.get('fieldOfStudy') || 'Computer Science';

  const { setPage } = usePager();
  const { thesis, loading, getThesis } = useThesis();

  useEffect(() => {
    setPage('2');
    getThesis(topic, fieldOfStudy);
  }, []);

  return (
    <main className="p-8">
      <h1 className="editorial-header mb-8">Thesis</h1>
      {loading ? <p>Loading...</p> : <ThesisList thesis={thesis} />}
    </main>
  );
}
