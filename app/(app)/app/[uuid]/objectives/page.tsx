import { submitObjectives } from '@/app/actions/objectives';
import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { Card, CardHeader } from '@nextui-org/card';
import { CardBody, CardFooter } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import BackButton from '@/app/components/misc/BackButton';
import SubmitButton from '@/app/components/misc/SubmitButton';
import SkeletonCheckListAI from '@/app/components/skeletons/CheckListAI';
import ObjectivesList from '@/app/components/writer/ObjectivesList';

export default async function Thesis({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);

  const { stage } = draft;
  if (stage !== 'objectives') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  return (
    <section className="flex w-full xl:w-3/5 p-0">
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
        <form action={submitObjectives}>
          <input type="hidden" hidden name="uuid" value={uuid} />
          <CardBody className="h-fit gap-3">
            <p className="font-semibold">
              Seleccione a continuacion por lo menos 3 objetivos que le resulten
              mas interesantes para continuar con el proceso de redaccion:
            </p>
            <Suspense fallback={<SkeletonCheckListAI />}>
              <ObjectivesList draft={draft} />
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
