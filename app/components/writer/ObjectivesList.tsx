import { generateObjectives } from '@/app/lib/writer/ai';

import CheckListAI from '@/app/components/ai/CheckListAI';

export default async function ObjectivesList({
  topics,
  field_of_study,
  thesis
}: {
  topics: string[];
  field_of_study: string;
  thesis: string;
}) {
  const objectivesList = await generateObjectives(
    thesis!,
    topics,
    field_of_study
  );
  return <CheckListAI name="Objetivo" initialItems={objectivesList || []} />;
}
