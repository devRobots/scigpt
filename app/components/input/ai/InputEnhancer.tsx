'use client';

import { improveText } from '@/app/lib/writer/draft';
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { Spinner } from '@nextui-org/react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoSparkles } from 'react-icons/io5';

export default function InputEnhancer({
  context,
  examples,
  handler
}: {
  context: string;
  examples: string[];
  handler: any;
}) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEnhanceable, setIsEnhanceable] = useState(false);

  const enhance = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!value) return;
    const improvedText = await improveText(context, examples, value);
    setValue(improvedText);
    setIsEnhanceable(false);
    setLoading(false);
  };

  const onValueChange = (value: string) => {
    setValue(value);
    setIsEnhanceable(true);
  };

  const onAdd = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const proccesedValue = value.trim();
    setValue(proccesedValue);
    if (!proccesedValue) return;
    handler(proccesedValue);
    setValue('');
  };

  return (
    <div className="flex flex-row">
      <Textarea
        disabled={loading}
        classNames={{ inputWrapper: 'rounded-r-none bg-default' }}
        value={value}
        onValueChange={onValueChange}
        variant="faded"
        placeholder="Escribe algo..."
        rows={3}
        minRows={3}
        maxRows={3}
      />
      <div className="flex flex-col -ml-0">
        <Button
          disabled={loading}
          className="bg-default-300 rounded-b-none rounded-l-none"
          onClick={onAdd}
        >
          <FaPlus />
        </Button>
        <Button
          disabled={!isEnhanceable || loading}
          className="bg-default-500  rounded-t-none rounded-l-none"
          onClick={enhance}
        >
          {loading ? <Spinner /> : <IoSparkles />}
        </Button>
      </div>
    </div>
  );
}
