import { steps } from '@/app/lib/data/writerSteps';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';
import {
  FaBook,
  FaBullseye,
  FaCircleQuestion,
  FaFileCode,
  FaFileSignature
} from 'react-icons/fa6';

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
      size="lg"
    >
      {steps.map(
        (step) =>
          step && (
            <BreadcrumbItem
              key={step.id}
              isCurrent={path.endsWith(step.path)}
              isDisabled={!path.endsWith(step.path)}
            >
              {step.icon === 'FaQuestion' ? (
                <FaCircleQuestion />
              ) : step.icon === 'FaBullseye' ? (
                <FaBullseye />
              ) : step.icon === 'FaBook' ? (
                <FaBook />
              ) : step.icon === 'FaFileSignature' ? (
                <FaFileSignature />
              ) : step.icon === 'FaFileAlt' ? (
                <FaFileCode />
              ) : null}
              <p className="hidden sm:flex">{step.title}</p>
            </BreadcrumbItem>
          )
      )}
    </Breadcrumbs>
  );
}
