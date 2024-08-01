import { submitThesis } from '@/app/actions/thesis';
import RadioListAI from '@/app/components/ai/RadioListAI';
import SkeletonRadioListAI from '@/app/components/skeletons/RadioListAI';
import { getDraft } from '@/app/lib/firebase/firestore';
import { generateThesis } from '@/app/lib/writer/ai';
import { Button } from '@nextui-org/button';
import { CardBody, CardHeader } from '@nextui-org/card';
import { Suspense } from 'react';

export async function ThesisList({ uuid }: { uuid: string }) {
  const draft = await getDraft(uuid);
  const { topics, field_of_study } = draft;
  const thesisList: any[] = await generateThesis(topics, field_of_study);

  return (
    <RadioListAI name="Hipotesis" initialItems={thesisList} maxItems={10} />
  );
}

export default async function ThesisForm({ uuid }: { uuid: string }) {
  return (
    <form action={submitThesis}>
      <input type="hidden" hidden name="uuid" value={uuid} />
      <CardBody className="h-fit gap-3">
        <p className="font-semibold">
          Seleccione a continuacion la hipotesis que le resulte mas interesante
          para continuar con el proceso de redaccion:
        </p>
        <Suspense fallback={<SkeletonRadioListAI />}>
          <ThesisList uuid={uuid} />
        </Suspense>
      </CardBody>
      <CardHeader className="flex justify-end">
        <Button color="success" className="super-button" type="submit">
          Next
        </Button>
      </CardHeader>
    </form>
  );
}
