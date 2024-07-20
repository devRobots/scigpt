'use client';

import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import { Chip, cn } from '@nextui-org/react';

export default function ObjectiveList({
  objectives,
  setObjectives
}: {
  objectives: string[];
  setObjectives: (value: string[]) => void;
}) {
  return (
    <CheckboxGroup className="w-full" onValueChange={setObjectives}>
      {objectives.map((value, index) => {
        return (
          <Checkbox
            classNames={{
              base: cn(
                'inline-flex w-full bg-content1 m-0',
                'hover:bg-content2 items-center justify-start',
                'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
                'data-[selected=true]:bg-warning/30'
              ),
              label: 'w-full'
            }}
            value={value}
          >
            <div className="w-full flex justify-between gap-2">
              <div className="flex flex-col items-start gap-1">
                <span className="text-tiny w-20 text-default-500">{`Objetivo ${index + 1}`}</span>
                <Chip color="warning" size="sm" variant="flat">
                  {value.split(' ')[0]}
                </Chip>
              </div>
              {value}
            </div>
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
}
