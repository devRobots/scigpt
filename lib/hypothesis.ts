import { prompt } from '@/prompts/hypothesis';
import { generateText } from 'ai';
import { ollama } from "ollama-ai-provider";

export async function generateHypothesis(topic: string, fieldsOfStudy: string): Promise<string[]> {
    const input = `Topic: ${topic}\nField of Study: ${fieldsOfStudy}`;

    const modelSettings = {
        model: ollama('llama3'),
        system: prompt,
        prompt: input,
        maxTokens: 400,
        temperature: 0.75,
        frequencyPenalty: 1.0,
        seed: Math.floor(Math.random() * 1024)
    } as const;

    const { text } = await generateText(modelSettings);
    const raw_data = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
    const data = JSON.parse(raw_data);
    return data.hypothesis;
}
