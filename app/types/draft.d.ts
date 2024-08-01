export interface Draft {
  id: string;
  owner: string;
  title: string;
  stage: string;
  topics: string[];
  field_of_study: string;
  thesis?: string;
  objectives?: string;
  abstract?: string;
  keywords?: string[];
  introduction?: string;
  methodology?: string;
  results?: string;
  discussion?: string;
  conclusion?: string;
  references?: string;
}
