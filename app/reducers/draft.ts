import { Draft, DraftAction } from "@/app/types/draft";

export const DRAFT_ACTIONS = {
    ADD_TOPIC: 'ADD_TOPIC',
    REMOVE_TOPIC: 'REMOVE_TOPIC',
    ADD_FIELD_OF_STUDY: 'ADD_FIELD_OF_STUDY',
    ADD_THESIS: 'ADD_THESIS',
    ADD_OBJECTIVES: 'ADD_OBJECTIVES'
}

export const draftReducer = (
    state: Draft,
    action: DraftAction
) => {
    const { type, payload } = action;

    switch (type) {
        case DRAFT_ACTIONS.ADD_TOPIC:
            if (state.topics.includes(payload)) return state;
            return { ...state, topics: [...state.topics, payload] };
        case DRAFT_ACTIONS.REMOVE_TOPIC:
            const index = state.topics.indexOf(payload);
            if (index === -1) return state;
            state.topics.splice(index, 1);
            return { ...state, topics: [...state.topics] };
        case DRAFT_ACTIONS.ADD_FIELD_OF_STUDY:
            return { ...state, fieldOfStudy: payload };
        case DRAFT_ACTIONS.ADD_THESIS:
            return { ...state, thesis: payload };
        case DRAFT_ACTIONS.ADD_OBJECTIVES:
            return { ...state, objectives: [...state.objectives, payload] };
        default:
            return state;
    }
}