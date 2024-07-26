'use client';

import RadioListAI from '@/app/components/ai/RadioListAI';
import { useDraft } from '@/app/hooks/useDraft';
import { updateDraft } from '@/app/lib/supabase/queries';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button, Spinner } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Thesis() {
  const router = useRouter();
  const params = useParams();
  const uuid = params.uuid.toString() || '';

  const [thesis, setThesis] = useState('');
  const { thesisList, loading, genThesis } = useDraft(uuid);

  useEffect(() => {
    genThesis();
  }, [genThesis]);

  const handleNext = () => {
    if (!thesis) return;

    updateDraft(uuid, { thesis: thesis, stage: 'objectives' }).then(() => {
      router.push(`/writer/${uuid}/objectives`);
    });
  };

  return (
    <section className="flex w-full xl:w-3/5 p-0 md:p-8">
      <Card className="main-card">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2 className={'editorial-header'}>Hipotesis</h2>
          <p className="text-default-800">
            La pregunta de investigación o hipotesis es el cuestionamiento
            central que se busca responder a partir de una determinada
            metodología. Esta será el núcleo que articule los diferentes
            elementos dentro del proyecto.
          </p>
        </CardHeader>
        <CardBody className="h-fit gap-3">
          {!loading ? (
            <>
              <p className="font-semibold">
                Seleccione a continuacion la hipotesis que le resulte mas
                interesante para continuar con el proceso de redaccion:
              </p>

              <RadioListAI
                name="Hipotesis"
                initialItems={thesisList || []}
                setValue={setThesis}
                maxItems={10}
              />
            </>
          ) : (
            <Spinner />
          )}
        </CardBody>
        <CardHeader className="flex justify-end">
          <Button color="success" className="super-button" onClick={handleNext}>
            Next
          </Button>
        </CardHeader>
      </Card>
    </section>
  );
}
