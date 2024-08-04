import { Input } from '@nextui-org/input';

export default function BigInput({ name }: { name: string }) {
  return (
    <Input
      name={name.toLowerCase()}
      classNames={{ input: 'text-xl font-bold' }}
      label={name}
      size="lg"
      variant="underlined"
    />
  );
}
