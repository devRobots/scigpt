import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

export default function Portrait({
  title,
  field_of_study,
  author,
  email
}: {
  title: string;
  field_of_study: string;
  author: string;
  email: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
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
          <p>{field_of_study}</p>
          <p>{2024}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
