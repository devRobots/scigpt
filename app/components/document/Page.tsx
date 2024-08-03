import { Card, CardBody, CardHeader } from '@nextui-org/react';

export default function Page({ body, page }: { body: any; page: number }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Card className="apa-format">
        <CardHeader className="justify-end sm:-mt-12">
          <p className="sm:-mr-12">{page}</p>
        </CardHeader>
        <CardBody>{body}</CardBody>
      </Card>
    </section>
  );
}
