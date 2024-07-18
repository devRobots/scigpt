'use client';

import { useDraft } from '@/app/hooks/useDraft';
import { useThesis } from '@/app/hooks/useThesis';
import ThesisList from '@/app/ui/writer/Thesis';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Spinner } from '@nextui-org/react';
import { useEffect } from 'react';

export default function Thesis() {
  const { draft } = useDraft();

  const { thesis, loading, getThesis } = useThesis();

  useEffect(() => {
    getThesis(draft.topics, draft.fieldOfStudy);
  }, []);

  return (
    <>
      <Card className="h-fit p-2 sm:p-2">
        <CardHeader className={'editorial-header'}>Thesis</CardHeader>
        <CardBody className="h-fit gap-6">
          {loading ? <Spinner /> : <ThesisList thesis={thesis} />}
        </CardBody>
      </Card>
    </>
  );
}
