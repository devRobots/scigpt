import { generateThesis } from '@/app/lib/writer/ai';
import { Draft } from '@/app/types/draft';

import RadioListAI from '@/app/components/ai/RadioListAI';

export default async function ThesisList({ draft }: { draft: Draft }) {
  const thesisList: any[] = await generateThesis(draft);
  return (
    <RadioListAI name="Hipotesis" initialItems={thesisList} maxItems={10} />
  );
}
