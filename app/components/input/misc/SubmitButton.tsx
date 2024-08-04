import { Button } from '@nextui-org/react';

export default function SubmitButton({ label }: { label: string }) {
  return (
    <Button className="w-full sm:w-fit bg-primary text-default-50" type="submit">
      {label}
    </Button>
  );
}
