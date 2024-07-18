import { DraftContext } from '@/app/providers/DraftProvider';
import { DRAFT_ACTIONS, draftReducer } from "@/app/reducers/draft";
import { Draft } from "@/app/types/draft";
import { useContext, useReducer } from 'react';


const initialState: Draft = {
    topics: [],
    fieldOfStudy: '',
    thesis: '',
    objectives: []
};

export function useDraftReducer() {
    const [state, dispatch] = useReducer(draftReducer, initialState);

    const addTopic = (topic: string) => dispatch({ type: DRAFT_ACTIONS.ADD_TOPIC, payload: topic });
    const removeTopic = (topic: string) => dispatch({ type: DRAFT_ACTIONS.REMOVE_TOPIC, payload: topic });
    const setFieldOfStudy = (fieldOfStudy: string) => dispatch({ type: DRAFT_ACTIONS.ADD_FIELD_OF_STUDY, payload: fieldOfStudy });
    const addThesis = (thesis: string) => dispatch({ type: DRAFT_ACTIONS.ADD_THESIS, payload: thesis });

    return { draft: state, addTopic, removeTopic, setFieldOfStudy, addThesis };
}

export function useDraft() {
    const context = useContext(DraftContext);
    const { draft, addTopic, removeTopic, setFieldOfStudy, addThesis } = context;
    return { draft, addTopic, removeTopic, setFieldOfStudy, addThesis };
}