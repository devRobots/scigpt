import FieldOfStudySelector from '@/app/components/writer/new/FieldsOfStudySelector';
import TopicsSelector from '@/app/components/writer/new/TopicsSelector';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Input } from '@nextui-org/input';

export default function NewDraft({
  title,
  setTitle,
  topics,
  setTopics,
  fieldOfStudy,
  setFieldOfStudy,
  handleClick
}: {
  title: string;
  setTitle: (title: string) => void;
  topics: string[];
  setTopics: (topics: string[]) => void;
  fieldOfStudy: string;
  setFieldOfStudy: (fieldOfStudy: string) => void;
  handleClick: () => void;
}) {
  return (
    <Card className="p-2">
      <CardBody className="flex flex-col md:flex-row columns-1 md:columns-2 gap-6">
        <div className="flex flex-col w-full justify-center gap-8">
          <div className="flex flex-col gap-2">
            <strong className="text-2xl">Nueva Redaccion</strong>
            <Input
              value={title}
              onValueChange={setTitle}
              classNames={{ input: 'text-xl font-bold' }}
              label="Titulo"
              size="lg"
              variant="underlined"
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-lg justify-end">
              Escribe los temas de interes
            </span>
            <TopicsSelector topics={topics} setTopics={setTopics} />
          </div>
        </div>
        <div className="flex flex-col w-full gap-3">
          <span className="text-lg justify-end">
            Selecciona un area de estudio
          </span>
          <FieldOfStudySelector
            fieldOfStudy={fieldOfStudy}
            setFieldOfStudy={setFieldOfStudy}
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-end">
        <Button className="super-button w-full sm:w-auto" onClick={handleClick}>
          Empezar
        </Button>
      </CardFooter>
    </Card>
  );
}
