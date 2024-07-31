/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from '@nextui-org/input';
import { Button, Chip, ScrollShadow } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function InputSearchAI({
  name,
  items,
  setQuery
}: {
  name: string;
  items: string[];
  setQuery: any;
}) {
  const [value, setValue] = useState('');
  const handleSearch = (value: any) => {
    setValue(value);
  };

  useEffect(() => {
    setQuery(value);
  }, [value]);

  return (
    <div className="border-frame flex flex-col p-2 gap-2 bg-content1">
      <div className="flex">
        <Input
          onValueChange={handleSearch}
          classNames={{ inputWrapper: 'rounded-r-none bg-default' }}
          value={value}
          className="w-full"
          placeholder={`Buscar ${name}`}
          size="lg"
          variant="faded"
          isClearable
        />
        <Button className="rounded-l-none h-12 bg-default-300">
          <FaMagnifyingGlass />
        </Button>
      </div>
      <ScrollShadow orientation="horizontal" hideScrollBar>
        <div className="flex gap-3">
          {items
            ? items.map((item, index) => (
                <Chip
                  key={index}
                  onClick={() => setValue(item)}
                  startContent={<FaMagnifyingGlass />}
                  className="pl-2 cursor-pointer"
                >
                  {item}
                </Chip>
              ))
            : 'Sin resultados'}
        </div>
      </ScrollShadow>
    </div>
  );
}
