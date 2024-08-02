import { NextUIProvider } from '@nextui-org/react';

export function NextUIProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="scifi-dark flex flex-col h-screen justify-between">
      {children}
    </NextUIProvider>
  );
}
