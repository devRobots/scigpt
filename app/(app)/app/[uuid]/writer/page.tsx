import { App, Pages } from '@/app/lib/data/consts';
import { getDraft, suscribeDraft } from '@/app/lib/firebase/firestore';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import Loader from '@/app/components/writer/Loader';

export default async function Page({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  draft.id = uuid;
  if (!draft) redirect(Pages.Writer);
  suscribeDraft(uuid, (draft) => {
    if (!draft.abstract) return;
    if (!draft.keywords) return;
    if (!draft.introduction) return;
    if (!draft.methodology) return;
    if (!draft.results) return;
    if (!draft.discussion) return;
    if (!draft.conclusion) return;
    if (!draft.references) return;
    redirect(`${Pages.Writer}/${uuid}/${App.Writer}/review`);
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <Image src="/writer.webp" width={256} height={256} alt="Editorial" />
      <h2 className="editorial-header">Redactando...</h2>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col">
          <Loader text="Resumen" load="abstract" from={draft} />
          <Loader text="Palabras clave" load="keywords" from={draft} />
          <Loader text="Introduccion" load="introduction" from={draft} />
          <Loader text="Metodologia" load="methodology" from={draft} />
        </div>
        <div className="flex flex-col">
          <Loader text="Resultados" load="results" from={draft} />
          <Loader text="Discusion" load="discussion" from={draft} />
          <Loader text="Conclusion" load="conclusion" from={draft} />
          <Loader text="Referencias" load="references" from={draft} />
        </div>
      </div>
    </div>
  );
}
