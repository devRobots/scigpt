'use client';

import { mate } from '@/app/components/fonts';
import { useDraft } from '@/app/hooks/useDraft';
import FieldOfStudySelector from '@/app/writer/components/FieldsOfStudySelector';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Textarea } from '@nextui-org/input';
import { useRouter } from 'next/navigation';

export default function Writer() {
  const router = useRouter();
  const { draft, addTopic, addFieldOfStudy } = useDraft();

  const handleNext = () => {
    router.push('/writer/thesis');
  };

  return (
    <>
      <Card className="h-fit p-2 sm:p-2">
        <CardHeader className={mate.className + ' editorial-header'}>
          Empecemos una idea
        </CardHeader>
        <CardBody className="h-fit gap-6">
          <Textarea
            variant="faded"
            minRows={2}
            placeholder="Escribe el tema de tu idea"
            size="lg"
            value={draft.topic}
            onValueChange={addTopic}
          />
          <p>Selecciona el campo de estudio al que pertenece tu idea.</p>
          <FieldOfStudySelector setFieldOfStudy={addFieldOfStudy} />
        </CardBody>
        <CardFooter className="sm:flex sm:flex-col sm:items-end">
          <Button
            className="super-button w-full sm:w-auto"
            onClick={handleNext}
          >
            Siguiente
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
