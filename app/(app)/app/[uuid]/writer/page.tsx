import { App, Pages } from '@/app/lib/data/consts';
import { getDraft, suscribeDraft } from '@/app/lib/firebase/firestore';
import { redirect } from 'next/navigation';

import Loader from '@/app/components/writer/Loader';

export default async function Page({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  draft.id = uuid;
  if (!draft) redirect(Pages.Writer);
  suscribeDraft(uuid, (draft) => {
    if (!draft.keywords) return;
    if (!draft.abstract) return;
    if (!draft.methodology) return;
    if (!draft.results) return;
    if (!draft.references) return;
    if (!draft.bibliography) return;
    redirect(`${Pages.Writer}/${uuid}/${App.Writer}/review`);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h2 className={'editorial-header'}>Redactando...</h2>
      <div className="flex flex-col">
        <Loader text="Palabras clave" load="keywords" from={draft} />
        <Loader text="Justificacion" load="abstract" from={draft} />
        <Loader text="Metodologia" load="methodology" from={draft} />
        <Loader text="Resultados esperados" load="results" from={draft} />
        <Loader text="Referencias" load="references" from={draft} />
        <Loader text="Bibliografia" load="bibliography" from={draft} />
      </div>
    </div>
  );
}
