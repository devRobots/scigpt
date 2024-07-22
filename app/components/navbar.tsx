'use client';

import { onAuthStateChanged } from '@/app/lib/firebase/auth';
import { Link } from '@nextui-org/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/navbar';
import { User } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFeather, FaHouse, FaInfo } from 'react-icons/fa6';

function checkRoute(path: string, route: string) {
  if (route === '/writer') {
    return path.startsWith(route);
  }
  return path === route;
}

const menuItems = [
  { id: 'index', name: 'Inicio', path: '/' },
  { id: 'editor', name: 'Editor', path: '/writer' },
  { id: 'about', name: 'Acerca', path: '/about' }
];

export default function NavBar() {
  const path = usePathname();
  const [user, setUser] = useState<User>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">SciGPT</p>
        </NavbarBrand>
        <NavbarContent className="flex sm:hidden gap-4" justify="end">
          {user && (
            <User
              avatarProps={{
                src: user.photoURL
              }}
              name={user.displayName}
              description={user.email}
            />
          )}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id} className="justify-items-center">
            <Link
              className={
                checkRoute(path, item.path)
                  ? 'text-yellow-200'
                  : 'text-foreground'
              }
              href={item.path}
              size="lg"
            >
              {item.name === 'Inicio' ? (
                <FaHouse className="mr-1" />
              ) : item.name === 'Editor' ? (
                <FaFeather className="mr-1" />
              ) : (
                <FaInfo />
              )}
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" as="div" justify="end">
        {user && (
          <User
            avatarProps={{
              src: user.photoURL
            }}
            name={user.displayName}
            description={user.email}
          />
        )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.id}-sm`}>
            <Link
              className={
                'w-full ' +
                (item.path == path ? 'text-yellow-200' : 'text-foreground')
              }
              href={item.path}
              size="lg"
            >
              {item.name === 'Inicio' ? (
                <FaHouse className="mr-1" />
              ) : item.name === 'Editor' ? (
                <FaFeather className="mr-1" />
              ) : (
                <FaInfo />
              )}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
