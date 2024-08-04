import { Checkbox, CheckboxGroup } from '@nextui-org/checkbox';
import { Skeleton } from '@nextui-org/react';

import SkeletonInputEnhancer from '@/app/components/input/skeletons/InputEnhancer';

export function SkeletonCheck() {
  return (
    <Checkbox className="radio-item px-4" value="">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <div className="flex flex-row sm:flex-col items-center justify-center gap-1 min-w-20">
          <span className="text-default-700 text-xs justify-center">
            <Skeleton className="rounded w-12 h-2 sm:mb-2">
              <p>Prueba</p>
            </Skeleton>
          </span>
          <Skeleton className="rounded-full w-12 h-4">
            <p>Prueba</p>
          </Skeleton>
        </div>
        <Skeleton className="w-64">
          <p>Prueba</p>
        </Skeleton>
      </div>
    </Checkbox>
  );
}

export default function SkeletonCheckListAI() {
  return (
    <div className="flex flex-col border-frame p-2 gap-2">
      <CheckboxGroup className="w-full">
        <SkeletonCheck />
        <SkeletonCheck />
        <SkeletonCheck />
        <SkeletonCheck />
        <SkeletonCheck />
      </CheckboxGroup>
      <SkeletonInputEnhancer />
    </div>
  );
}
