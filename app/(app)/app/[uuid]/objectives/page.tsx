import ObjectivesForm from '@/app/components/writer/ObjectivesForm';
import { Card, CardHeader } from '@nextui-org/card';

export default function Thesis({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;

  return (
    <section className="flex w-full xl:w-3/5 p-2">
      <Card className="main-card">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2 className={'editorial-header'}>Objetivos</h2>
          <p className="text-default-800">
            Los objetivos representan las metas o fines que se esperan alcanzar
            con la investigación. Estos también cumplen la función de
            especificar las tareas y medios necesarios para responder la
            pregunta. Además, detallan el tipo de acción que deberá desarrollar
            el investigador para implementar una metodología.
          </p>
        </CardHeader>
        <ObjectivesForm uuid={uuid} />
      </Card>
    </section>
  );
}
