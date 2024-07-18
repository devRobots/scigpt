import { DRAFT_ACTIONS, draftReducer } from "@/app/reducers/draft";
import { Draft } from "@/app/types/draft";
import { DraftContext } from '@/app/writer/providers/DraftProvider';
import { useContext, useReducer } from 'react';


const initialState: Draft = {
    topic: '',
    fieldOfStudy: '',
    thesis: '',
    objectives: []
};

export function useDraftReducer() {
    const [state, dispatch] = useReducer(draftReducer, initialState);

    const addTopic = (topic: string) => dispatch({ type: DRAFT_ACTIONS.ADD_TOPIC, payload: topic });
    const addFieldOfStudy = (fieldOfStudy: string) => dispatch({ type: DRAFT_ACTIONS.ADD_FIELD_OF_STUDY, payload: fieldOfStudy });
    const addThesis = (thesis: string) => dispatch({ type: DRAFT_ACTIONS.ADD_THESIS, payload: thesis });

    return { draft: state, addTopic, addFieldOfStudy, addThesis };
}

export function useDraft() {
    const context = useContext(DraftContext);
    const { draft, addTopic, addFieldOfStudy, addThesis } = context;
    return { draft, addTopic, addFieldOfStudy, addThesis };
}