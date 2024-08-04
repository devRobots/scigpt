import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';

import { OAuth } from '@/app/components/input/misc/OAuth';

export default function Login() {
  return (
    <main className="content-full">
      <Image src="/login.webp" width={256} height={208} alt="login" />
      <Card className="w-fit py-6 px-16">
        <CardHeader>
          <h1 className="text-2xl text-center">Inicia sesión en SciGPT</h1>
        </CardHeader>
        <CardBody className="items-center">
          <OAuth />
        </CardBody>
      </Card>
    </main>
  );
}
