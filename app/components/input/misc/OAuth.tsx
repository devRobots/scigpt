import { signIn } from '@/auth';
import { Button } from '@nextui-org/button';
import { FaGithub } from 'react-icons/fa6';

export function OAuth() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <Button
        type="submit"
        className="super-button"
        variant="shadow"
        endContent={<FaGithub />}
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
