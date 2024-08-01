import { submitThesis } from '@/app/actions/thesis';
import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

import BackButton from '@/app/components/misc/BackButton';
import SubmitButton from '@/app/components/misc/SubmitButton';
import SkeletonRadioListAI from '@/app/components/skeletons/RadioListAI';
import ThesisList from '@/app/components/writer/ThesisList';

export default async function Thesis({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);

  const { stage } = draft;
  if (stage !== 'thesis') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  return (
    <section className="flex w-full xl:w-3/5 p-0">
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
        <form action={submitThesis}>
          <input type="hidden" hidden name="uuid" value={uuid} />
          <CardBody className="h-fit gap-3">
            <p className="font-semibold">
              Seleccione a continuacion la hipotesis que le resulte mas
              interesante para continuar con el proceso de redaccion:
            </p>
            <Suspense fallback={<SkeletonRadioListAI />}>
              <ThesisList draft={draft} />
            </Suspense>
          </CardBody>
          <CardHeader className="card-action-footer">
            <BackButton label="Salir" href={Pages.Writer} />
            <SubmitButton label="Continuar" />
          </CardHeader>
        </form>
      </Card>
    </section>
  );
}
