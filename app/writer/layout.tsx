'use client';

import Breadcrumb from '@/app/writer/Breadcrumb';
import PagerProvider from '@/app/writer/PagerProvider';
import PaperProvider from '@/app/writer/PaperProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col items-center p-4 sm:p-8">
      <PagerProvider>
        <Breadcrumb />
        <PaperProvider>{children}</PaperProvider>
      </PagerProvider>
    </main>
  );
}
