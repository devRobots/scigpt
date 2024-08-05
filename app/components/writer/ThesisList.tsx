import { generateThesis } from '@/app/lib/writer/draft';

import RadioListAI from '@/app/components/input/ai/RadioListAI';

export default async function ThesisList({ draftId }: { draftId: string }) {
  const thesisList: any[] = await generateThesis(draftId);
  return (
    <RadioListAI name="Hipotesis" initialItems={thesisList} maxItems={10} />
  );
}
