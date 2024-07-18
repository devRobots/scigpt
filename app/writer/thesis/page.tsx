'use client';

import { useDraft } from '@/app/hooks/useDraft';
import { usePager } from '@/app/hooks/usePager';
import { useThesis } from '@/app/hooks/useThesis';
import ThesisList from '@/app/ui/writer/Thesis';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
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
    <>
      <Card className="h-fit p-2 sm:p-2">
        <CardHeader className={'editorial-header'}>Thesis</CardHeader>
        <CardBody className="h-fit gap-6">
          <ThesisList thesis={thesis} />
        </CardBody>
      </Card>
    </>
  );
}
