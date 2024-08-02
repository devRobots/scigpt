import { App, Pages } from '@/app/lib/data/consts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa6';

import PersonalDrafts from '@/app/components/writer/PersonalDrafts';

export default function Writer() {
  return (
    <main className="flex flex-col p-4 items-center justify-between lg:space-y-36 gap-8">
      <div className="flex flex-col w-full sm:flex-row sm:items-center sm:justify-around gap-2">
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
      <PersonalDrafts />
    </main>
  );
}
