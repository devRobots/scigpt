import '@/app/globals.css';
import { NextUIProviders } from '@/app/providers';
import NavBar from '@/app/ui/navbar';

export const metadata = {
  title: 'SciGPT',
  description: 'A scientific paper writer.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <NextUIProviders>
          <NavBar />
          {children}
          <footer className="text-center text-foreground/70 text-sm p-4">
            &copy; 2021 SciGPT
          </footer>
        </NextUIProviders>
      </body>
    </html>
  );
}
