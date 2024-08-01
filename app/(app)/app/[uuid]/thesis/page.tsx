import ThesisForm from '@/app/components/writer/ThesisForm';
import { Card, CardHeader } from '@nextui-org/card';

export default function Thesis({ params }: { params: { uuid: string } }) {
  const uuid = params.uuid;

  return (
    <section className="flex w-full xl:w-3/5 p-0 md:p-8">
      <Card className="main-card">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2 className={'editorial-header'}>Hipotesis</h2>
          <p className="text-default-800">
            La pregunta de investigación o hipotesis es el cuestionamiento
            central que se busca responder a partir de una determinada
            metodología. Esta será el núcleo que articule los diferentes
            elementos dentro del proyecto.
          </p>
        </CardHeader>
        <ThesisForm uuid={uuid} />
      </Card>
    </section>
  );
}
