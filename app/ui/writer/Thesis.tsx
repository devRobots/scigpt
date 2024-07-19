import { generateThesis } from '@/app/lib/thesis';
import { Radio, RadioGroup } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';

export function ThesisItem({ index, value }: { index: number; value: string }) {
  return (
    <Radio
      value={value}
      description={value}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        )
      }}
    >
      {`Hipotesis ${index}`}
    </Radio>
  );
}

export default async function ThesisList({
  topics,
  fieldOfStudy
}: {
  topics: string[];
  fieldOfStudy: string;
}) {
  const thesis = await generateThesis(topics, fieldOfStudy);

  if (!thesis) return <p>No thesis generated</p>;

  return (
    <RadioGroup className="w-full">
      {thesis.map((str, index) => {
        return (
          <ThesisItem key={`${str}-${index}`} index={index + 1} value={str} />
        );
      })}
    </RadioGroup>
  );
}
