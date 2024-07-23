import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

export default function Draft({ drafts }: { drafts: Draft[] }) {
  return (
    <div className="flex flex-row gap-4">
      {drafts.map((draft) => (
        <Card key={draft.uuid} className="w-96 p-2">
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
              href={`/writer/${draft.uuid}/${draft.stage}`}
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
