import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { Button, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';

import ParagraphAI from '@/app/components/document/ParagraphAI';

export default async function ReviewPage({
  params
}: {
  params: { uuid: string };
}) {
  const uuid = params.uuid;
  const draft = await getDraft(uuid);
  if (!draft) redirect(Pages.Writer);
  const { stage } = draft;
  if (stage !== 'review') redirect(`${Pages.Writer}/${uuid}/${stage}`);

  const {
    keywords,
    thesis,
    introduction,
    abstract,
    methodology,
    results,
    discussion,
    conclusion,
    references
  } = draft;

  return (
    <section className="subcontent-full flex-col">
      <Card className="apa-format">
        <CardBody className="flex gap-8">
          <h2 className="editorial-header text-center">{thesis!}</h2>
          <ParagraphAI subtitle="Resumen" paragraph={abstract!} />
          <ParagraphAI subtitle="Abstract" paragraph={abstract!} />
          <ParagraphAI subtitle="Keywords" paragraph={keywords!.join(', ')} />
          <ParagraphAI subtitle="Introduccion" paragraph={introduction!} />
          <ParagraphAI subtitle="Metodologia" paragraph={methodology!} />
          <ParagraphAI subtitle="Resultados" paragraph={results!} />
          <ParagraphAI subtitle="Discusion" paragraph={discussion!} />
          <ParagraphAI subtitle="Conclusiones" paragraph={conclusion!} />
          <article>
            <h3 className="font-bold text-lg">Referencias</h3>
            <ul>
              {references!.map((reference, index) => (
                <li key={index}>{reference}</li>
              ))}
            </ul>
          </article>
        </CardBody>
      </Card>
      <div className="w-full xl:w-fit xl:fixed xl:bottom-16 xl:right-8">
        <Link href={`${Pages.Writer}/${uuid}/export`}>
          <Button
            size="lg"
            className="super-button w-full"
            endContent={<FaArrowRight />}
          >
            Exportar
          </Button>
        </Link>
      </div>
    </section>
  );
}
