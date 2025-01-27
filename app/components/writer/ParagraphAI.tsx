'use client';

import { useDisclosure } from '@nextui-org/react';
import { useState } from 'react';

import ParagraphEditorAI from '@/app/components/writer/ParagraphEditorAI';

export default function ParagraphAI({
  uuid,
  name,
  subtitle,
  paragraph
}: {
  uuid: string;
  name: string;
  subtitle: string;
  paragraph: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState(paragraph);

  const handleClick = () => {
    onOpen();
  };

  return (
    <article
      className="-m-2 p-2 rounded-md border-1 border-transparent hover:border-primary hover:cursor-pointer hover:bg-content3"
      onClick={handleClick}
    >
      <h3 className="font-bold text-lg">{subtitle}</h3>
      <p>{text}</p>
      <ParagraphEditorAI
        uuid={uuid}
        name={name}
        isOpen={isOpen}
        onClose={onClose}
        title={subtitle}
        text={text}
        setText={setText}
      />
    </article>
  );
}
