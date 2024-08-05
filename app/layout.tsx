import '@/app/globals.css';
import { NextUIProviders } from '@/app/providers/NextUIProviders';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from '@/app/components/web/Footer';
import NavBar from '@/app/components/web/navbar/NavBar';

export const metadata = {
  title: 'SciGPT',
  description: 'Crea trabajos de grado con IA',
  metadataBase: new URL('https://scigpt.vercel.app/'),
  openGraph: {
    title: 'SciGPT',
    description: 'Crea trabajos de grado con IA.',
    url: 'https://scigpt.vercel.app/',
    siteName: 'SciGPT',
    images: [
      {
        url: '/banner.webp',
        width: 1200,
        height: 750,
        alt: 'SciGPT'
      }
    ],
    locale: 'es_ES',
    type: 'website'
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
        <Analytics />
        <SpeedInsights />
        <NextUIProviders>
          <NavBar />
          {children}
          <Footer />
        </NextUIProviders>
      </body>
    </html>
  );
}
