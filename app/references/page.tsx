'use client';

import PaperList from '@/app/references/Papers';
import { usePapers } from '@/hooks/usePapers';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function References() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || 'lorem ipsum';
  const fieldOfStudy = searchParams.get('fieldOfStudy') || 'Computer Science';

  const { papers, loading, getPapers } = usePapers();

  useEffect(() => {
    getPapers(query);
  }, []);

  return (
    <main className="p-8">
      <h1 className="editorial-header mb-8">Papers</h1>
      <div className="columns-2">
        {loading ? <p>Loading...</p> : <PaperList papers={papers} />}
      </div>
    </main>
  );
}
