import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

export default function Portrait({
  title,
  fieldOfStudy,
  author,
  email
}: {
  title: string;
  fieldOfStudy: string;
  author: string;
  email: string;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Card className="apa-format">
        <CardHeader className="justify-end sm:-mt-12">
          <p className="sm:-mr-12">1</p>
        </CardHeader>
        <CardBody className="items-center justify-center gap-8">
          <h2 className="editorial-header text-center">{title}</h2>
          <div>
            <p className="text-center">{author}</p>
            <p className="text-center">{email}</p>
          </div>
        </CardBody>
        <CardFooter className="flex-col justify-center">
          <p>{fieldOfStudy}</p>
          <p>{2024}</p>
        </CardFooter>
      </Card>
    </section>
  );
}
