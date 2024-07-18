import { Paper } from "@/app/types/internals";
import { PAPER_ACTIONS, paperReducer } from "@/reducers/paper";
import { useReducer } from "react";

const initialState: Paper = {
    topic: '',
    fieldOfStudy: '',
    thesis: '',
    objectives: []
};

export function usePaperReducer() {
    const [state, dispatch] = useReducer(paperReducer, initialState);

    const addTopic = (topic: string) => dispatch({ type: PAPER_ACTIONS.ADD_TOPIC, payload: topic });
    const addFieldOfStudy = (fieldOfStudy: string) => dispatch({ type: PAPER_ACTIONS.ADD_FIELD_OF_STUDY, payload: fieldOfStudy });
    const addThesis = (thesis: string) => dispatch({ type: PAPER_ACTIONS.ADD_THESIS, payload: thesis });

    return { paper: state, addTopic, addFieldOfStudy, addThesis };
}