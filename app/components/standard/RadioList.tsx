import { Radio, RadioGroup } from '@nextui-org/radio';

export function RadioOption({
  name,
  value,
  index
}: {
  name: string;
  value: string;
  index: number;
}) {
  return (
    <Radio
      value={value}
      description={`${name} ${index + 1}`}
      classNames={{
        base: 'radio-item px-4',
        labelWrapper: 'flex-col-reverse',
        control: 'w-5 h-5 bg-warning',
        wrapper: 'border-warning',
        label: 'text-yellow-600',
        description: 'text-white/60 text-xs'
      }}
    >
      {value}
    </Radio>
  );
}

export default function RadioList({
  name,
  items,
  setValue
}: {
  name: string;
  items: string[];
  setValue: (value: string) => void;
}) {
  return (
    <RadioGroup className="w-full border-frame p-4" onValueChange={setValue}>
      {items.map((value, i) => {
        return (
          <RadioOption
            key={`${value}-${i}`}
            value={value}
            name={name}
            index={i}
          />
        );
      })}
    </RadioGroup>
  );
}
