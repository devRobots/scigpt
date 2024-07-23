'use client';

import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa6';

export default function Writer() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/writer/new');
  };

  return (
    <main className="flex flex-col my-auto p-8 h-5/6 items-center justify-center gap-8">
      <div className="flex flex-row w-full h-fit items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Mis articulos</h1>
          <p className="text-lg text-default-900/40">
            Escribe, edita y publica tus articulos
          </p>
        </div>
        <Button
          className="super-button"
          variant="shadow"
          onClick={handleClick}
          startContent={<FaPlus />}
        >
          Nuevo
        </Button>
      </div>
      <Divider className="w-full" />
      <section className="flex flex-col h-full items-center justify-center">
        <Card className="w-fit gap-6 py-6 px-16">
          <h2 className="text-lg">No hay articulos</h2>
        </Card>
      </section>
    </main>
  );
}
