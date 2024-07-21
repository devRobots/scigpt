import { steps } from '@/app/lib/data/writerSteps';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';
import { FaFeather } from 'react-icons/fa6';

export default function Breadcrumb() {
  const path = usePathname();

  return (
    <Breadcrumbs
      underline="hover"
      className="pb-8"
      classNames={{
        list: 'bg-gradient-to-br from-yellow-200 to-amber-100 shadow-small'
      }}
      itemClasses={{
        item: 'text-black',
        separator: 'text-black/40'
      }}
      variant="solid"
    >
      <BreadcrumbItem>
        <FaFeather />
      </BreadcrumbItem>
      {steps.map((step) => (
        <BreadcrumbItem
          key={step.id}
          isCurrent={path.endsWith(step.path)}
          isDisabled={!path.endsWith(step.path)}
        >
          {step.title}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
