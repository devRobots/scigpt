'use client';

import BigInput from '@/app/components/standard/BigInput';
import InputTag from '@/app/components/standard/InputTag';
import ListSelector from '@/app/components/standard/ListSelector';
import { fieldsOfStudy as items } from '@/app/lib/data/fieldsOfStudy';
import { saveDraft } from '@/app/lib/supabase/queries';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Writer() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [error, setError] = useState('');

  const handleClick = async () => {
    if (title.length < 5) {
      setError('El título debe tener al menos 5 caracteres');
      return;
    }
    if (topics.length < 1) {
      setError('Se debe seleccionar al menos un tema');
      return;
    }
    if (!fieldOfStudy) {
      setError('Se debe seleccionar un campo de estudio');
      return;
    }

    const uuid = await saveDraft({
      title,
      topics,
      field_of_study: fieldOfStudy,
      stage: 'thesis',
      uuid: undefined,
      created_at: undefined,
      thesis: undefined,
      objectives: undefined,
      methodology: undefined,
      results: undefined,
      user_id: undefined
    });

    router.push(`/writer/${uuid}/thesis`);
  };

  return (
    <main className="flex mb-auto justify-center">
      <section className="h-fit my-4 mx-4 sm:mt-2">
        <Card className="p-1">
          <CardBody className="flex flex-col md:flex-row columns-1 md:columns-2 gap-6">
            <div className="flex flex-col w-full justify-center gap-8">
              <div className="flex flex-col gap-2">
                <strong className="text-2xl">Nueva Redaccion</strong>
                <BigInput label="Titulo" setValue={setTitle} />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-lg justify-end">
                  Escribe los temas de interes
                </span>
                <InputTag name="tema" setValues={setTopics} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-3">
              <span className="text-lg justify-end">
                Selecciona un area de estudio
              </span>
              <ListSelector items={items} setValue={setFieldOfStudy} />
            </div>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Button
              className="super-button w-full sm:w-auto"
              onClick={handleClick}
            >
              Empezar
            </Button>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
