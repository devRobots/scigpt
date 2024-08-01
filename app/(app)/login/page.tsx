import { Card, CardBody, CardHeader } from '@nextui-org/card';

import { OAuth } from '@/app/components/standard/OAuth';

export default function Login() {
  return (
    <main className="flex h-1 items-center justify-center">
      <Card className="w-fit py-6 px-16">
        <CardHeader>
          <h1 className="text-2xl">Inicia sesión en SciGPT</h1>
        </CardHeader>
        <CardBody className="items-center">
          <OAuth />
        </CardBody>
      </Card>
    </main>
  );
}
