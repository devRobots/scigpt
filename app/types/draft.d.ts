export interface Draft {
    topic: string;
    fieldOfStudy: string;
    thesis: string;
    objectives: string[];
}

export interface DraftAction {
    type: string;
    payload: string;
}
