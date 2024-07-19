import { getDraft } from '@/app/lib/firebase/firestore';
import ThesisList from '@/app/ui/writer/Thesis';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Spinner } from '@nextui-org/react';
import { Suspense } from 'react';

export default async function Thesis({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  if (!uuid) return <p>Invalid parameters</p>;

  const { draft } = await getDraft(uuid);
  if (!draft) return <p>No draft found</p>;
  // TODO: Redirect to the correct stage
  // if (draft.stage !== 'thesis') return (<p>Invalid stage</p>);

  return (
    <>
      <Card className="h-fit p-2 sm:p-2">
        <CardHeader className={'editorial-header'}>Thesis</CardHeader>
        <CardBody className="h-fit gap-6">
          <Suspense fallback={<Spinner />}>
            <ThesisList
              topics={draft?.topics}
              fieldOfStudy={draft?.fieldOfStudy}
            />
          </Suspense>
        </CardBody>
      </Card>
    </>
  );
}
