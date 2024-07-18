import { useDraft } from '@/app/hooks/useDraft';
import { fieldsOfStudy } from '@/app/lib/fieldsOfStudy';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Selection } from '@react-types/shared';
import {
  FaAtom,
  FaBrain,
  FaComputer,
  FaGraduationCap,
  FaMicroscope,
  FaScrewdriverWrench,
  FaStethoscope
} from 'react-icons/fa6';

export default function FieldOfStudySelector() {
  const { draft, setFieldOfStudy } = useDraft();

  const onSelectionFieldOfStudy = (selection: Selection) => {
    const set = selection as Set<string>;
    const key = set.keys().next().value;
    setFieldOfStudy(key);
  };

  return (
    <>
      <Listbox
        label="Categoria"
        variant="faded"
        hideSelectedIcon={false}
        disallowEmptySelection={true}
        className="w-auto border-default-200 dark:border-default-100 rounded-small border-small"
        selectionMode="single"
        selectedKeys={draft.fieldOfStudy}
        onSelectionChange={onSelectionFieldOfStudy}
      >
        {fieldsOfStudy.map((field) => (
          <ListboxItem
            key={field.key}
            className={
              field.key === draft.fieldOfStudy ? 'ring-yellow-200 ring-2' : ''
            }
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
    </>
  );
}
