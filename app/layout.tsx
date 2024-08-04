import '@/app/globals.css';
import { NextUIProviders } from '@/app/providers/NextUIProviders';

import Footer from '@/app/components/web/Footer';
import NavBar from '@/app/components/web/navbar/NavBar';

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
          <NavBar />
          {children}
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
