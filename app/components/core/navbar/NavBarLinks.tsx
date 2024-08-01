'use client';

import { Link } from '@nextui-org/link';
import { NavbarItem, NavbarMenuItem } from '@nextui-org/navbar';
import { usePathname } from 'next/navigation';
import { FaFeather, FaHouse, FaInfo } from 'react-icons/fa6';

function isPath(path: string, pathname: string) {
  console.log(path, pathname);
  if (pathname === '/') return path === '/';
  return path.startsWith(pathname);
}

function menu(path: string, pathname: string) {
  if (isPath(path, pathname)) return 'text-primary';
  else return 'text-white';
}

export default function NavBarLinks({ isMenu }: { isMenu?: boolean }) {
  const path = usePathname();
  const ItemType = isMenu ? NavbarMenuItem : NavbarItem;

  return (
    <>
      <ItemType key="navbaritem-0" className="justify-items-center">
        <Link className={menu(path, '/')} href="/" size="lg">
          <FaHouse className="mr-1" />
          Inicio
        </Link>
      </ItemType>
      <ItemType key="navbaritem-1" className="justify-items-center">
        <Link className={menu(path, '/app')} href="/app" size="lg">
          <FaFeather className="mr-1" />
          Editor
        </Link>
      </ItemType>
      <ItemType key="navbaritem-2" className="justify-items-center">
        <Link className={menu(path, '/about')} href="/about" size="lg">
          <FaInfo />
          Acerca
        </Link>
      </ItemType>
    </>
  );
}
