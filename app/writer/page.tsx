'use client';

import { mate } from '@/app/components/fonts';
import CategorySelector from '@/app/writer/studyFieldSelector';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Textarea
} from '@nextui-org/react';
import { useState } from 'react';

export default function Writer() {
  const [category, setCategory] = useState('');

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
          />
          <p>Selecciona el campo de estudio al que pertenece tu idea.</p>
          <CategorySelector setCategory={setCategory} />
        </CardBody>
        <CardFooter className="sm:flex sm:flex-col sm:items-end">
          <Button className="super-button w-full sm:w-auto">Siguiente</Button>
        </CardFooter>
      </Card>
    </>
  );
}
