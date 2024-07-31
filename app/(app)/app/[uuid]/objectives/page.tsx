/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import CheckListAI from '@/app/components/ai/CheckListAI';
import { useDraft } from '@/app/hooks/useDraft';
import { App, Pages } from '@/app/lib/data/consts';
import { updateDraft } from '@/app/lib/firebase/firestore';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Button, Spinner } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Thesis() {
  const router = useRouter();
  const params = useParams();
  const uuid = params.uuid.toString() || '';

  const [selObjectives, setSelObjectives] = useState<string[]>([]);
  const { objectivesList, loading, genObjectives } = useDraft(uuid);

  useEffect(() => {
    genObjectives();
  }, []);

  const handleNext = () => {
    if (selObjectives.length < 3) return;

    updateDraft(uuid, {
      objectives: selObjectives,
      stage: App.Writer
    }).then(() => {
      router.push(`${Pages.Writer}/${uuid}/${App.Writer}`);
    });
  };

  return (
    <section className="flex w-full xl:w-3/5 p-2">
      <Card className="main-card">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2 className={'editorial-header'}>Objetivos</h2>
          <p className="text-default-800">
            Los objetivos representan las metas o fines que se esperan alcanzar
            con la investigación. Estos también cumplen la función de
            especificar las tareas y medios necesarios para responder la
            pregunta. Además, detallan el tipo de acción que deberá desarrollar
            el investigador para implementar una metodología.
          </p>
        </CardHeader>
        <CardBody className="h-fit gap-3">
          {!loading ? (
            <>
              <p className="font-semibold">
                Seleccione a continuacion por lo menos 3 objetivos que le
                resulten mas interesantes para continuar con el proceso de
                redaccion:
              </p>
              <CheckListAI
                name="Objetivo"
                initialItems={objectivesList || []}
                setValues={setSelObjectives}
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
