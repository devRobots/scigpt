import { prompt as thesisPrompt } from '@/app/lib/prompts/thesis';
import { prompt as objectivesPrompt } from '@/app/lib/prompts/objectives';

export async function fetchAI(input: string, prompt: string) {
    const response = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ input, prompt }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return JSON.parse(data);
}

export async function generateThesis(topics: string[], fieldsOfStudy: string) {
    const input = `Topic: ${topics.join(", ")}\nField of Study: ${fieldsOfStudy}`;
    const response = await fetchAI(input, thesisPrompt);
    return response.thesis;
}

export async function generateObjectives(thesis: string, topics: string[], fieldOfStudy: string) {
    const input = JSON.stringify({ thesis, topics, fieldOfStudy });
    const response = await fetchAI(input, objectivesPrompt);
    return response.objectives;
}