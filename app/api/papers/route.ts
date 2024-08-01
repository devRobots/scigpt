import { NextRequest, NextResponse } from 'next/server';

const SEMANTIC_SCHOLAR_API_URL: string =
  'https://www.semanticscholar.org/api/1/search';

export async function POST(request: NextRequest) {
  const { query, page } = await request.json();
  const raw = await fetch(SEMANTIC_SCHOLAR_API_URL, {
    cache: 'force-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      queryString: query,
      page: page,
      pageSize: 10,
      sort: 'relevance',
      authors: [],
      coAuthors: [],
      venues: [],
      requireViewablePdf: true,
      hydrateWithDdb: true,
      includeTldrs: true,
      performTitleMatch: true,
      includeBadges: true,
      getQuerySuggestions: false,
      cues: [
        'CitedByLibraryPaperCue',
        'CitesYourPaperCue',
        'CitesLibraryPaperCue'
      ],
      includePdfVisibility: true
    })
  });
  const data = await raw.json();
  return NextResponse.json(data.results);
}
