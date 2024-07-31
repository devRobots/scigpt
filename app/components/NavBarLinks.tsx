import { Link } from '@nextui-org/link';
import { NavbarItem, NavbarMenuItem } from '@nextui-org/navbar';
import { FaHouse, FaFeather, FaInfo } from 'react-icons/fa6';

export default function NavBarLinks({ isMenu }: { isMenu?: boolean }) {
  const ItemType = isMenu ? NavbarMenuItem : NavbarItem;

  return (
    <>
      <ItemType key="navbaritem-0" className="justify-items-center">
        <Link className="text-white" href="/" size="lg">
          <FaHouse className="mr-1" />
          Inicio
        </Link>
      </ItemType>
      <ItemType key="navbaritem-1" className="justify-items-center">
        <Link className="text-white" href="/app" size="lg">
          <FaFeather className="mr-1" />
          Editor
        </Link>
      </ItemType>
      <ItemType key="navbaritem-2" className="justify-items-center">
        <Link className="text-white" href="/about" size="lg">
          <FaInfo />
          Acerca
        </Link>
      </ItemType>
    </>
  );
}
