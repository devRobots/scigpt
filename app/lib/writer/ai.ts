import {
  promptAbstract,
  promptKeywords,
  promptObjectives,
  promptQueries,
  promptTextImprovement,
  promptThesis
} from '@/app/lib/writer/prompt/builder';
import { Draft } from '@/app/types/draft';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export async function fetchAI(input: string, prompt: string) {
  const response = await fetch('http://localhost:3000/api/ai', {
    method: 'POST',
    body: JSON.stringify({ input, prompt }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return JSON.parse(data);
}

export async function generateThesis(draft: Draft) {
  const { topics, field_of_study } = draft;
  const input = JSON.stringify({ topics, field_of_study });
  const thesisPrompt = promptThesis();
  const response = await fetchAI(input, thesisPrompt);
  return response.thesis;
}

export async function generateObjectives(draft: Draft) {
  const { thesis, topics, field_of_study } = draft;
  const input = JSON.stringify({ thesis, topics, field_of_study });
  const objectivesPrompt = promptObjectives();
  const response = await fetchAI(input, objectivesPrompt);
  return response.objectives;
}

export async function generateQueries(draft: Draft) {
  const { thesis, topics, field_of_study } = draft;
  const input = JSON.stringify({ thesis, topics, field_of_study });
  const queriesPrompt = promptQueries();
  const response = await fetchAI(input, queriesPrompt);
  return response.queries;
}

export async function generateKeywords(draft: Draft) {
  const { thesis, topics, field_of_study } = draft;
  const input = JSON.stringify({ thesis, topics, field_of_study });
  const keywordsPrompt = promptKeywords();
  const response = await fetchAI(input, keywordsPrompt);
  return response.keywords;
}

export async function generateAbstract(draft: Draft) {
  const { thesis, topics, field_of_study } = draft;
  const input = JSON.stringify({ thesis, topics, field_of_study });
  const abstractPrompt = promptAbstract();
  const response = await fetchAI(input, abstractPrompt);
  return response.abstract;
}

export async function improveText(text: string) {
  const input = JSON.stringify({ text });
  const improveTextPrompt = promptTextImprovement();
  const response = await fetchAI(input, improveTextPrompt);
  return response.improvedText;
}
