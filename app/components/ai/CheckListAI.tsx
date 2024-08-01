'use client';

import CheckList from '@/app/components/standard/CheckList';
import InputEnhancer from '@/app/components/ai/InputEnhancer';
import { useState } from 'react';

const VERBS = [
  'analizar',
  'evaluar',
  'determinar',
  'establecer',
  'identificar',
  'investigar',
  'proponer',
  'desarrollar',
  'diseñar',
  'crear'
];

export default function CheckListAI({
  name,
  initialItems,
  maxItems
}: {
  name: string;
  initialItems: any[];
  maxItems?: number;
}) {
  const [items, setItems] = useState(initialItems);

  const appendItem = (item: string) => {
    if (items.includes(item)) return;
    if (maxItems && items.length >= maxItems) return;
    if (!VERBS.includes(item.toLowerCase().split(' ')[0])) return;
    setItems([...items, item]);
  };

  return (
    <div className="flex flex-col border-frame p-2 gap-2">
      <CheckList name={name} items={items} />
      <InputEnhancer handler={appendItem} />
    </div>
  );
}
