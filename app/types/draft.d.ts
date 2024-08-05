export interface Draft {
  id: string;
  owner: string;
  title: string;
  approach: string;
  stage: string;
  topics: string[];
  fieldOfStudy: string;
  thesis?: string;
  objectives?: string;
  abstract?: {
    es: string;
    en: string;
  };
  keywords?: string[];
  introduction?: string;
  methodology?: string;
  results?: string;
  discussion?: string;
  conclusion?: string;
  references?: string[];
  cache?: DraftCache;
}

export interface DraftCache {
  thesis: string[];
  objectives: string[];
}