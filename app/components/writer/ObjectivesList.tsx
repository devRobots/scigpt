import { generateObjectives } from '@/app/lib/writer/ai';

import CheckListAI from '@/app/components/input/ai/CheckListAI';

export default async function ObjectivesList({ draftId }: { draftId: string }) {
  const objectivesList = await generateObjectives(draftId);
  return <CheckListAI name="Objetivo" initialItems={objectivesList} />;
}
