import { fieldsOfStudy } from '@/app/lib/fieldsOfStudy';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Selection } from '@react-types/shared';
import { Dispatch, useState } from 'react';
import {
  FaAtom,
  FaBrain,
  FaComputer,
  FaGraduationCap,
  FaMicroscope,
  FaScrewdriverWrench,
  FaStethoscope
} from 'react-icons/fa6';

interface FieldOfStudySelectorProps {
  setFieldOfStudy: Dispatch<string>;
}

export default function FieldOfStudySelector({
  setFieldOfStudy
}: FieldOfStudySelectorProps) {
  const [fieldOfStudyKey, setFieldOfStudyKey] = useState(new Set(''));

  const onSelectionFieldOfStudy = (selection: Selection) => {
    const set = selection as Set<string>;
    const key = set.keys().next().value;

    setFieldOfStudyKey(key);
    setFieldOfStudy(key);
  };

  return (
    <>
      <div className="border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        <Listbox
          label="Categoria"
          variant="faded"
          hideSelectedIcon={false}
          disallowEmptySelection={true}
          className="w-auto"
          selectionMode="single"
          selectedKeys={fieldOfStudyKey}
          onSelectionChange={onSelectionFieldOfStudy}
        >
          {fieldsOfStudy.map((field) => (
            <ListboxItem
              key={field.key}
              description={field.description}
              startContent={
                field.key === 'Computer Science' ? (
                  <FaComputer />
                ) : field.key === 'Engineering' ? (
                  <FaScrewdriverWrench />
                ) : field.key === 'Medicine' ? (
                  <FaStethoscope />
                ) : field.key === 'Biology' ? (
                  <FaMicroscope />
                ) : field.key === 'Psychology' ? (
                  <FaBrain />
                ) : field.key === 'Education' ? (
                  <FaGraduationCap />
                ) : (
                  <FaAtom />
                )
              }
            >
              {field.name}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </>
  );
}
