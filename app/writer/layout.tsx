'use client';

import { steps } from '@/lib/writerSteps';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { useState } from 'react';
import { FaFeather } from 'react-icons/fa6';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState('1');

  return (
    <main className="w-full flex flex-col items-center p-4 sm:p-8">
      <Breadcrumbs
        underline="hover"
        className="pb-8"
        classNames={{
          list: 'bg-gradient-to-br from-yellow-200 to-amber-100 shadow-small'
        }}
        itemClasses={{
          item: 'text-black',
          separator: 'text-black/40'
        }}
        variant="solid"
      >
        <BreadcrumbItem>
          <FaFeather />
        </BreadcrumbItem>
        {steps.map((step) => (
          <BreadcrumbItem
            key={step.id}
            isCurrent={currentPage == step.id}
            isDisabled={currentPage != step.id}
          >
            {step.title}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
      {children}
    </main>
  );
}
