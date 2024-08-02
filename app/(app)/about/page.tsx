import { Image as Img } from '@nextui-org/react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="content-fit">
      <section>
        <section>
          <Img
            as={Image}
            src="/me.webp"
            alt="devRobots"
            width={420}
            height={420}
            radius="full"
            isBlurred
          />
        </section>
        <article>
          <h2>Mi Historia</h2>
          <p>
            Hola, soy @devRobots. Durante siete años, he estado inmerso en el
            fascinante mundo de la Ingeniería de Sistemas y Computación. Sin
            embargo, completar mi trabajo de grado se convirtió en un desafío
            abrumador. La falta de inspiración y la tediosa tarea de escribir
            documentos extensos y repetitivos me hicieron cuestionar mi pasión.
            Pero de esa frustración nació una idea brillante: ¿Y si la
            inteligencia artificial pudiera transformar la escritura científica
            en algo emocionante y creativo? Así comenzó la historia de esta
            aplicación, una herramienta diseñada para revolucionar la manera en
            que los estudiantes y profesionales crean y comparten sus
            conocimientos.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>La Revolución de la Escritura Científica</h2>
          <p>
            Así nació esta aplicación: una plataforma innovadora que utiliza
            inteligencia artificial para transformar como se escriben los
            artículos científicos. Aquí, la creatividad y la ciencia convergen
            para dar vida a tus ideas de una manera dinámica y emocionante.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>Escribe, Innova, Descubre</h2>
          <p>
            En esta plataforma, no solo escribirás, sino que innovarás y
            descubrirás nuevas formas de expresar tus conocimientos. Olvídate de
            los textos aburridos y repetitivos; aquí, cada palabra cuenta una
            historia.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>Impulsados por la Pasión, Guiados por la Tecnología</h2>
          <p>
            Queria que los estudiantes, investigadores y cientificos puedan
            expresar su conocimiento de manera emocionante y auténtica. Con esta
            herramienta, cada artículo científico se convierte en una obra
            maestra.
          </p>
        </article>
      </section>
      <section>
        <article>
          <h2>De la frustracion al Inspiracion</h2>
          <p>
            Decidi convertir la frustracion de escribir en un viaje inspirador.
            No más bloqueos creativos ni documentos interminables. Solo tú, tus
            ideas y las tecnologías de inteligencia artificial, trabajando
            juntos para crear lo extraordinario.
          </p>
        </article>
      </section>
    </main>
  );
}
