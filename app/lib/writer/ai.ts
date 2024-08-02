import {
  promptAbstract,
  promptKeywords,
  promptObjectives,
  promptQueries,
  promptTextImprovement,
  promptThesis
} from '@/app/lib/writer/prompt/builder';
import { Draft } from '@/app/types/draft';

export async function fetchAI(input: string, prompt: string) {
  const response = await fetch("https://scigpt.vercel.app/api/ai", {
    method: 'POST',
    body: JSON.stringify({ input, prompt }),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await response.json();
  return JSON.parse(data);
}

export async function generateThesis(draft: Draft) {
  const { topics, fieldOfStudy } = draft;
  const input = JSON.stringify({ topics, fieldOfStudy });
  const thesisPrompt = promptThesis();
  const response = await fetchAI(input, thesisPrompt);
  return response.thesis;
}

export async function generateObjectives(draft: Draft) {
  const { thesis, topics, fieldOfStudy } = draft;
  const input = JSON.stringify({ thesis, topics, fieldOfStudy });
  const objectivesPrompt = promptObjectives();
  const response = await fetchAI(input, objectivesPrompt);
  return response.objectives;
}

export async function generateQueries(draft: Draft) {
  const { thesis, topics, fieldOfStudy } = draft;
  const input = JSON.stringify({ thesis, topics, fieldOfStudy });
  const queriesPrompt = promptQueries();
  const response = await fetchAI(input, queriesPrompt);
  return response.queries;
}

export async function generateKeywords(draft: Draft) {
  const { thesis, topics, fieldOfStudy } = draft;
  const input = JSON.stringify({ thesis, topics, fieldOfStudy });
  const keywordsPrompt = promptKeywords();
  const response = await fetchAI(input, keywordsPrompt);
  return response.keywords;
}

export async function generateAbstract(draft: Draft) {
  const { thesis, topics, fieldOfStudy } = draft;
  const input = JSON.stringify({ thesis, topics, fieldOfStudy });
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
