import { prompt } from "@/app/lib/prompts/objectives";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

export default async function generateObjectives(thesis: string, topics: string[], fieldOfStudy: string) {
    const seed = Math.floor(Math.random() * 1024);
    const input = JSON.stringify({ thesis, topics, fieldOfStudy });

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

    const data: any = mapObjectives(text);
    return data.objectives;
}

function mapObjectives(text: string): ThesisAI {
    const start = text.indexOf('{');
    const end = text.indexOf('}');
    const data = text.slice(start, end + 1);
    return JSON.parse(data);
}