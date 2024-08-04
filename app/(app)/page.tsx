import { Pages } from '@/app/lib/data/consts';
import { mate } from '@/app/ui/fonts';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

import TechBrands from '@/app/components/web/TechBrands';
import UseCases from '@/app/components/web/UseCases';

export default function HomePage() {
  return (
    <main className="content-fit">
      <section className="p-4 md:8 w-full flex lg:items-center lg:gap-8 xl:gap-32.5">
        <article className="flex flex-col w-full lg:w-1/2 gap-4">
          <Image src="/main.webp" alt="main" width={256} height={303} />
          <h1 className="text-3xl font-bold md:text-6xl">
            Tu propio creador de <br /> Trabajos de Grado
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
        <article className="lg:w-1/2 hidden lg:block">
          <Card className="flex h-full p-4 md:p-8">
            <CardHeader className={mate.className + ' editorial-header'}>
              Lorem ipsum dolor sit amet
            </CardHeader>
            <CardBody className={mate.className + ' editorial-body'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nihil deleniti saepe dicta minus perspiciatis odit quo laborum.
              Autem saepe, expedita quos quaerat temporibus ab aperiam
              doloremque, reprehenderit labore pariatur ratione ducimus dicta
              debitis alias perspiciatis asperiores sequi officia eum excepturi
              nesciunt. Aliquam temporibus quibusdam iure saepe repudiandae
              obcaecati quae at accusamus placeat corrupti! Illum reprehenderit,
              dolore nulla sequi eum ipsam, possimus, nobis placeat harum
              praesentium neque est doloremque quos natus nostrum maxime
              sapiente illo? Dignissimos mollitia fuga velit modi veritatis eum
              nam! Laboriosam officiis assumenda facere aliquid eveniet
              perferendis? Eos commodi sapiente numquam nam, dicta amet eius
              officiis aliquam dolorum molestiae enim accusantium, excepturi
              necessitatibus fuga aut sint beatae qui? Fugiat ipsa sint
              molestiae laudantium exercitationem. Vero id officia sit culpa
              ipsam velit rerum nihil non error, repellendus totam, architecto
              labore ex? Fugiat, repellendus ratione, alias labore aperiam at
              provident neque ipsa excepturi quibusdam, a fugit ullam. Harum
              facere velit molestias non perspiciatis eos illum eius
              exercitationem cumque architecto voluptatum beatae nisi, aliquam
              tempore eveniet doloremque quam est inventore.
            </CardBody>
          </Card>
        </article>
      </section>
      <TechBrands />
      <article>
        <h2>Transforma tus Ideas en Conocimiento</h2>
        <p>
          Imagina tener una brillante idea para un artículo científico, pero no
          saber por dónde empezar. Nuestra aplicación está aquí para cambiar
          eso. Diseñada para hacer que la escritura científica sea simple,
          emocionante y eficiente, te guía desde la concepción de la idea hasta
          el documento final.
        </p>
      </article>
      <section>
        <h2>Cómo Funciona</h2>
        <article>
          <h3>Paso 1: Tu Idea, Nuestro Punto de Partida</h3>
          <p>
            Todo comienza con un sencillo formulario. Solo necesitas ingresar tu
            idea, los temas relacionados y seleccionar el área de estudio. No te
            preocupes por los detalles; la inteligencia artificial se encargará
            del resto.
          </p>
        </article>
        <article>
          <h3>Paso 2: Definición de Tesis o Pregunta de Investigación </h3>
          <p>
            A partir de tu idea, nuestra IA generará varias opciones de tesis o
            preguntas de investigación. Escoge la que más resuene contigo y
            continúa al siguiente paso.
          </p>
        </article>

        <article>
          <h3>Paso 3: Establecimiento de Objetivos</h3>
          <p>
            La IA te proporcionará una lista de objetivos para tu documento.
            Selecciona al menos tres objetivos que alineen con tu visión. Esto
            asegurará que tu trabajo tenga una estructura clara y enfocada.
          </p>
        </article>

        <article>
          <h3>Paso 4: Generación Automática del Documento</h3>
          <p>
            Con tus elecciones, la aplicación generará todos los apartados
            restantes del documento. Desde la introducción hasta la conclusión,
            cada sección estará diseñada para apoyar tu investigación.
          </p>
        </article>

        <article>
          <h3>Paso 5: Revisión y Personalización</h3>
          <p>
            Revisa el texto generado. Si hay algo que no te convence, puedes
            reemplazarlo con un nuevo contenido. La personalización es clave
            para asegurarte de que el documento refleje tus ideas y estilo.
          </p>
        </article>

        <article>
          <h3>Paso 6: Exportación</h3>
          <p>
            Una vez que estés satisfecho con el resultado, puedes exportar tu
            documento a Word o PDF con un solo clic.
          </p>
        </article>
      </section>
      <article>
        <h2>Potencia y Versatilidad en un Solo Lugar</h2>
        <p>
          Nuestra aplicación no solo te ahorra tiempo, sino que también eleva la
          calidad de tus escritos. Con la inteligencia artificial de tu lado,
          cada artículo científico se convierte en una obra maestra.
        </p>
      </article>
      <UseCases />
      <section>
        <article>
          <h3>Eficiencia</h3>
          <p>Transforma horas de trabajo en minutos.</p>
        </article>
        <article>
          <h3>Calidad</h3>
          <p>Genera contenido coherente y bien estructurado.</p>
        </article>
        <article>
          Personalización: Ajusta el texto a tu estilo y necesidades.
        </article>
        <article>
          Accesibilidad: Disponible para diversas disciplinas y niveles
          académicos.
        </article>
      </section>
      <article>
        <h2>Únete a la Revolución</h2>
        <p>
          No dejes que la falta de tiempo o inspiración te detenga. Nuestra
          aplicación está diseñada para ayudarte a llevar tus ideas al siguiente
          nivel. Empieza hoy mismo y descubre cómo la inteligencia artificial
          puede transformar tu proceso de escritura científica.
        </p>
      </article>
    </main>
  );
}
