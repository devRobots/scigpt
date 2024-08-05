import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="content-full">
      <Image
        src="/lost+found.webp"
        width={256}
        height={237}
        alt="Error 404"
        priority
      />
      <article>
        <h1 className="font-bold text-xl text-center">
          Error 404: No encontrado
        </h1>
        <p>No se pudo encontrar el recurso solicitado</p>
      </article>
      <Link href="/">
        <Button>Volver al inicio</Button>
      </Link>
    </main>
  );
}
