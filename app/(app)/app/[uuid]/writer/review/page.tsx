import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

import Page from '@/app/components/document/Page';
import ParagraphAI from '@/app/components/document/ParagraphAI';
import Portrait from '@/app/components/document/Portrait';

export default async function ReviewPage({
  params
}: {
  params: { uuid: string };
}) {
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
    keywords,
    fieldOfStudy,
    thesis,
    introduction,
    abstract,
    methodology,
    results,
    discussion,
    conclusion
  } = draft;

  return (
    <section className="subcontent-full">
      <Portrait
        title={thesis!}
        fieldOfStudy={fieldOfStudy}
        author={name!}
        email={email!}
      />
      <Page
        body={
          <article className="flex flex-col h-full justify-evenly">
            <ParagraphAI subtitle="Resumen" paragraph={abstract!} />
            <ParagraphAI subtitle="Abstract" paragraph={abstract!} />
            <ParagraphAI subtitle="Keywords" paragraph={keywords!.join(', ')} />
          </article>
        }
        page={2}
      />
      <Page
        body={
          <article className="flex flex-col h-full justify-evenly">
            <ParagraphAI subtitle="Introduccion" paragraph={introduction!} />
            <ParagraphAI subtitle="Metodologia" paragraph={methodology!} />
          </article>
        }
        page={3}
      />
      <Page
        body={
          <article className="flex flex-col h-full justify-evenly">
            <ParagraphAI subtitle="Resultados" paragraph={results!} />
            <ParagraphAI subtitle="Discusion" paragraph={discussion!} />
          </article>
        }
        page={4}
      />
      <Page
        body={
          <article className="flex flex-col h-full gap-4">
            <ParagraphAI subtitle="Conclusiones" paragraph={conclusion!} />
          </article>
        }
        page={5}
      />
    </section>
  );
}
