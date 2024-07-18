import { useDraft } from '@/app/hooks/useDraft';
import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function TopicsSelector() {
  const [topic, setTopic] = useState('');
  const { draft, addTopic, removeTopic } = useDraft();

  const keyDownHandler = (e: { preventDefault: () => void; key: string }) => {
    if (topic === '') return;
    if (e.key !== 'Enter') return;
    addTopic(topic);
    setTopic('');
  };

  return (
    <>
      <Input
        variant="faded"
        placeholder="Escribe el tema de tu idea"
        size="lg"
        value={topic}
        onValueChange={setTopic}
        onKeyDown={keyDownHandler}
      />
      <div>
        {draft.topics.map((t, i) => (
          <Chip
            key={i}
            className="text-sm hover:cursor-pointer"
            startContent={<FaX className="w-2 h-2 mx-2" />}
            onClick={() => removeTopic(t)}
          >
            {t}
          </Chip>
        ))}
      </div>
    </>
  );
}
