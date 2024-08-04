import { Fa1, Fa2, Fa3, Fa4, Fa5 } from 'react-icons/fa6';

import { TimelineItem } from '@/app/components/web/about/Timeline';

export default function Tutorial() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center">
      <h2 className="text-2xl font-bold">¿Cómo Funciona?</h2>
      <section className="items-center lg:items-start lg:flex h-full">
        <TimelineItem
          title="Tu Idea, Nuestro Punto de Partida"
          content="Todo comienza con un sencillo formulario. Solo necesitas ingresar tu idea, los temas relacionados y seleccionar el área de estudio. No te preocupes por los detalles; la inteligencia artificial se encargará del resto."
          icon={<Fa1 className="text-black" />}
        />

        <TimelineItem
          title="Definición de Tesis o Pregunta de Investigación"
          content="A partir de tu idea, nuestra IA generará varias opciones de tesis o preguntas de investigación. Escoge la que más resuene contigo y continúa al siguiente paso."
          icon={<Fa2 className="text-black" />}
        />

        <TimelineItem
          title="Establecimiento de Objetivos"
          content="La IA te proporcionará una lista de objetivos para tu documento. Selecciona al menos tres objetivos que alineen con tu visión. Esto asegurará que tu trabajo tenga una estructura clara y enfocada."
          icon={<Fa3 className="text-black" />}
        />

        <TimelineItem
          title="Generación Automática del Documento"
          content="Con tus elecciones, la aplicación generará todos los apartados restantes del documento. Desde la introducción hasta la conclusión, cada sección estará diseñada para apoyar tu investigación."
          icon={<Fa4 className="text-black" />}
        />

        <TimelineItem
          title="Revisión y Personalización"
          content="Revisa el texto generado. Si hay algo que no te convence, puedes reemplazarlo con un nuevo contenido. La personalización es clave para asegurarte de que el documento refleje tus ideas y estilo."
          icon={<Fa5 className="text-black" />}
        />
      </section>
    </section>
  );
}
