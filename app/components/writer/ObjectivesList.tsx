import { generateObjectives } from '@/app/lib/writer/ai';
import { Draft } from '@/app/types/draft';

import CheckListAI from '@/app/components/ai/CheckListAI';

export default async function ObjectivesList({ draft }: { draft: Draft }) {
  const objectivesList = await generateObjectives(draft);
  return <CheckListAI name="Objetivo" initialItems={objectivesList || []} />;
}
