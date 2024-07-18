import ThesisList from '@/app/ui/writer/Thesis';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Spinner } from '@nextui-org/react';
import { Suspense } from 'react';

export default function Thesis({
  searchParams
}: {
  searchParams?: { topics: string[]; fieldOfStudy: string };
}) {
  const { topics, fieldOfStudy } = searchParams || {};
  if (!topics || !fieldOfStudy) return <p>Invalid parameters</p>;

  return (
    <>
      <Card className="h-fit p-2 sm:p-2">
        <CardHeader className={'editorial-header'}>Thesis</CardHeader>
        <CardBody className="h-fit gap-6">
          <Suspense fallback={<Spinner />}>
            <ThesisList topics={topics} fieldOfStudy={fieldOfStudy} />
          </Suspense>
        </CardBody>
      </Card>
    </>
  );
}
