'use client';

import { signOut } from '@/auth';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function DropdownUser({ user }: { user: any }) {
  const router = useRouter();

  const signout = async () => {
    const success = await signOut();
    if (success) router.push('/');
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <User
          className="flex flex-row-reverse"
          avatarProps={{
            src: user?.image!,
            size: 'sm'
          }}
          name={user?.name}
          description={user?.email}
        />
      </DropdownTrigger>
      <DropdownMenu variant="solid" onAction={(key) => signout()}>
        <DropdownItem className="text-danger" color="danger">
          Cerrar sesión
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
