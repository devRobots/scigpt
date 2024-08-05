import { Pages } from '@/app/lib/data/consts';
import { auth, signOut } from '@/auth';
import { Button } from '@nextui-org/button';
import { User } from '@nextui-org/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

export default async function UserButton() {
  const session = await auth();
  const user = session?.user;

  return (
    <>
      {user ? (
        <>
          <User
            className="flex flex-row-reverse"
            avatarProps={{
              src: user?.image!,
              size: 'sm'
            }}
            name={user?.name}
            description={user?.email}
          />
          <form
            action={async () => {
              'use server';
              await signOut();
              redirect(Pages.Login);
            }}
          >
            <button
              className="rounded-full hover:cursor-pointer hover:bg-danger/40 p-2"
              type="submit"
            >
              <FaArrowRightFromBracket style={{ color: 'red' }} />
            </button>
          </form>
        </>
      ) : (
        <Link href="/login">
          <Button size="sm">Iniciar sesión</Button>
        </Link>
      )}
    </>
  );
}
