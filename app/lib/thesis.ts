import { prompt } from '@/app/lib/prompts/thesis';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';


export async function generateThesis(topics: string[], fieldsOfStudy: string): Promise<string[]> {
    const seed = Math.floor(Math.random() * 1024);
    const input = `Topic: ${topics.join(", ")}\nField of Study: ${fieldsOfStudy}`;

    const genAI = createGoogleGenerativeAI({ apiKey: "AIzaSyCpYfh9PVWNi4HKY2vP3M-jBEUuM82YKAo" });
    const model = genAI.languageModel("models/gemini-1.5-flash-latest")

    const { text } = await generateText({
        model: model,
        system: prompt,
        prompt: input,
        maxTokens: 400,
        temperature: 0.75,
        frequencyPenalty: 1.0,
        seed: seed
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