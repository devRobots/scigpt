import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';
import { type Draft } from '@/app/types/draft';
import { Pages } from '@/app/lib/data/consts';

export default function Draft({ drafts }: { drafts: Draft[] }) {
  if (drafts.length === 0) {
    return (
      <Card className="w-fit gap-6 py-6 px-16">
        <h2 className="text-lg">No se encontraron articulos</h2>
      </Card>
    );
  }

  return (
    <div className="flex w-full flex-row gap-4">
      {drafts.map((draft) => (
        <Card key={draft.id} className="w-96 p-2">
          <CardHeader className="flex flex-col items-start gap-2">
            <h2 className="text-2xl">Titulo: {draft.title}</h2>
            <div className="flex flex-row gap-1">
              Etapa:
              <Chip color="primary">{draft.stage}</Chip>
            </div>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <p>Area de estudio: {draft.field_of_study}</p>
            <div className="flex flex-row gap-1 flex-wrap">
              Temas:
              {draft.topics.map((topic) => (
                <Chip key={topic} color="default">
                  {topic}
                </Chip>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <Link
              href={`${Pages.Writer}/${draft.id}/${draft.stage}`}
              className="w-full"
            >
              <Button variant="shadow" className="w-full">
                Editar
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
