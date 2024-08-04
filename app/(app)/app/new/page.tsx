import { submitDraft } from '@/app/actions/draft';
import { fieldsOfStudy as items, Pages } from '@/app/lib/data/consts';
import { getDraftsCountByOwner } from '@/app/lib/firebase/firestore';
import { auth } from '@/auth';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Textarea } from '@nextui-org/react';
import { redirect } from 'next/navigation';

import BackButton from '@/app/components/input/misc/BackButton';
import BigInput from '@/app/components/input/standard/BigInput';
import InputTag from '@/app/components/input/standard/InputTag';
import ListSelector from '@/app/components/input/standard/ListSelector';

export default async function Writer() {
  const session = await auth();
  const user = session?.user;
  const countDrafts = await getDraftsCountByOwner(user!.email!);
  if (countDrafts >= 3) redirect(Pages.Writer);

  return (
    <main className="content-fit">
      <section className="xl:w-3/5">
        <Card className="p-1">
          <form action={submitDraft}>
            <input type="hidden" hidden name="owner" value={user!.email!} />
            <CardBody className="flex flex-col md:flex-row columns-1 md:columns-2 gap-6">
              <section className="flex flex-col w-full gap-4">
                <article className="flex flex-col gap-2">
                  <strong className="text-2xl">Nueva Redaccion</strong>
                  <BigInput name="Titulo" />
                </article>
                <article className="flex flex-col gap-3">
                  <Textarea
                    label="Escribe sobre lo que quieres redactar"
                    labelPlacement="outside"
                    name="context"
                    variant="faded"
                    classNames={{ inputWrapper: 'bg-default' }}
                    placeholder="Escribe algo..."
                    rows={3}
                    minRows={3}
                    maxRows={3}
                    isRequired
                  />
                </article>
                <article className="flex flex-col gap-3">
                  <p className="text-sm">
                    Escribe los temas de interes
                    <span className="text-danger">*</span>
                  </p>
                  <InputTag name="temas" />
                </article>
              </section>
              <article className="flex flex-col w-full gap-3">
                <p className="text-sm">
                  Selecciona un area de estudio
                  <span className="text-danger">*</span>
                </p>
                <ListSelector name="fieldOfStudy" items={items} />
              </article>
            </CardBody>
            <CardFooter className="card-action-footer">
              <BackButton label="Cancelar" />
              <Button className="super-button w-full sm:w-auto" type="submit">
                Crear
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>
    </main>
  );
}
