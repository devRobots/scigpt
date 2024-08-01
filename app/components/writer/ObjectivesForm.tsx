import { submitObjectives } from '@/app/actions/objectives';
import CheckListAI from '@/app/components/ai/CheckListAI';
import { getDraft } from '@/app/lib/firebase/firestore';
import { generateObjectives } from '@/app/lib/writer/ai';
import SkeletonCheckListAI from '@/app/components/skeletons/CheckListAI';
import { CardBody, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Suspense } from 'react';

export async function ObjectivesList({ uuid }: { uuid: string }) {
  const draft = await getDraft(uuid);
  const { topics, field_of_study, thesis } = draft;
  const objectivesList = await generateObjectives(
    thesis!,
    topics,
    field_of_study
  );
  return <CheckListAI name="Objetivo" initialItems={objectivesList || []} />;
}

export default function ObjectivesForm({ uuid }: { uuid: string }) {
  return (
    <form action={submitObjectives}>
      <input type="hidden" hidden name="uuid" value={uuid} />
      <CardBody className="h-fit gap-3">
        <p className="font-semibold">
          Seleccione a continuacion por lo menos 3 objetivos que le resulten mas
          interesantes para continuar con el proceso de redaccion:
        </p>
        <Suspense fallback={<SkeletonCheckListAI />}>
          <ObjectivesList uuid={uuid} />
        </Suspense>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button color="success" className="super-button" type="submit">
          Next
        </Button>
      </CardFooter>
    </form>
  );
}
