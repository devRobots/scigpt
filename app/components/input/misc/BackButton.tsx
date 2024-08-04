'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function BackButton({
  label,
  href
}: {
  label: string;
  href?: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    if (href) router.push(href);
    else router.back();
  };

  return (
    <Button className="w-full sm:w-auto" onClick={handleBack}>
      {label}
    </Button>
  );
}
