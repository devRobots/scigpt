import { Spinner } from '@nextui-org/react';
import { randomInt } from 'crypto';
import { Suspense } from 'react';
import { FaCheck } from 'react-icons/fa6';

export async function Ready() {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(2000 * randomInt(4));

  return (
    <FaCheck
      className="w-4 h-4 mb-0 ml-1"
      style={{ color: 'yellow' }}
      id="check"
    />
  );
}

export default function Loader({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-center">
      <Suspense fallback={<Spinner size="sm" id="spinner" />}>
        <Ready />
      </Suspense>
      <p className="text-lg text-white/40" id="text-loader">
        {text}
      </p>
    </div>
  );
}
