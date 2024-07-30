'use client';

import PaperList from '@/app/components/writer/PapersReviews';
import { usePapers } from '@/app/hooks/usePapers';
import { getDraft, updateDraft } from '@/app/lib/firebase/firestore';
import { Button } from '@nextui-org/button';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function References() {
  const router = useRouter();
  const params = useParams();
  const uuid = params.uuid.toString() || '';

  const { papers, loading, getPapers } = usePapers();

  useEffect(() => {
    getDraft(uuid).then(({ draft }) => {
      if (!draft) return;
      const query = draft.topics.join(' OR ');
      getPapers(query);
    });
  }, [getPapers, uuid]);

  const handleNext = () => {
    if (papers.length < 3) return;

    updateDraft(uuid, {
      papers: papers,
      stage: 'method'
    }).then(() => {
      router.push(`/writer/${uuid}/method`);
    });
  };

  return (
    <main className="flex flex-col w-full p-2">
      <div className="flex flex-row w-full justify-between">
        <h1 className="editorial-header mb-8">Papers</h1>
        <Button className="super-button" onClick={handleNext}>
          Next
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        {loading ? <p>Loading...</p> : <PaperList papers={papers} />}
      </div>
    </main>
  );
}
