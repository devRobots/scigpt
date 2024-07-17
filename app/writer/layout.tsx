'use client';

import Breadcrumb from '@/app/writer/Breadcrumb';
import PagerProvider from '@/app/writer/PagerProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col items-center p-4 sm:p-8">
      <PagerProvider>
        <Breadcrumb />
        {children}
      </PagerProvider>
    </main>
  );
}
