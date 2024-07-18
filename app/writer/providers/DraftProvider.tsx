import { useDraftReducer } from '@/app/hooks/useDraft';
import { createContext, ReactNode } from 'react';

export const DraftContext = createContext({
  draft: {
    topic: '',
    fieldOfStudy: '',
    thesis: ''
  },
  addTopic: (value: string) => {},
  addFieldOfStudy: (value: string) => {},
  addThesis: (value: string) => {}
});

export default function DraftProvider({ children }: { children: ReactNode }) {
  const { draft, addTopic, addFieldOfStudy, addThesis } = useDraftReducer();

  return (
    <DraftContext.Provider
      value={{ draft, addTopic, addFieldOfStudy, addThesis }}
    >
      {children}
    </DraftContext.Provider>
  );
}
