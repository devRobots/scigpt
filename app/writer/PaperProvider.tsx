import { usePaperReducer } from '@/hooks/usePaperReducer';
import { createContext, ReactNode } from 'react';

export const PaperContext = createContext({
  paper: {
    topic: '',
    fieldOfStudy: '',
    thesis: ''
  },
  addTopic: (value: string) => {},
  addFieldOfStudy: (value: string) => {},
  addThesis: (value: string) => {}
});

export default function PaperProvider({ children }: { children: ReactNode }) {
  const { paper, addTopic, addFieldOfStudy, addThesis } = usePaperReducer();

  return (
    <PaperContext.Provider
      value={{ paper, addTopic, addFieldOfStudy, addThesis }}
    >
      {children}
    </PaperContext.Provider>
  );
}
