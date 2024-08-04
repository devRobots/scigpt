import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Loader } from '@/app/components/writer/Loader';

export default async function Page({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  draft.id = uuid;
  if (!draft) redirect(Pages.Writer);

  return (
    <section className="subcontent-full my-24">
      <Image src="/writer.webp" width={256} height={230} alt="Editorial" />
      <h2 className="editorial-header">Redactando...</h2>
      <Loader draft={draft} />
    </section>
  );
}
