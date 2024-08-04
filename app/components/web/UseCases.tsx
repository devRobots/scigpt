import { Card, CardBody, CardHeader } from '@nextui-org/react';

export default function UseCases() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8">
      <h2 className="text-2xl font-bold">Casos de Uso</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <article>
          <Card className="w-full md:w-72">
            <CardHeader className="flex justify-center text-center">
              <h3 className="text-lg font-bold">Estudiantes</h3>
            </CardHeader>
            <CardBody className="flex items-center text-center">
              <p>Simplifica la creación de trabajos académicos y tesis.</p>
            </CardBody>
          </Card>
        </article>
        <article>
          <Card className="w-full md:w-72">
            <CardHeader className="flex justify-center text-center">
              <h3 className="text-lg font-bold">Investigadores</h3>
            </CardHeader>
            <CardBody className="flex items-center text-center">
              <p>
                Acelera la redacción de artículos para publicaciones
                científicas.
              </p>
            </CardBody>
          </Card>
        </article>
        <article>
          <Card className="w-full md:w-72">
            <CardHeader className="flex justify-center text-center">
              <h3 className="text-lg font-bold">Profesionales</h3>
            </CardHeader>
            <CardBody className="flex items-center text-center">
              <p>Facilita la elaboración de informes y documentos técnicos.</p>
            </CardBody>
          </Card>
        </article>
      </section>
    </section>
  );
}
