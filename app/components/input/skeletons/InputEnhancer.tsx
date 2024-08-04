import { Button } from '@nextui-org/button';
import { Textarea } from '@nextui-org/input';
import { FaBolt, FaPlus } from 'react-icons/fa6';

export default function SkeletonInputEnhancer() {
  return (
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
  );
}
