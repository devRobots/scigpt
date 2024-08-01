'use client';

import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Selection } from '@react-types/shared';
import { useState } from 'react';

import Icon from '@/app/components/standard/Icon';

export default function ListSelector({
  name,
  items
}: {
  name: string;
  items: any[];
}) {
  const [value, setValue] = useState<string>(items[0].key);

  const onSelectionChange = (selection: Selection) => {
    const set = selection as Set<string>;
    const key = set.keys().next().value;
    setValue(key);
  };

  return (
    <>
      <Listbox
        aria-label={name}
        variant="faded"
        hideSelectedIcon={false}
        disallowEmptySelection={true}
        className="w-auto border-frame"
        selectionMode="single"
        selectedKeys={value}
        onSelectionChange={onSelectionChange}
      >
        {items.map((v) => (
          <ListboxItem
            key={v.key}
            className={(value == v.key && 'ring-primary ring-2') + ' gap-3'}
            description={v.description}
            startContent={<Icon name={v.icon} />}
          >
            {v.name}
          </ListboxItem>
        ))}
      </Listbox>
      <input type="hidden" name={name} value={value} />
    </>
  );
}
