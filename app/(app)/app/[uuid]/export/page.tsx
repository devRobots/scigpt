import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { redirect } from 'next/navigation';
import { FaFileWord } from 'react-icons/fa6';

import DownloadButton from '@/app/components/writer/DownloadButton';

export default async function ExportPage({
  params
}: {
  params: { uuid: string };
}) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);
  const { stage } = draft;
  if (stage !== 'review') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  return (
    <section className="subcontent-full my-40 flex-col">
      <DownloadButton draft={uuid}>
        <FaFileWord size={128} />
        <h2 className="text-xl">Exportar en Word</h2>
      </DownloadButton>
      <p className="text-center text-white/60">
        Proximamente podras exportar tu redaccion en PDF y más formatos
      </p>
    </section>
  );
}
