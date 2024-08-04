import { Divider } from '@nextui-org/react';

import SimpleArticle from '@/app/components/web/SimpleArticle';
import MyStory from '@/app/components/web/about/MyStory';
import Tutorial from '@/app/components/web/about/Tutorial';

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full p-4 items-center justify-center gap-16 md:gap-32">
      <MyStory />
      <SimpleArticle
        title="Escribe, Innova, Descubre"
        content="En esta plataforma, no solo escribirás, sino que innovarás y descubrirás nuevas formas de expresar tus conocimientos. Olvídate de los textos aburridos y repetitivos; aquí, cada palabra cuenta una historia."
      />
      <Tutorial />
      <section className="flex flex-col sm:flex-row gap-16 md:w-2/3">
        <SimpleArticle
          title="Impulsados por la Pasión, Guiados por la Tecnología"
          content="Queria que los estudiantes, investigadores y cientificos puedan expresar su conocimiento de manera emocionante y auténtica. Con esta herramienta, cada artículo científico se convierte en una obra maestra."
        />
        <SimpleArticle
          title="De la frustracion al Inspiracion"
          content="Decidi convertir la frustracion de escribir en un viaje inspirador. No más bloqueos creativos ni documentos interminables. Solo tú, tus ideas y las tecnologías de inteligencia artificial, trabajando juntos para crear lo extraordinario."
        />
      </section>
      <SimpleArticle
        title="La Revolución de la Escritura Científica"
        content="Una plataforma innovadora que utiliza inteligencia artificial para transformar como se escriben los artículos científicos. Aquí, la creatividad y la ciencia convergen para dar vida a tus ideas de una manera dinámica y emocionante."
      />
      <Divider />
    </main>
  );
}
