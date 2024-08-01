export interface Draft {
  id: string;
  owner: string;
  title: string;
  stage: string;
  topics: string[];
  field_of_study: string;
  thesis?: string;
  objectives?: string;
  keywords?: string[];
  methodology?: string;
  results?: string;
  abstract?: string;
  references?: string;
  bibliography?: string;
}
