import { App, Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { submitObjectives } from '@/app/lib/writer/ai';
import { Card, CardHeader } from '@nextui-org/card';
import { CardBody, CardFooter } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import BackButton from '@/app/components/input/misc/BackButton';
import SubmitButton from '@/app/components/input/misc/SubmitButton';
import SkeletonCheckListAI from '@/app/components/input/skeletons/CheckListAI';
import ObjectivesList from '@/app/components/writer/ObjectivesList';

export default async function Thesis({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);

  const { stage } = draft;
  if (stage !== 'objectives') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  const submit = async (formData: FormData) => {
    'use server';
    const response = await submitObjectives(uuid, formData);
    if (response) redirect(`${Pages.Writer}/${uuid}/${App.Objectives}`);
  };

  return (
    <section className="subcontent-full">
      <Card className="xl:w-3/5">
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
        <form action={submit}>
          <input type="hidden" hidden name="uuid" value={uuid} />
          <CardBody className="h-fit gap-3">
            <p className="font-semibold">
              Seleccione a continuacion por lo menos 3 objetivos que le resulten
              mas interesantes para continuar con el proceso de redaccion:
            </p>
            <Suspense fallback={<SkeletonCheckListAI />}>
              <ObjectivesList draftId={uuid} />
            </Suspense>
          </CardBody>
          <CardFooter className="card-action-footer">
            <BackButton label="Salir" href={Pages.Writer} />
            <SubmitButton label="Continuar" />
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
