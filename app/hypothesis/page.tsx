'use client';

import { generateHypothesis } from '@/lib/hypothesis';
import { Radio, RadioGroup } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

export function HypotesisRadio({
  children,
  description,
  value
}: {
  children: React.ReactNode;
  description: string;
  value: string;
}) {
  return (
    <Radio
      value={value}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse w-[45%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        )
      }}
    >
      {children}
    </Radio>
  );
}

export default function Hypotesis() {
  const [hypothesis, setHypothesis] = useState<string[]>([]);

  const searchParams = useSearchParams();
  const topic = searchParams.get('topic') || 'artificial intelligence';
  const fieldOfStudy = searchParams.get('fieldOfStudy') || 'Computer Science';

  useMemo(() => {
    generateHypothesis(topic, fieldOfStudy).then((data) => {
      setHypothesis(data);
    });
  }, []);

  return (
    <main className="p-8">
      <h1 className="editorial-header mb-8">Hypothesis</h1>
      <div>
        <RadioGroup label="Plans" className="w-full">
          {hypothesis.map((str) => {
            return (
              str && (
                <HypotesisRadio value={str} description={''}>
                  {str}
                </HypotesisRadio>
              )
            );
          })}
        </RadioGroup>
      </div>
    </main>
  );
}
