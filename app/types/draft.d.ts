export interface Draft {
    title: string;
    stage: string;
    topics: string[];
    field_of_study: string;
    user_id?: string;
    uuid?: string;
    created_at?: string;
    thesis?: string;
    objectives?: string;
    methodology?: string;
    results?: string;
}