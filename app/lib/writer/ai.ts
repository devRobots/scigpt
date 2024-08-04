import {
  promptDraftItem,
  promptQueries,
  promptTextImprovement
} from '@/app/lib/writer/prompt/builder';
import { Draft } from '@/app/types/draft';

export async function fetchAI(input: string, prompt: string) {
  const base_api = "https://" + process.env.NEXT_PUBLIC_VERCEL_URL;
  const api_endpoint = `${base_api}/api/ai`;
  console.log(api_endpoint);
  const response = await fetch(api_endpoint, {
    method: 'POST',
    body: JSON.stringify({ input, prompt }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return JSON.parse(data);
}

function checkInput(input: any) {
  const keys = Object.keys(input);
  for (const key of keys) {
    if (!input[key]) return false;
  }
  return true;
}

export async function generate(item: string, draft: Draft) {
  const {
    thesis, topics, approach,
    fieldOfStudy, objectives,
    keywords, abstract,
    introduction, methodology,
    results, discussion
  } = draft;

  let input = {};
  if (item === 'thesis') input = {
    topics, approach, fieldOfStudy
  };
  if (item === 'objectives') input = {
    topics, fieldOfStudy, thesis
  };
  if (item === 'keywords') input = {
    topics, approach, fieldOfStudy,
    thesis
  };
  if (item === 'abstract') input = {
    topics, approach, fieldOfStudy,
    thesis, keywords
  };
  if (item === 'introduction') input = {
    fieldOfStudy, thesis, objectives,
    keywords, abstract
  };
  if (item === 'methodology') input = {
    fieldOfStudy, thesis, objectives,
    keywords, abstract, introduction
  };
  if (item === 'results') input = {
    fieldOfStudy, thesis, objectives,
    keywords, abstract, introduction,
    methodology
  };
  if (item === 'discussion') input = {
    fieldOfStudy, thesis, keywords,
    abstract, introduction, results
  };
  if (item === 'conclusion') input = {
    fieldOfStudy, thesis, objectives,
    keywords, abstract, introduction,
    methodology, results, discussion
  };
  if (item === 'references') input = {
    thesis, objectives, abstract,
    introduction, methodology, results
  };

  if (!checkInput(input)) return null;
  const prompt = promptDraftItem(item, input);
  const response = await fetchAI(JSON.stringify(input), prompt);
  return response[item];
}

export async function improveText(text: string) {
  const input = JSON.stringify({ text });
  const improveTextPrompt = promptTextImprovement(input);
  const response = await fetchAI(input, improveTextPrompt);
  return response.improvedText;
}

export async function generateQueries(draft: Draft) {
  const { thesis, topics, fieldOfStudy } = draft;
  const input = JSON.stringify({ thesis, topics, fieldOfStudy });
  const queriesPrompt = promptQueries(input);
  const response = await fetchAI(input, queriesPrompt);
  return response.queries;
}