'use client';

import Breadcrumb from '@/app/components/writer/Breadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full gap-4 pt-2 px-2 sm:px-8 items-center">
      <Breadcrumb />
      {children}
    </main>
  );
}
