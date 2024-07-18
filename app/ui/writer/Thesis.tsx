import { generateThesis } from '@/app/lib/thesis';
import { Radio, RadioGroup } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';

export function ThesisItem({ value }: { value: string }) {
  return (
    <Radio
      key={value}
      value={value}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse w-[40%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        )
      }}
    >
      {value}
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
      {thesis.map((str) => {
        return <ThesisItem value={str} />;
      })}
    </RadioGroup>
  );
}
