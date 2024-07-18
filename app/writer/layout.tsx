'use client';

import Breadcrumb from '@/app/writer/components/Breadcrumb';
import DraftProvider from '@/app/writer/providers/DraftProvider';
import PagerProvider from '@/app/writer/providers/PagerProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col items-center p-4 sm:p-8">
      <PagerProvider>
        <Breadcrumb />
        <DraftProvider>{children}</DraftProvider>
      </PagerProvider>
    </main>
  );
}
