interface StringAPI {
  text: string;
}
interface AuthorAPI {
  name: StringAPI;
}
interface PaperLinkAPI {
  url: string;
}

export interface PaperAPIResponse {
  authors: AuthorAPI[];
  citationStats: {
    numCitations: number;
  };
  doiInfo: {
    doiUrl: string;
  };
  fieldsOfStudy: string[];
  paperAbstract: StringAPI;
  primaryPaperLink: PaperLinkAPI;
  alternatePaperLinks: PaperLinkAPI[];
  title: StringAPI;
  year: StringAPI;
}

export interface Paper {
  abstract: string;
  authors: string[];
  citationCount: number;
  fieldsOfStudy: string[];
  title: string;
  url: string;
  year: string;
}
