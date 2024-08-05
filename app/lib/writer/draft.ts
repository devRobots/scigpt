import { getDraft } from '@/app/lib/firebase/firestore';
import { extractJSON } from '@/app/lib/utils';
import {
  promptDraftItem,
  promptTextImprovement
} from '@/app/lib/writer/prompt/builder';
import { Draft } from '@/app/types/draft';
import saveAs from 'file-saver';

const HTTP = 'https://';
const API_URL = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

export async function fetchAI(input: string, prompt: string) {
  const request = {
    method: 'POST',
    body: JSON.stringify({ input, prompt }),
    headers: { 'Content-Type': 'application/json' },
    timeout: 30000
  };
  const response = await fetch(`${HTTP}${API_URL}/api/ai`, request);
  const raw = await response.text();
  const data = JSON.parse(extractJSON(raw));
  return data;
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

export async function regenerate(item: string, draft_id: string) {
  const draft = await getDraft(draft_id);
  const generated = await generate(item, draft);
  return generated;
}

export async function newDraft(formData: FormData) {
  const api_endpoint = `${HTTP}${API_URL}/api/writer`;
  const request = { method: 'POST', body: formData };
  const response = await fetch(api_endpoint, request);
  return response;
}

export async function submitThesis(draft_id: string, formData: FormData) {
  const api_endpoint = `${HTTP}${API_URL}/api/writer/${draft_id}/thesis`;
  const request = { method: 'POST', body: formData };
  const response = await fetch(api_endpoint, request);
  return response;
}

export async function generateThesis(draft_id: string) {
  const api_endpoint = `${HTTP}${API_URL}/api/writer/${draft_id}/thesis`;
  const response = await fetch(api_endpoint, { cache: 'force-cache' });
  const data = await response.json();
  return data.thesis;
}

export async function submitObjectives(draft_id: string, formData: FormData) {
  const api_endpoint = `${HTTP}${API_URL}/api/writer/${draft_id}/objectives`;
  const request = { method: 'POST', body: formData };
  const response = await fetch(api_endpoint, request);
  return response;
}

export async function generateObjectives(draft_id: string) {
  const api_endpoint = `${HTTP}${API_URL}/api/writer/${draft_id}/objectives`;
  const response = await fetch(api_endpoint, { cache: 'force-cache' });
  const data = await response.json();
  return data.objectives;
}

export async function exportDraft(draft_id: string) {
  const res = await fetch(`${HTTP}${API_URL}/api/writer/${draft_id}/export`);
  const blob = await res.blob();
  saveAs(blob, `redaccion-${draft_id}.docx`);
}

export async function improveText(context: string, examples: string[], text: string) {
  const prompt = promptTextImprovement(context, text, examples);
  const request = {
    method: 'POST',
    body: JSON.stringify({ input: text, prompt })
  };
  const response = await fetch(`${HTTP}${API_URL}/api/ai`, request);
  const data = await response.text();
  return data.trim();
}
