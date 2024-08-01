import { Pages, App } from '@/app/lib/data/consts';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/react';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';

import PersonalDrafts from '@/app/components/writer/PersonalDrafts';

export default function Writer() {
  return (
    <main className="flex flex-col my-auto p-8 h-5/6 items-center justify-center gap-8">
      <div className="flex flex-row w-full h-fit items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Mis articulos</h1>
          <p className="text-lg text-default-900/40">
            Escribe, edita y publica tus articulos
          </p>
        </div>
        <Link href={`${Pages.Writer}/${App.New}`}>
          <Button
            className="super-button"
            variant="shadow"
            startContent={<FaPlus />}
          >
            Nuevo
          </Button>
        </Link>
      </div>
      <Divider className="w-full" />
      <section className="flex flex-col w-full h-full items-center justify-center">
        <PersonalDrafts />
      </section>
    </main>
  );
}
