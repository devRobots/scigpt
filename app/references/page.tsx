'use client';

import ReferenceCard from '@/app/references/ReferenceCard';
import { searchPapers } from '@/lib/papers';
import { Paper } from '@/types/paper';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function References() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || 'lorem ipsum';
  const fieldOfStudy = searchParams.get('fieldOfStudy') || 'Computer Science';

  const [papers, setPapers] = useState<Paper[]>([]);

  useEffect(() => {
    searchPapers(query).then(setPapers);
  }, []);

  return (
    <main className="p-8">
      <h1 className="editorial-header mb-8">Referentes</h1>
      <div className="columns-4">
        {papers.map((paper) => {
          console.log(paper);
          return paper && <ReferenceCard paper={paper} />;
        })}
      </div>
    </main>
  );
}
