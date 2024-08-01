import '@/app/globals.css';
import { NextUIProviders } from '@/app/providers/NextUIProviders';

import NavBar from '@/app/components/core/navbar/NavBar';

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
    <html lang="es" suppressHydrationWarning={true}>
      <body>
        <NextUIProviders>
          <main className="scifi-dark flex flex-col h-screen justify-between"> 
            <NavBar />
            {children}
            <footer className="text-center justify-center text-foreground/70 text-sm mb-4">
              &copy; 2021 SciGPT
            </footer>
          </main>
        </NextUIProviders>
      </body>
    </html>
  );
}
