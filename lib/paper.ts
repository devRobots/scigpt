import { Paper, PaperAPIResponse } from "@/types/paper";

const SEMANTIC_SCHOLAR_API_URL: string = "https://www.semanticscholar.org/api/1/search";
const SCIHUB_URL: string = "https://sci-hub.st";

export async function searchPapers(query: string) {
    const results: Array<{}> = [];

    const response = await fetch(SEMANTIC_SCHOLAR_API_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "queryString": query,
                "page": 1,
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
    const data = await response.json();
    await data.results.forEach(async (paperRaw: any) => {
        const paper = await processPaper(paperRaw);
        if (paper.url === "" || paper.abstract === "") {
            return;
        }
        results.push(paper);
    });

    console.log(results);

    return data;
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

async function processPaper(paperRaw: PaperAPIResponse): Promise<Paper> {
    let url: string | null = null;
    let inestable: boolean = false;

    const primaryPaperUrl = paperRaw.primaryPaperLink.url;
    url = isPdfUrl(primaryPaperUrl) ? primaryPaperUrl : null;

    inestable = url ? false : true;
    url = url ?? isUrlDOI(primaryPaperUrl) ? primaryPaperUrl : paperRaw.doiInfo.doiUrl;

    const paper = {
        abstract: paperRaw.paperAbstract.text,
        authors: paperRaw.authors.map((author: any) => author[0].name),
        citationCount: paperRaw.citationStats.numCitations,
        fieldsOfStudy: paperRaw.fieldsOfStudy,
        title: paperRaw.title.text,
        url: url,
        year: paperRaw.year.text
    }

    return paper;
}

function isUrlDOI(url: string): boolean {
    return url.match(/10\.[0-9]{4,}\/["&\'<>\S]+/) !== null;
}

function isPdfUrl(url: string): boolean {
    return url.match(/\.pdf$/) !== null;
}