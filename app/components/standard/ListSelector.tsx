import Icon from '@/app/components/standard/Icon';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Selection } from '@react-types/shared';
import { useState } from 'react';

export default function ListSelector({
  items,
  setValue
}: {
  items: any[];
  setValue: (value: string) => void;
}) {
  const [value, setValue_] = useState<string>(items[0].key);

  const onSelectionChange = (selection: Selection) => {
    const set = selection as Set<string>;
    const key = set.keys().next().value;
    setValue(key);
    setValue_(key);
  };

  return (
    <Listbox
      aria-label="list selector"
      variant="faded"
      hideSelectedIcon={false}
      disallowEmptySelection={true}
      className="w-auto border-default-200 dark:border-default-100 rounded-small border-small"
      selectionMode="single"
      selectedKeys={value}
      onSelectionChange={onSelectionChange}
    >
      {items.map((v) => (
        <ListboxItem
          key={v.key}
          className={v.key === value ? 'ring-yellow-200 ring-2' : ''}
          description={v.description}
          startContent={<Icon name={v.icon} />}
        >
          {v.name}
        </ListboxItem>
      ))}
    </Listbox>
  );
}
