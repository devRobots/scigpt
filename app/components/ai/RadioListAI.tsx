'use client';

import { useState } from 'react';

import InputEnhancer from '@/app/components/ai/InputEnhancer';
import RadioList from '@/app/components/standard/RadioList';

export default function RadioListAI({
  name,
  initialItems,
  maxItems
}: {
  name: string;
  initialItems: any[];
  maxItems?: number;
}) {
  const [items, setItems] = useState(initialItems);

  const appendItem = (item: any) => {
    if (items.includes(item)) return;
    if (maxItems && items.length >= maxItems) return;
    setItems([...items, item]);
  };

  return (
    <div className="flex flex-col border-frame p-2 gap-3">
      <RadioList name={name} items={items} />
      <InputEnhancer handler={appendItem} />
    </div>
  );
}
