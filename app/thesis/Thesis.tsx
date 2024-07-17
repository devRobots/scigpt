import { Radio, RadioGroup } from '@nextui-org/radio';
import { cn } from '@nextui-org/react';

export function ThesisItem({
  children,
  value
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <Radio
      value={value}
      classNames={{
        base: cn(
          'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
          'flex-row-reverse w-[40%] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        )
      }}
    >
      {children}
    </Radio>
  );
}

export default function ThesisList({ thesis }: { thesis: string[] }) {
  const hasThesis = thesis ? thesis.length > 0 : false;
  return hasThesis ? (
    <RadioGroup className="w-full">
      {thesis.map((str) => {
        return <ThesisItem value={str}>{str}</ThesisItem>;
      })}
    </RadioGroup>
  ) : (
    <p>No thesis generated</p>
  );
}
