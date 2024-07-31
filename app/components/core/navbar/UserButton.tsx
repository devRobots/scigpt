import { auth } from '@/auth';
import { Button } from '@nextui-org/button';
import { User } from '@nextui-org/user';
import Link from 'next/link';

export default async function UserButton() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      {user ? (
        <User
          className="flex flex-row-reverse"
          avatarProps={{
            src: user?.image!,
            size: 'sm'
          }}
          name={user?.name}
          description={user?.email}
        />
      ) : (
        <Link href="/login">
          <Button size="sm">Iniciar sesión</Button>
        </Link>
      )}
    </>
  );
}
