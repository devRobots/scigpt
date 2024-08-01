'use client';

import { Chip } from '@nextui-org/chip';
import { Input } from '@nextui-org/input';
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';

export default function InputTag({ name }: { name: string }) {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([] as string[]);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (value === '') return;
    if (e.key !== 'Enter') return;
    if (values.includes(value)) return;
    setValues([...values, value.trim()]);
    setValue('');
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-3 border-frame p-3">
      <Input
        className="w-full"
        classNames={{
          inputWrapper: 'bg-default'
        }}
        variant="faded"
        size="md"
        value={value}
        placeholder={`Agregar ${name}`}
        onValueChange={setValue}
        onKeyDown={keyDownHandler}
      />
      <div className="flex flex-wrap gap-2 min-h-6 items-center">
        <p className="text-sm">Seleccionados:</p>
        {values.length != 0 ? (
          values.map((v, i) => (
            <Chip
              key={i}
              size="sm"
              className="text-sm hover:cursor-pointer"
              startContent={<FaX className="w-2 h-2 mx-2" />}
              onClick={() => setValues(values.filter((o) => o !== v))}
            >
              {v}
              <input type="hidden" name={name.toLowerCase()} value={v} />
            </Chip>
          ))
        ) : (
          <p className="text-sm text-default-900/40">Ninguno</p>
        )}
      </div>
    </div>
  );
}
