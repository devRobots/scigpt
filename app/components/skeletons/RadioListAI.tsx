import { Radio, RadioGroup } from '@nextui-org/radio';
import { Skeleton } from '@nextui-org/react';
import SkeletonInputEnhancer from '@/app/components/skeletons/InputEnhancer';

export function SkeletonRadio() {
  return (
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
  );
}

export default function SkeletonRadioListAI() {
  return (
    <div className="flex flex-col border-frame p-2 gap-3">
      <RadioGroup isDisabled>
        <SkeletonRadio />
        <SkeletonRadio />
        <SkeletonRadio />
        <SkeletonRadio />
        <SkeletonRadio />
      </RadioGroup>
      <SkeletonInputEnhancer />
    </div>
  );
}
