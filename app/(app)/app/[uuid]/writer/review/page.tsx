import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import Portrait from '@/app/components/document/Portrait';

export default async function Page({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);
  const { stage } = draft;
  if (stage !== 'writer') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  const session = await auth();
  const user = session?.user;
  if (!user) redirect(Pages.Writer);

  const { name, email } = user;
  const {
    title,
    topics,
    field_of_study,
    thesis,
    objectives,
    abstract,
    methodology
  } = draft;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Portrait
        title={thesis!}
        field_of_study={field_of_study}
        author={name!}
        email={email!}
      />
    </div>
  );
}
