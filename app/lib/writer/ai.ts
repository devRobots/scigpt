import { promptObjectives, promptSubstantiation, promptTextImprovement, promptThesis } from '@/app/lib/writer/prompt/builder';

export async function fetchAI(input: string, prompt: string) {
    const response = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ input, prompt }),
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return JSON.parse(data);
}

export async function generateThesis(topics: string[], fieldsOfStudy: string) {
    const input = JSON.stringify({ topics, fieldsOfStudy });
    const thesisPrompt = promptThesis();
    const response = await fetchAI(input, thesisPrompt);
    return response.thesis;
}

export async function generateObjectives(thesis: string, topics: string[], fieldOfStudy: string) {
    const input = JSON.stringify({ thesis, topics, fieldOfStudy });
    const objectivesPrompt = promptObjectives();
    const response = await fetchAI(input, objectivesPrompt);
    return response.objectives;
}

export async function generateSubstantiation(thesis: string, topics: string[], fieldOfStudy: string) {
    const input = JSON.stringify({ thesis, topics, fieldOfStudy });
    const substantiationPrompt = promptSubstantiation();
    const response = await fetchAI(input, substantiationPrompt);
    return response.substantiation;
}

export async function improveText(text: string) {
    const input = JSON.stringify({ text });
    const improveTextPrompt = promptTextImprovement();
    const response = await fetchAI(input, improveTextPrompt);
    return response.improvedText;
}