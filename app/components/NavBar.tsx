'use client';

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

function getUserFromCookie() {
  const cookies = document.cookie.split(';');
  const userCookieMatch = cookies.filter((c) =>
    c.includes('sb-jjcduwakfvdvsmuugoqd-auth-token')
  );
  if (userCookieMatch.length != 2) return null;
  const userCookieRaw1 = userCookieMatch[0].split('=')[1];
  const userCookieRaw2 = userCookieMatch[1].split('=')[1];
  const userCookieRaw = userCookieRaw1 + userCookieRaw2;
  const userCookieEnc = userCookieRaw?.replace('base64-', '');
  const base64Buffer = Buffer.from(userCookieEnc || '', 'base64');
  const userCookieDec = base64Buffer.toString('utf-8');
  return userCookieDec ? JSON.parse(userCookieDec).user : null;
}

export default function NavBar() {
  const path = usePathname();
  const [user, setUser] = useState<User>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const user = getUserFromCookie();
    if (!user) return;

    const { user_metadata, email } = user;
    const { name, avatar_url } = user_metadata;
    setUser({
      displayName: name,
      photoURL: avatar_url,
      email: email || ''
    });
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
              className="flex flex-row-reverse"
              avatarProps={{
                src: user.photoURL,
                size: 'sm'
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
                checkRoute(path, item.path) ? 'text-primary' : 'text-foreground'
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
            className="flex flex-row-reverse"
            avatarProps={{
              src: user.photoURL,
              size: 'sm'
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
                (checkRoute(path, item.path)
                  ? 'text-primary'
                  : 'text-foreground')
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
