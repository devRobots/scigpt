interface StringAPI {
    text: string;
}
interface AuthorAPI {
    name: StringAPI;

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
    primaryPaperLink: {
        url: string;
    }
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