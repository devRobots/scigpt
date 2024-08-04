import '@/app/globals.css';
import { NextUIProviders } from '@/app/providers/NextUIProviders';

import Footer from '@/app/components/web/Footer';
import NavBar from '@/app/components/web/navbar/NavBar';

export const metadata = {
  title: 'SciGPT',
  description: 'Crea trabajos de grado con IA',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://scigpt.vercel.app/',
    site_name: 'SciGPT',
    title: 'Crea trabajos de grado con IA',
    description: 'Bienvenido a una nueva era en la creación de conocimiento.',
    images: [
      {
        url: '/banner.webp',
        width: 1200,
        height: 750,
        alt: 'SciGPT'
      }
    ]
  },
  robots: 'index, follow',
  keywords: 'IA, GPT, Trabajos de grado, Tesis, Investigación'
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
