'use client';

import NewDraft from '@/app/components/writer/new/NewDraft';
import { saveDraft } from '@/app/lib/supabase/queries';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Writer() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [error, setError] = useState('');

  const handleClick = async () => {
    if (title.length < 5) {
      setError('El título debe tener al menos 5 caracteres');
      return;
    }
    if (topics.length < 1) {
      setError('Se debe seleccionar al menos un tema');
      return;
    }
    if (!fieldOfStudy) {
      setError('Se debe seleccionar un campo de estudio');
      return;
    }

    const uuid = await saveDraft({
      title,
      topics,
      field_of_study: fieldOfStudy,
      stage: 'thesis',
      uuid: undefined,
      created_at: undefined,
      thesis: undefined,
      objectives: undefined,
      methodology: undefined,
      results: undefined
    });

    router.push(`/writer/${uuid}/thesis`);
  };

  return (
    <main className="flex mb-auto justify-center">
      <section className="h-fit my-4 mx-4 sm:mt-2">
        <NewDraft
          title={title}
          setTitle={setTitle}
          topics={topics}
          setTopics={setTopics}
          fieldOfStudy={fieldOfStudy}
          setFieldOfStudy={setFieldOfStudy}
          handleClick={handleClick}
        />
      </section>
    </main>
  );
}
