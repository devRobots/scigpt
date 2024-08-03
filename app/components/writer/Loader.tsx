import { updateDraft } from '@/app/lib/firebase/firestore';
import { generate } from '@/app/lib/writer/ai';
import { Draft } from '@/app/types/draft';
import { Spinner } from '@nextui-org/react';
import { Suspense } from 'react';
import { FaCheck } from 'react-icons/fa6';

async function redact(item: string, draft: Draft) {
  if (item === 'references') return;
  if (draft[item as keyof Draft]) return;
  const generated = await generate(item, draft);
  if (generated) await updateDraft(draft.id, { [item]: generated });
}

export async function Ready({ load, from }: { load: string; from: Draft }) {
  await redact(load, from);

  return (
    <FaCheck
      className="w-4 h-4 mb-0 ml-1"
      style={{ color: 'yellow' }}
      id="check"
    />
  );
}

export default function Loader({
  text,
  load,
  from
}: {
  text: string;
  load: string;
  from: Draft;
}) {
  return (
    <div className="flex gap-4 items-center">
      <Suspense fallback={<Spinner size="sm" id="spinner" />}>
        <Ready load={load} from={from} />
      </Suspense>
      <p className="text-lg text-white/40" id="text-loader">
        {text}
      </p>
    </div>
  );
}
