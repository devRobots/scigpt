'use client';

import { saveDraft } from '@/app/lib/firebase/firestore';
import ModalUUID from '@/app/ui/writer/ModalUUID';
import NewDraft from '@/app/ui/writer/NewDraft';
import { useState } from 'react';

export default function Writer() {
  const [title, setTitle] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [error, setError] = useState('');
  const [uuid, setUuid] = useState('');

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
      fieldOfStudy,
      stage: 'thesis'
    });
    setUuid(uuid);
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
        <ModalUUID uuid={uuid} />
      </section>
    </main>
  );
}
