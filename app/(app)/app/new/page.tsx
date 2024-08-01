import { submitDraft } from '@/app/actions/draft';
import { fieldsOfStudy as items } from '@/app/lib/data/consts';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';

import BackButton from '@/app/components/misc/BackButton';
import BigInput from '@/app/components/standard/BigInput';
import InputTag from '@/app/components/standard/InputTag';
import ListSelector from '@/app/components/standard/ListSelector';

export default function Writer() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="h-fit mx-0 sm:mt-2 sm:mx-4">
        <Card className="p-1">
          <form action={submitDraft}>
            <CardBody className="flex flex-col md:flex-row columns-1 md:columns-2 gap-6">
              <div className="flex flex-col w-full justify-center gap-8">
                <div className="flex flex-col gap-2">
                  <strong className="text-2xl">Nueva Redaccion</strong>
                  <BigInput name="Titulo" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-lg justify-end">
                    Escribe los temas de interes
                  </span>
                  <InputTag name="topics" />
                </div>
              </div>
              <div className="flex flex-col w-full gap-3">
                <span className="text-lg justify-end">
                  Selecciona un area de estudio
                </span>
                <ListSelector name="field_of_study" items={items} />
              </div>
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
