'use client';

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFeather, FaHouse, FaInfo } from 'react-icons/fa6';

export default function NavBar() {
  const path = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', path: '/', icon: <FaHouse className="mr-1" /> },
    { name: 'Editor', path: '/writer', icon: <FaFeather className="mr-1" /> },
    { name: 'Acerca', path: '/about', icon: <FaInfo /> }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">SciGPT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="justify-items-center">
            <Link
              className={item.path == path ? 'text-yellow-200' : 'text-white'}
              href={item.path}
              size="lg"
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={'w-full ' + (item.path == path ? 'bg-text-200' : '')}
              href={item.path}
              size="lg"
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
