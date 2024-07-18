'use client';

import { mate } from '@/app/ui/fonts';
import FieldOfStudySelector from '@/app/ui/writer/FieldsOfStudySelector';
import TopicsSelector from '@/app/ui/writer/TopicsSelector';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import Link from 'next/link';

export default function Writer() {
  return (
    <main className="flex mb-auto justify-center">
      <section className="h-fit my-4 mx-4 sm:mt-2">
        <Card>
          <CardBody>
            <form className="flex flex-col md:flex-row columns-1 md:columns-2 gap-4 p-2">
              <div className="flex flex-col w-full justify-center gap-8">
                <div className="flex flex-col gap-2">
                  <strong className="text-2xl">Nueva Redaccion</strong>
                  <Input
                    classNames={{ input: 'text-xl font-bold' }}
                    label="Titulo"
                    size="lg"
                    variant="underlined"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-lg justify-end">
                    Escribe los temas de interes
                  </span>
                  <TopicsSelector />
                </div>
              </div>
              <div className="flex flex-col w-full gap-3">
                <span className="text-lg justify-end">
                  Selecciona un area de estudio
                </span>
                <FieldOfStudySelector />
              </div>
            </form>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Link
              href={{
                pathname: '/writer/thesis',
                query: {
                  topics: ['ai', 'nextjs'],
                  fieldOfStudy: 'Computer Science'
                }
              }}
            >
              <Button className="super-button w-full sm:w-auto">
                Siguiente
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
