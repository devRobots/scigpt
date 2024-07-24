'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import { Chip } from '@nextui-org/react';

export function Check({
  name,
  item,
  index
}: {
  name: string;
  item: string;
  index: number;
}) {
  return (
    <Checkbox className="radio-item px-4" value={item}>
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="flex flex-row sm:flex-col items-center justify-center gap-1 min-w-20">
          <span className="text-default-700 text-xs justify-center">
            Objetivo {index + 1}
          </span>
          <Chip color="primary" size="sm" variant="flat">
            {item.split(' ')[0]}
          </Chip>
        </div>
        {item}
      </div>
    </Checkbox>
  );
}

export default function CheckList({
  name,
  items,
  setValues
}: {
  name: string;
  items: string[];
  setValues: (value: string[]) => void;
}) {
  return (
    <CheckboxGroup className="w-full" onValueChange={setValues}>
      {items.map((item, index) => {
        return (
          <Check
            key={`${name}-${index}`}
            name={name}
            index={index}
            item={item}
          />
        );
      })}
    </CheckboxGroup>
  );
}
