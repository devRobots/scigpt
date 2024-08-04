import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { auth } from '@/auth';
import { Card, CardBody } from '@nextui-org/react';
import { redirect } from 'next/navigation';

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
      <Card className="apa-format">
        <CardBody className="flex gap-4">
          <ParagraphAI subtitle="Resumen" paragraph={abstract!} />
          <ParagraphAI subtitle="Abstract" paragraph={abstract!} />
          <ParagraphAI subtitle="Keywords" paragraph={keywords!.join(', ')} />
          <ParagraphAI subtitle="Introduccion" paragraph={introduction!} />
          <ParagraphAI subtitle="Metodologia" paragraph={methodology!} />
          <ParagraphAI subtitle="Resultados" paragraph={results!} />
          <ParagraphAI subtitle="Discusion" paragraph={discussion!} />
          <ParagraphAI subtitle="Conclusiones" paragraph={conclusion!} />
        </CardBody>
      </Card>
    </section>
  );
}
