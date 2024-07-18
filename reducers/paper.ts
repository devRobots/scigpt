import { Paper, PaperReducerAction } from "@/types/internals";

export const PAPER_ACTIONS = {
    ADD_TOPIC: 'ADD_TOPIC',
    ADD_FIELD_OF_STUDY: 'ADD_FIELD_OF_STUDY',
    ADD_THESIS: 'ADD_THESIS',
    ADD_OBJECTIVES: 'ADD_OBJECTIVES'
}

export const paperReducer = (
    state: Paper,
    action: PaperReducerAction
) => {
    const { type, payload } = action;

    switch (type) {
        case PAPER_ACTIONS.ADD_TOPIC:
            return { ...state, topic: payload };
        case PAPER_ACTIONS.ADD_FIELD_OF_STUDY:
            return { ...state, fieldOfStudy: payload };
        case PAPER_ACTIONS.ADD_THESIS:
            return { ...state, thesis: payload };
        case PAPER_ACTIONS.ADD_OBJECTIVES:
            return { ...state, objectives: [...state.objectives, payload] };
        default:
            return state;
    }
}