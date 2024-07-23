'use client';

import { signInWithOAuth } from '@/app/lib/supabase/auth';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { FaGithub } from 'react-icons/fa6';

export default function Login() {
  return (
    <main className="flex h-1 items-center justify-center">
      <Card className="w-fit py-6 px-16">
        <CardHeader>
          <h1 className="text-2xl">Inicia sesión en SciGPT</h1>
        </CardHeader>
        <CardBody>
          <Button
            onClick={signInWithOAuth}
            className="super-button"
            variant="shadow"
            endContent={<FaGithub />}
          >
            Iniciar sesión
          </Button>
        </CardBody>
      </Card>
    </main>
  );
}
