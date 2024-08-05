'use client';

import { useState } from 'react';

import InputEnhancer from '@/app/components/input/ai/InputEnhancer';
import CheckList from '@/app/components/input/standard/CheckList';

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
    setItems([...items, item]);
  };

  return (
    <div className="flex flex-col border-frame p-2 gap-2">
      <CheckList name={name} items={items} />
      <InputEnhancer
        context="objectives"
        examples={items}
        handler={appendItem}
      />
    </div>
  );
}
