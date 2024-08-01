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
        control: 'w-3 h-3',
        label: 'text-secondary/90',
        description: 'text-default-700 text-xs'
      }}
    >
      {value}
    </Radio>
  );
}

export default function RadioList({
  name,
  items
}: {
  name: string;
  items: string[];
}) {
  return (
    <RadioGroup name={name.toLowerCase()} className="w-full">
      {items.length > 0 ? (
        items.map((value, i) => {
          return (
            <RadioOption
              key={`${value}-${i}`}
              value={value}
              name={name}
              index={i}
            />
          );
        })
      ) : (
        <p>No hay opciones disponibles</p>
      )}
    </RadioGroup>
  );
}
