import { updateDraft } from '@/app/lib/firebase/firestore';
import { generateAbstract, generateKeywords } from '@/app/lib/writer/ai';
import { Draft } from '@/app/types/draft';
import { Spinner } from '@nextui-org/react';
import { Suspense } from 'react';
import { FaCheck } from 'react-icons/fa6';

export async function Ready({ load, from }: { load: string; from: Draft }) {
  const { topics, field_of_study, thesis } = from;

  switch (load) {
    case 'abstract':
      if (from.abstract) break;
      const abstract = await generateAbstract(thesis!, topics, field_of_study);
      await updateDraft(from.id, { abstract });
      break;
    case 'keywords':
      if (from.keywords) break;
      const keywords = await generateKeywords(thesis!, topics, field_of_study);
      await updateDraft(from.id, { keywords });
      break;
    case 'introduction':
      console.log('introduction');
      break;
    case 'methodology':
      console.log('methodology');
      break;
    case 'results':
      console.log('results');
      break;
    case 'discussion':
      console.log('discussion');
      break;
    case 'conclusion':
      console.log('conclusion');
      break;
    case 'references':
      console.log('references');
      break;
  }

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
