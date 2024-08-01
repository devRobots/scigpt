import DropdownUser from './DropdownUser';
import { auth } from '@/auth';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default async function UserButton() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      {user ? (
        <DropdownUser user={user} />
      ) : (
        <Link href="/login">
          <Button size="sm">Iniciar sesión</Button>
        </Link>
      )}
    </>
  );
}
