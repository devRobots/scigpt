import NavBar from '@/app/components/navbar';
import { Providers } from '@/app/providers';
import './globals.css';

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
        <Providers>
          <NavBar />
          {children}
          <footer className="text-center text-foreground/70 text-sm p-4">
            &copy; 2021 SciGPT
          </footer>
        </Providers>
      </body>
    </html>
  );
}
