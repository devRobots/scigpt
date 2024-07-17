import { Paper, PaperAPIResponse } from "@/types/paper";

const SEMANTIC_SCHOLAR_API_URL: string = "https://www.semanticscholar.org/api/1/search";
const SCIHUB_URL: string = "https://sci-hub.st";

export async function fecthPapers(query: string, page: number = 1): Promise<PaperAPIResponse[]> {
    const raw = await fetch(SEMANTIC_SCHOLAR_API_URL,
        {
            cache: 'force-cache',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "queryString": query,
                "page": page,
                "pageSize": 10,
                "sort": "relevance",
                "authors": [],
                "coAuthors": [],
                "venues": [],
                "requireViewablePdf": true,
                "hydrateWithDdb": true,
                "includeTldrs": true,
                "performTitleMatch": true,
                "includeBadges": true,
                "getQuerySuggestions": false,
                "cues": [
                    "CitedByLibraryPaperCue",
                    "CitesYourPaperCue",
                    "CitesLibraryPaperCue"
                ],
                "includePdfVisibility": true
            })
        }
    );
    const data = await raw.json();
    return data.results;
}

export async function searchPapers(query: string, limit: number = 10): Promise<Paper[]> {
    const results: Paper[] = [];
    let page: number = 1;

    while (results.length < limit) {
        const data = await fecthPapers(query, page);
        if (data.length === 0) break;
        data.forEach((raw) => {
            const paper = processPaper(raw);
            if (paper.url === "" || paper.abstract === "") return;
            results.push(paper);
        });
        page++;
    }

    return results;
}

async function getPaperUrlByDOI(doi: string): Promise<string> {
    const response = await fetch(SCIHUB_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/form-data"
            },
            body: new URLSearchParams({ "request": doi })
        }
    );
    const data = await response.text();

    if (data.includes("not found")) {
        return Promise.reject("Paper not found");
    }

    return SCIHUB_URL + data.match(/\/downloads\/.*\.pdf/);
}

function processPaper(raw: PaperAPIResponse): Paper {
    let url: string | null = null;
    let inestable: boolean = false;

    const primaryPaperUrl = raw.primaryPaperLink ? raw.primaryPaperLink.url : '';
    url = isPdfUrl(primaryPaperUrl) ? primaryPaperUrl : null;

    const alternatePaperUrl = raw.alternatePaperLinks ?? [];
    for (let i = 0; i < alternatePaperUrl.length; i++) {
        if (url) break;
        url = isPdfUrl(alternatePaperUrl[i].url) ? alternatePaperUrl[i].url : null;
    }

    inestable = url ? false : true;
    url = url || (isUrlDOI(primaryPaperUrl) ? primaryPaperUrl : null);
    url = url || (raw.doiInfo ? raw.doiInfo.doiUrl : '');


    const paper = {
        abstract: raw.paperAbstract.text,
        authors: raw.authors.map((author: any) => author[0].name),
        citationCount: raw.citationStats.numCitations,
        fieldsOfStudy: raw.fieldsOfStudy,
        title: raw.title.text,
        url: url,
        year: raw.year.text
    }

    return paper;
}

function isUrlDOI(url: string): boolean {
    return url.match(/10\.[0-9]{4,}\/["&\'<>\S]+/) !== null;
}

function isPdfUrl(url: string): boolean {
    return url.match(/\.pdf$/) !== null;
}

export function tldr(data: string | string[], limit: number = 100): string {
    return Array.isArray(data) ? tldrArray(data, limit) : tldrText(data, limit)
}

function tldrText(data: string, limit: number = 300): string {
    return data.length > limit ? data.slice(0, limit) + "..." : data
}

function tldrArray(data: string[], limit: number = 3): string {
    return data.length > limit ? data.slice(0, limit).join(", ") + "..." : data.join(", ");
}
