import { generateThesis } from '@/app/lib/writer/ai';

import RadioListAI from '@/app/components/ai/RadioListAI';

export default async function ThesisList({
  topics,
  field_of_study
}: {
  topics: string[];
  field_of_study: string;
}) {
  const thesisList: any[] = await generateThesis(topics, field_of_study);

  return (
    <RadioListAI name="Hipotesis" initialItems={thesisList} maxItems={10} />
  );
}
