'use client';

import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Divider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { getDraft } from '../lib/firebase/firestore';

export default function Writer() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/writer/new');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const uuid = formData.get('uuid') as string;
    if (!uuid) return;

    const { draft } = await getDraft(uuid);
    if (!draft) return;

    router.push(`/writer/${uuid}/${draft.stage}`);
  };

  return (
    <main className="flex flex-col my-auto p-8 h-10 items-center justify-center gap-8">
      <section>
        <Card className="w-fit gap-6 py-6 px-16">
          <h1 className="text-lg">Escribe un nuevo articulo</h1>
          <Button
            className="super-button"
            variant="shadow"
            onClick={handleClick}
          >
            Empieza a escribir
          </Button>
        </Card>
      </section>
      <Divider className="w-64" />
      <section>
        <Card className="w-fit gap-4 py-6 px-16">
          <h2 className="text-lg">Continua donde lo dejaste</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              name="uuid"
              placeholder="Buscar articulo"
              variant="faded"
              className="text-center"
            />
            <Button variant="flat" color="warning" type="submit">
              Seguir editando
            </Button>
          </form>
        </Card>
      </section>
    </main>
  );
}
