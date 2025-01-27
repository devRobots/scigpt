import { App, Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { submitThesis } from '@/app/lib/writer/draft';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import BackButton from '@/app/components/input/misc/BackButton';
import SubmitButton from '@/app/components/input/misc/SubmitButton';
import SkeletonRadioListAI from '@/app/components/input/skeletons/RadioListAI';
import ThesisList from '@/app/components/writer/ThesisList';

export default async function Thesis({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);

  const { stage } = draft;
  if (stage !== 'thesis') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  const submit = async (formData: FormData) => {
    'use server';
    submitThesis(uuid, formData);
    redirect(`${Pages.Writer}/${uuid}/${App.Objectives}`);
  };

  return (
    <section className="subcontent-full">
      <Card className="xl:w-3/5">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2 className="editorial-header">Hipotesis</h2>
          <p className="text-default-800">
            La pregunta de investigación o hipotesis es el cuestionamiento
            central que se busca responder a partir de una determinada
            metodología. Esta será el núcleo que articule los diferentes
            elementos dentro del proyecto.
          </p>
        </CardHeader>
        <form action={submit}>
          <CardBody className="h-fit gap-3">
            <p className="font-semibold">
              Seleccione a continuacion la hipotesis que le resulte mas
              interesante para continuar con el proceso de redaccion:
            </p>
            <Suspense fallback={<SkeletonRadioListAI />}>
              <ThesisList draftId={uuid} />
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
