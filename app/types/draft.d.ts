export interface Draft {
  id: string;
  owner: string;
  title: string;
  stage: string;
  topics: string[];
  field_of_study: string;
  thesis?: string;
  objectives?: string;
  methodology?: string;
  results?: string;
}
