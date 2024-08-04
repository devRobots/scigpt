'use client';

import { signOut } from '@/auth';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User
} from '@nextui-org/react';

export default function DropdownUser({ user }: { user: any }) {
  const signout = async () => {
    await signOut({
      redirectTo: '/login',
      redirect: true
    });
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
