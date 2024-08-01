'use client';

import { App, Pages } from '@/app/lib/data/consts';
import { updateDraft } from '@/app/lib/firebase/firestore';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { usePapers } from '@/app/hooks/usePapers';

import InputSearchAI from '@/app/components/ai/InputSearchAI';
import PaperList from '@/app/components/writer/PapersReviews';

/* eslint-disable react-hooks/exhaustive-deps */

export default function References() {
  const router = useRouter();
  const params = useParams();
  const uuid = params.uuid.toString() || '';

  const [query, setQuery] = useState('');
  const { papers, loading, getPapers } = usePapers();

  useEffect(() => {
    getPapers(query);
  }, [query]);

  const handleNext = () => {
    if (papers.length < 3) return;

    updateDraft(uuid, {
      papers: papers,
      stage: App.Writer
    }).then(() => {
      router.push(`${Pages.Writer}/${uuid}/${App.Writer}`);
    });
  };

  return (
    <main className="flex flex-col w-full p-2">
      <Card className="flex flex-col w-full">
        <CardHeader className="flex flex-col">
          <div className="flex flex-row w-full justify-between">
            <h1 className="editorial-header mb-8">Papers</h1>
            <Button className="super-button" onClick={handleNext}>
              Next
            </Button>
          </div>
          <div className="w-full">
            <InputSearchAI name="articulos" items={[]} setQuery={setQuery} />
          </div>
        </CardHeader>
        <CardBody>
          {!loading ? (
            <>
              <PaperList papers={papers} />
            </>
          ) : (
            <p>Loading...</p>
          )}
        </CardBody>
      </Card>
    </main>
  );
}
