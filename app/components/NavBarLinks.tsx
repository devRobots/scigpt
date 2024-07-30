import { Link } from '@nextui-org/link';
import { NavbarItem } from '@nextui-org/navbar';
import { FaHouse, FaFeather, FaInfo } from 'react-icons/fa6';
import { links } from '@/app/lib/data/navbarLinks';

export default function NavBarLinks() {
  return (
    <>
      {links.map((item) => (
        <NavbarItem key={item.id} className="justify-items-center">
          <Link className="text-white" href={item.path} size="lg">
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
    </>
  );
}
