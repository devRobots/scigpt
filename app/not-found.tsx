import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col h-1 justify-center items-center">
      <h1 className="font-bold text-xl">Error 404: No encontrado</h1>
      <p>No se pudo encontrar el recurso solicitado</p>
      <Link href="/" className="mt-4">
        <Button>Volver al inicio</Button>
      </Link>
    </div>
  );
}
