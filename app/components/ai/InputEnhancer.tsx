import { improveText } from '@/app/lib/writer/ai';
import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { useState } from 'react';
import { FaBolt, FaPlus } from 'react-icons/fa6';

export default function InputEnhancer({ handler }: { handler: any }) {
  const [value, setValue] = useState('');
  const [isEnhanceable, setIsEnhanceable] = useState(false);

  const enhance = async (e: any) => {
    e.preventDefault();
    if (!value) return;
    const improvedText = await improveText(value);
    setValue(improvedText);
    setIsEnhanceable(false);
  };

  const onValueChange = (value: string) => {
    setValue(value);
    setIsEnhanceable(true);
  };

  return (
    <div className="flex flex-row">
      <Textarea
        classNames={{ inputWrapper: 'rounded-r-none' }}
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
          className="bg-default-300 rounded-b-none rounded-l-none"
          onClick={() => handler(value)}
        >
          <FaPlus />
        </Button>
        <Button
          disabled={!isEnhanceable}
          className="bg-default-500  rounded-t-none rounded-l-none"
          onClick={enhance}
        >
          <FaBolt />
        </Button>
      </div>
    </div>
  );
}
function onEffect(arg0: () => void, arg1: string[]) {
  throw new Error('Function not implemented.');
}
