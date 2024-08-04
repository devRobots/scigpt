import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center justify-center text-foreground/70 text-sm p-4">
      SciGPT hecho con ❤️ por{' '}
      <Link href="https://github.com/devRobots/" className="text-primary">
        @devRobots
      </Link>
    </footer>
  );
}
