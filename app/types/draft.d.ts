export interface Draft {
    topics: string[];
    fieldOfStudy: string;
    thesis: string;
    objectives: string[];
}

export interface DraftAction {
    type: string;
    payload: string;
}
