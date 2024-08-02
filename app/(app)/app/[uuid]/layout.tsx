'use client';

import Breadcrumb from '@/app/components/writer/Breadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full items-center">
      <Breadcrumb />
      {children}
    </main>
  );
}
