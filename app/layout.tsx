import './globals.css';
import NavBar from './ui/navbar';
import { Providers } from './providers';

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
    <html lang="en" className="light">
      <body>
        <Providers>
          <NavBar />
          {children}
          <footer className="text-center text-gray-500 text-sm p-4">
            &copy; 2021 SciGPT
          </footer>
        </Providers>
      </body>
    </html>
  );
}
