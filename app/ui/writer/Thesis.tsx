'use client';

import { Radio, RadioGroup } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';

export default function ThesisList({
  hypothesis,
  setHypothesis
}: {
  hypothesis: string[];
  setHypothesis: (value: string) => void;
}) {
  return (
    <RadioGroup
      name="hypothesis"
      className="w-full"
      onValueChange={setHypothesis}
    >
      {hypothesis.map((value, index) => {
        return (
          <Radio
            key={`${value}-${index}`}
            value={value}
            description={`Hipotesis ${index + 1}`}
            classNames={{
              base: cn(
                'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
                'flex-row w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
                'data-[selected=true]:border-primary'
              )
            }}
          >
            {value}
          </Radio>
        );
      })}
    </RadioGroup>
  );
}
