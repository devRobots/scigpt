import { App, Pages } from '@/app/lib/data/consts';
import { getDraftsCountByOwner } from '@/app/lib/firebase/firestore';
import { auth } from '@/auth';
import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaFilePen, FaPlus } from 'react-icons/fa6';

export default async function NewDraft() {
  const session = await auth();
  const user = session?.user;
  if (!user) return redirect(Pages.Login);

  const draftsCount = await getDraftsCountByOwner(user.email!);

  return (
    <div className="flex flex-row-reverse sm:flex-row gap-4 items-center justify-start">
      <Chip size="lg" startContent={<FaFilePen className="mx-2" />}>
        {draftsCount}/3
      </Chip>
      {draftsCount < 3 && (
        <Link href={`${Pages.Writer}/${App.New}`}>
          <Button
            className="super-button"
            variant="shadow"
            startContent={<FaPlus />}
          >
            Nuevo
          </Button>
        </Link>
      )}
    </div>
  );
}
