import { Card } from '@nextui-org/react';
import Image from 'next/image';

export default function NotFound({ text }: { text: string }) {
  return (
    <section className="flex m-0 h-full w-full items-center justify-center">
      <Card className="w-fit gap-6 py-6 px-16 items-center justify-center">
        <Image
          src="/lost+found.webp"
          width={256}
          height={237}
          alt="Error 404"
          priority
        />
        <h2 className="text-lg text-center">{text}</h2>
      </Card>
    </section>
  );
}
