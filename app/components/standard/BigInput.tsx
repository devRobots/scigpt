import { Input } from '@nextui-org/input';
import { useEffect, useState } from 'react';

export default function BigInput({
  label,
  setValue
}: {
  label: string;
  setValue: (value: string) => void;
}) {
  const [value, setValue_] = useState('');

  useEffect(() => {
    setValue(value);
  }, [value, setValue]);

  return (
    <Input
      value={value}
      onValueChange={setValue_}
      classNames={{ input: 'text-xl font-bold' }}
      label={label}
      size="lg"
      variant="underlined"
    />
  );
}
