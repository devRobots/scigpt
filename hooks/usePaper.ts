import { PaperContext } from '@/app/writer/PaperProvider';
import { useContext } from 'react';

export function usePaper() {
    const context = useContext(PaperContext);
    const { paper, addTopic, addFieldOfStudy, addThesis } = context;
    return { paper, addTopic, addFieldOfStudy, addThesis };
}