'use client';

import { mate } from '@/app/ui/fonts';
import FieldOfStudySelector from '@/app/ui/writer/FieldsOfStudySelector';
import TopicsSelector from '@/app/ui/writer/TopicsSelector';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { useRouter } from 'next/navigation';

export default function Writer() {
  const router = useRouter();

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
          <TopicsSelector />
          <p>Selecciona el campo de estudio al que pertenece tu idea.</p>
          <FieldOfStudySelector />
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
