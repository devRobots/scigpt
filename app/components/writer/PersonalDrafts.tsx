import { Pages } from '@/app/lib/data/consts';
import { getDraftsByOwner } from '@/app/lib/firebase/firestore';
import { Draft } from '@/app/types/draft';
import { auth } from '@/auth';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

import NotFound from '@/app/components/core/NotFound';

export default async function PersonalDrafts() {
  const session = await auth();
  const user_email = session!.user!.email!;
  const drafts: Draft[] = await getDraftsByOwner(user_email);

  if (drafts.length === 0) {
    return <NotFound text="No se encontraron articulos" />;
  }

  return (
    <section className="subcontent-full lg:flex-row">
      {drafts.map((draft) => (
        <Card key={draft.id} className="h-fit w-min-72 w-auto">
          <CardHeader className="flex flex-col items-start gap-2">
            <h2 className="text-2xl">Titulo: {draft.title}</h2>
            <div className="flex flex-row gap-1">
              Etapa:
              <Chip color="primary">{draft.stage}</Chip>
            </div>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <p>Area de estudio: {draft.fieldOfStudy}</p>
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
              <Button variant="flat" className="w-full">
                Editar
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
