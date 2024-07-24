'use client';

import RadioListAI from '@/app/components/ai/RadioListAI';
import { useThesis } from '@/app/hooks/useThesis';
import { getDraft, updateDraft } from '@/app/lib/supabase/queries';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button, Spinner } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Thesis() {
  const router = useRouter();
  const params = useParams();
  const uuid = params.uuid.toString() || '';

  const [hypothesis, setHypothesis] = useState('');
  const { thesis, loading, getThesis } = useThesis();

  useEffect(() => {
    getDraft(uuid).then(({ draft }) => {
      if (!draft) return;
      getThesis(draft.topics, draft.field_of_study);
    });
  }, [getThesis, uuid]);

  const handleNext = () => {
    if (!hypothesis) return;

    updateDraft(uuid, { thesis: hypothesis, stage: 'objectives' }).then(() => {
      router.push(`/writer/${uuid}/objectives`);
    });
  };

  return (
    <section className="flex w-full xl:w-3/5">
      <Card className="h-fit w-full p-2">
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
                initialItems={thesis}
                setValue={setHypothesis}
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
