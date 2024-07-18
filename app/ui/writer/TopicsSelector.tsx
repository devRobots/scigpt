import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function TopicsSelector() {
  const [topic, setTopic] = useState('');
  const [topics, setTopics] = useState<string[]>([]);

  const keyDownHandler = (e: { preventDefault: () => void; key: string }) => {
    if (topic === '') return;
    if (e.key !== 'Enter') return;
    setTopics([...topics, topic]);
    setTopic('');
  };

  return (
    <div className="flex flex-col gap-3 border-default-100 rounded-small border-small p-3">
      <strong>Temas</strong>
      <Input
        className="w-full"
        variant="faded"
        size="md"
        value={topic}
        placeholder="Agregar tema"
        onValueChange={setTopic}
        onKeyDown={keyDownHandler}
      />
      <div className="gap-2">
        Temas:
        {topics.map((t, i) => (
          <Chip
            key={i}
            className="text-sm hover:cursor-pointer ml-1 mb-1"
            startContent={<FaX className="w-2 h-2 mx-2" />}
            onClick={() => setTopics(topics.filter((_, j) => i !== j))}
          >
            {t}
          </Chip>
        ))}
      </div>
    </div>
  );
}
