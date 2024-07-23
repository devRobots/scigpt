'use client';

import { getDraft, updateDraft } from '@/app/lib/supabase/queries';
import { generateSubstantiation } from '@/app/lib/writer/ai';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Textarea } from '@nextui-org/input';
import { Spinner } from '@nextui-org/spinner';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Substantiation() {
  const router = useRouter();
  const params = useParams();
  const uuid = params.uuid.toString() || '';

  const [substantiation, setSubstantiation] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getDraft(uuid).then(({ draft }) => {
      if (!draft) return;
      generateSubstantiation(
        draft.thesis!,
        draft.topics,
        draft.field_of_study
      ).then((substantiation) => {
        setSubstantiation(substantiation);
        setLoading(false);
      });
    });
  }, []);

  const handleNext = () => {
    if (substantiation.length < 200) return;

    updateDraft(uuid, {
      resume: substantiation,
      stage: 'review'
    }).then(() => {
      router.push(`/writer/${uuid}/review`);
    });
  };

  return (
    <section className="flex w-full xl:w-3/5">
      <Card className="h-fit w-full p-2">
        <CardHeader className="flex flex-col items-start gap-3">
          <h2 className={'editorial-header'}>Justificación</h2>
          <p className="text-default-500">
            La justificación abarca las razones por las cuales es pertinente
            realizar una investigación. En esta fase del anteproyecto se busca
            convencer a una audiencia particular sobre por qué y para qué se
            llevará a cabo la investigación.
          </p>
        </CardHeader>
        <CardBody className="h-fit gap-3">
          <Textarea
            label="Escribe la justificación de tu proyecto:"
            labelPlacement="outside"
            className="w-full"
            placeholder="Generando..."
            minRows={10}
            maxRows={25}
            value={substantiation}
            onValueChange={(value) => setSubstantiation(value)}
            size="lg"
          >
            {loading ?? <Spinner />}
          </Textarea>
        </CardBody>
        <CardHeader className="flex justify-end">
          <Button color="success" className="super-button" onClick={handleNext}>
            Next
          </Button>
        </CardHeader>
      </Card>
    </section>
  );
}
