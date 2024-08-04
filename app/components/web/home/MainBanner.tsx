import { Pages } from '@/app/lib/data/consts';
import { mate } from '@/app/ui/fonts';
import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

export default function MainBanner() {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center justify-center gap-8 my-8">
      <article className="flex flex-col w-full lg:w-2/5 gap-4">
        <Image src="/main.webp" alt="main" width={200} height={303} />
        <h1 className="text-3xl font-bold sm:text-6xl">
          Crea Trabajos de Grado con IA
        </h1>
        <p className="w-full text-lg">
          Bienvenido a una nueva era <br className="block sm:hidden" /> en la
          creación de conocimiento.
        </p>
        <div className="w-full flex">
          <Link href={Pages.Writer}>
            <Button
              radius="lg"
              size="lg"
              endContent={<FaArrowRight />}
              className="super-button"
            >
              Empieza aqui
            </Button>
          </Link>
        </div>
      </article>
      <article className="lg:w-96">
        <Card className="flex h-full p-4 md:p-8">
          <CardHeader className={mate.className + ' editorial-header'}>
            <h2>Transforma tus Ideas en Conocimiento</h2>
          </CardHeader>
          <CardBody className={mate.className + ' editorial-body'}>
            Imagina tener una brillante idea para un artículo científico, pero
            no saber por dónde empezar. Nuestra aplicación está aquí para
            cambiar eso. Diseñada para hacer que la escritura científica sea
            simple, emocionante y eficiente, te guía desde la concepción de la
            idea hasta el documento final.
          </CardBody>
        </Card>
      </article>
    </section>
  );
}
