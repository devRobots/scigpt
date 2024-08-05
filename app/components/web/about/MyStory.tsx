import Image from 'next/image';
import Link from 'next/link';

export default function MyStory() {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 mt-6">
      <div className="flex lg:w-1/3 justify-center">
        <Image
          className="rounded-full"
          src="/me.webp"
          alt="devRobots"
          width={360}
          height={360}
        />
      </div>
      <article className="flex flex-col lg:w-1/3 gap-4">
        <h1 className="text-5xl font-extrabold">Mi Historia</h1>
        <p className="text-lg">
          Hola, soy{' '}
          <Link href="https://github.com/devRobots/" className="text-primary">
            @devRobots
          </Link>{' '}
          y llevo 7 años haciendo una carrera de Ingeniería de Sistemas y
          Computación y mi trabajo de grado se convirtió en mi mayor desafío. La
          falta de inspiración y la tediosa tarea de escribir documentos
          extensos y repetitivos me hicieron cuestionar mi pasión. De esa
          frustración nació una idea brillante: ¿Y si la inteligencia artificial
          pudiera realizar una escritura científica emocionante y creativa? Así
          comenzó la idea de esta aplicación, una herramienta diseñada para
          revolucionar la manera en que los estudiantes crean conocimientos.
        </p>
      </article>
    </section>
  );
}
