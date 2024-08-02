import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <Image src="/lost+found.webp" width={256} height={236} alt="Error 404" />
      <div>
        <h1 className="font-bold text-xl text-center">
          Error 404: No encontrado
        </h1>
        <p>No se pudo encontrar el recurso solicitado</p>
      </div>
      <Link href="/">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
}
