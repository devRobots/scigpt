import { useState } from 'react';
import CheckList from '../standard/CheckList';
import InputEnhancer from './InputEnhancer';

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
  setValues,
  maxItems
}: {
  name: string;
  initialItems: any[];
  setValues: any;
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
      <CheckList name={name} items={items} setValues={setValues} />
      <InputEnhancer handler={appendItem} />
    </div>
  );
}
