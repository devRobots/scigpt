import { useDraftReducer } from '@/app/hooks/useDraft';
import { createContext, ReactNode } from 'react';

export const DraftContext = createContext({
  draft: {
    topics: [''],
    fieldOfStudy: '',
    thesis: ''
  },
  addTopic: (value: string) => {},
  removeTopic: (value: string) => {},
  setFieldOfStudy: (value: string) => {},
  addThesis: (value: string) => {}
});

export default function DraftProvider({ children }: { children: ReactNode }) {
  const { draft, addTopic, removeTopic, setFieldOfStudy, addThesis } =
    useDraftReducer();

  return (
    <DraftContext.Provider
      value={{ draft, addTopic, removeTopic, setFieldOfStudy, addThesis }}
    >
      {children}
    </DraftContext.Provider>
  );
}
