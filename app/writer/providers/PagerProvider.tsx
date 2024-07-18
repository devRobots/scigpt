import { createContext, ReactNode, useState } from 'react';

export const PagerContext = createContext({
  page: '1',
  setPage: (page: string) => {}
});

export default function PagerProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState('1');

  return (
    <PagerContext.Provider
      value={{
        page,
        setPage
      }}
    >
      {children}
    </PagerContext.Provider>
  );
}
