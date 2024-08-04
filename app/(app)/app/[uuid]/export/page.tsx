import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { Card } from '@nextui-org/react';
import { redirect } from 'next/navigation';
import { FaFilePdf, FaFileWord } from 'react-icons/fa6';

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
    <section className="subcontent-full sm:my-40 flex-col sm:flex-row">
      <Card className="w-72 h-72 items-center justify-evenly hover:cursor-pointer hover:bg-content3">
        <FaFileWord size={128} />
        <h2 className="text-xl">Exportar en Word</h2>
      </Card>
      <Card className="w-72 h-72 items-center justify-evenly hover:cursor-pointer hover:bg-content3">
        <FaFilePdf size={128} />
        <h2 className="text-xl">Exportar en PDF</h2>
      </Card>
    </section>
  );
}
