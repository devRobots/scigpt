import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle
} from '@nextui-org/navbar';
import UserButton from './UserButton';
import NavBarLinks from './NavBarLinks';
import NavBarMenuLinks from './NavBarMenuLinks';

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <p className="font-bold text-inherit">SciGPT</p>
        </NavbarBrand>
        <NavbarContent className="flex sm:hidden gap-4" justify="end">
          <UserButton />
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavBarLinks />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" as="div" justify="end">
        <UserButton />
      </NavbarContent>
      <NavbarMenu>
        <NavBarMenuLinks />
      </NavbarMenu>
    </Navbar>
  );
}
