export interface Paper {
    topic: string;
    fieldOfStudy: string;
    thesis: string;
    objectives: string[];
}

export interface PaperReducerAction {
    type: string;
    payload: string;
}
