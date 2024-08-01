'use client';

import Breadcrumb from '@/app/components/writer/Breadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full h-5/6 items-center p-4">
      <Breadcrumb />
      {children}
    </main>
  );
}
