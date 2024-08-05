import { Pages } from '@/app/lib/data/consts';
import { getDraft } from '@/app/lib/firebase/firestore';
import { Button, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';

import Paragraph from '@/app/components/writer/Paragraph';
import ParagraphAI from '@/app/components/writer/ParagraphAI';
import ParagraphList from '@/app/components/writer/ParagraphList';

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
          <ParagraphAI
            uuid={uuid}
            name="abstract"
            subtitle="Resumen"
            paragraph={abstract!}
          />
          <Paragraph subtitle="Abstract" paragraph={abstract!} />
          <Paragraph subtitle="Keywords" paragraph={keywords!.join(', ')} />
          <ParagraphAI
            uuid={uuid}
            name="introduction"
            subtitle="Introduccion"
            paragraph={introduction!}
          />
          <ParagraphAI
            uuid={uuid}
            name="methodology"
            subtitle="Metodologia"
            paragraph={methodology!}
          />
          <ParagraphAI
            uuid={uuid}
            name="results"
            subtitle="Resultados"
            paragraph={results!}
          />
          <ParagraphAI
            uuid={uuid}
            name="discussion"
            subtitle="Discusion"
            paragraph={discussion!}
          />
          <ParagraphAI
            uuid={uuid}
            name="conclusion"
            subtitle="Conclusiones"
            paragraph={conclusion!}
          />
          <ParagraphList subtitle="Referencias" items={references!} />
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
