'use client';

import Breadcrumb from '@/app/ui/writer/Breadcrumb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col items-center p-4 sm:p-8">
      <Breadcrumb />
      {children}
    </main>
  );
}
