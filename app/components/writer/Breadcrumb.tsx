import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';
import {
  FaBullseye,
  FaCircleQuestion,
  FaEye,
  FaFileExport
} from 'react-icons/fa6';
import { IoSparkles } from 'react-icons/io5';

export default function Breadcrumb() {
  const path = usePathname();

  return (
    <Breadcrumbs
      underline="none"
      classNames={{
        list: 'bg-gradient-to-br from-yellow-100 to-amber-300 shadow-small'
      }}
      itemClasses={{
        item: 'text-black',
        separator: 'text-black/40'
      }}
      variant="solid"
      size="lg"
    >
      <BreadcrumbItem
        key="breadcrumb-0"
        isDisabled={!path.includes('thesis')}
        isCurrent
      >
        <FaCircleQuestion />
        <p className="hidden sm:flex">Hipotesis</p>
      </BreadcrumbItem>
      <BreadcrumbItem
        key="breadcrumb-1"
        isDisabled={!path.includes('objectives')}
        isCurrent
      >
        <FaBullseye />
        <p className="hidden sm:flex">Objetivos</p>
      </BreadcrumbItem>
      <BreadcrumbItem
        key="breadcrumb-2"
        isDisabled={!path.includes('writer')}
        isCurrent
      >
        <IoSparkles />
        <p className="hidden sm:flex">Redaccion IA</p>
      </BreadcrumbItem>
      <BreadcrumbItem
        key="breadcrumb-3"
        isDisabled={!path.includes('review')}
        isCurrent
      >
        <FaEye />
        <p className="hidden sm:flex">Revision</p>
      </BreadcrumbItem>
      <BreadcrumbItem
        key="breadcrumb-4"
        isDisabled={!path.includes('export')}
        isCurrent
      >
        <FaFileExport />
        <p className="hidden sm:flex">Exportar</p>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
