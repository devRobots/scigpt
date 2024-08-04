'use client';

import { updateDraft } from '@/app/lib/firebase/firestore';
import { generate } from '@/app/lib/writer/ai';
import { Draft } from '@/app/types/draft';
import { Button, Spinner } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

async function redact(item: string, draft: Draft) {
  const cache = draft[item as keyof Draft];
  if (cache) return cache;
  const generated = await generate(item, draft);
  return generated;
}

export function LoaderItem({
  text,
  status
}: {
  text: string;
  status?: string;
}) {
  return (
    <div className="flex gap-4 items-center">
      {status === 'loading' ? (
        <Spinner size="sm" id="spinner" />
      ) : status === 'done' ? (
        <FaCheck
          className="w-4 h-4 mb-0 ml-1"
          style={{ color: 'yellow' }}
          id="check"
        />
      ) : (
        '-'
      )}
      <p className="text-lg text-white/40" id="text-loader">
        {text}
      </p>
    </div>
  );
}

export function Loader({ draft }: { draft: Draft }) {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState(new Array(8).fill('waiting'));

  useEffect(() => {
    const items = [
      'abstract',
      'keywords',
      'introduction',
      'methodology',
      'results',
      'discussion',
      'conclusion',
      'references'
    ];
    const load = async () => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        setStatus((prev) => {
          const next = [...prev];
          next[i] = 'loading';
          return next;
        });
        const response = await redact(item, draft);
        if (!response) return;
        draft[item as keyof Draft] = response;
        setStatus((prev) => {
          const next = [...prev];
          next[i] = 'done';
          return next;
        });
      }
      setStep(8);
      draft.stage = 'review';
      await updateDraft(draft.id, { draft});
    };
    load();
  }, []);

  return (
    <>
      <article className="flex flex-row gap-4">
        <div className="flex flex-col">
          <LoaderItem text="Resumen" status={status[0]} />
          <LoaderItem text="Palabras clave" status={status[1]} />
          <LoaderItem text="Introduccion" status={status[2]} />
          <LoaderItem text="Metodologia" status={status[3]} />
        </div>
        <div className="flex flex-col">
          <LoaderItem text="Resultados" status={status[4]} />
          <LoaderItem text="Discusion" status={status[5]} />
          <LoaderItem text="Conclusion" status={status[6]} />
          <LoaderItem text="Referencias" status={status[7]} />
        </div>
      </article>
      {step == 8 && (
        <Link href={`/app/${draft.id}/writer/review`}>
          <Button className="super-button" size="md" hidden={false}>
            Verificar
          </Button>
        </Link>
      )}
    </>
  );
}
