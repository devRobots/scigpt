import { prompt } from '@/lib/prompts/thesis';
import { generateText } from 'ai';
import { ollama } from "ollama-ai-provider";

export async function generateThesis(topic: string, fieldsOfStudy: string): Promise<string[]> {
    const seed = Math.floor(Math.random() * 1024);
    const input = `Topic: ${topic}\nField of Study: ${fieldsOfStudy}`;

    const { text } = await generateText({
        model: ollama('llama3'),
        system: prompt,
        prompt: input,
        maxTokens: 400,
        temperature: 0.75,
        frequencyPenalty: 1.0,
        seed: seed,
    });

    const data: ThesisAI = mapThesis(text);
    return data.thesis;
}

function mapThesis(text: string): ThesisAI {
    const start = text.indexOf('{');
    const end = text.indexOf('}');
    const data = text.slice(start, end + 1);
    return JSON.parse(data);
}