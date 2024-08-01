import { Radio, RadioGroup } from '@nextui-org/radio';
import { Button, Skeleton, Textarea } from '@nextui-org/react';
import { FaBolt, FaPlus } from 'react-icons/fa6';

export default function SkeletonRadioListAI() {
  return (
    <div className="flex flex-col border-frame p-2 gap-3">
      <RadioGroup isDisabled>
        <Radio
          value=""
          description={
            <Skeleton className="rounded w-12 h-2 mb-2">
              <p>Prueba</p>
            </Skeleton>
          }
          classNames={{
            base: 'radio-item px-4',
            labelWrapper: 'flex-col-reverse',
            control: 'w-3 h-3',
            label: 'text-secondary/90',
            description: 'text-default-700 text-xs'
          }}
        >
          <Skeleton className="w-64">
            <p>Prueba</p>
          </Skeleton>
        </Radio>
        <Radio
          value=""
          description={
            <Skeleton className="rounded w-12 h-2 mb-2">
              <p>Prueba</p>
            </Skeleton>
          }
          classNames={{
            base: 'radio-item px-4',
            labelWrapper: 'flex-col-reverse',
            control: 'w-3 h-3',
            label: 'text-secondary/90',
            description: 'text-default-700 text-xs'
          }}
        >
          <Skeleton className="w-64">
            <p>Prueba</p>
          </Skeleton>
        </Radio>
        <Radio
          value=""
          description={
            <Skeleton className="rounded w-12 h-2 mb-2">
              <p>Prueba</p>
            </Skeleton>
          }
          classNames={{
            base: 'radio-item px-4',
            labelWrapper: 'flex-col-reverse',
            control: 'w-3 h-3',
            label: 'text-secondary/90',
            description: 'text-default-700 text-xs'
          }}
        >
          <Skeleton className="w-64">
            <p>Prueba</p>
          </Skeleton>
        </Radio>
        <Radio
          value=""
          description={
            <Skeleton className="rounded w-12 h-2 mb-2">
              <p>Prueba</p>
            </Skeleton>
          }
          classNames={{
            base: 'radio-item px-4',
            labelWrapper: 'flex-col-reverse',
            control: 'w-3 h-3',
            label: 'text-secondary/90',
            description: 'text-default-700 text-xs'
          }}
        >
          <Skeleton className="w-64">
            <p>Prueba</p>
          </Skeleton>
        </Radio>
        <Radio
          value=""
          description={
            <Skeleton className="rounded w-12 h-2 mb-2">
              <p>Prueba</p>
            </Skeleton>
          }
          classNames={{
            base: 'radio-item px-4',
            labelWrapper: 'flex-col-reverse',
            control: 'w-3 h-3',
            label: 'text-secondary/90',
            description: 'text-default-700 text-xs'
          }}
        >
          <Skeleton className="w-64">
            <p>Prueba</p>
          </Skeleton>
        </Radio>
      </RadioGroup>
      <div className="flex flex-row">
        <Textarea
          classNames={{ inputWrapper: 'rounded-r-none bg-default' }}
          variant="faded"
          rows={3}
          minRows={3}
          maxRows={3}
          isDisabled
        />
        <div className="flex flex-col -ml-0">
          <Button
            className="bg-default-300 rounded-b-none rounded-l-none"
            isDisabled
          >
            <FaPlus />
          </Button>
          <Button
            className="bg-default-500  rounded-t-none rounded-l-none"
            isDisabled
          >
            <FaBolt />
          </Button>
        </div>
      </div>
    </div>
  );
}
