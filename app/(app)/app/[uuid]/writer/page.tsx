import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { redirect } from 'next/navigation';

import Loader from '@/app/components/writer/Loader';

export default async function Page({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h2 className={'editorial-header'}>Redactando...</h2>
      <div className="flex flex-col">
        <Loader text="Palabras clave" />
        <Loader text="Justificacion" />
        <Loader text="Metodologia" />
        <Loader text="Resultados esperados" />
        <Loader text="Referencias y Bibliografia" />
      </div>
    </div>
  );
}
