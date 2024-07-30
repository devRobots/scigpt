import { google } from '@ai-sdk/google';
import { generateText } from 'ai';


export async function POST(request: Request) {
    const { data: session, error } = { data: null, error: null };
    if (!session || error) {
        return new Response('Unauthorized', { status: 401 });
    }

    const { input, prompt } = await request.json();
    const seed = Math.floor(Math.random() * 1024);
    const model = google("models/gemini-1.5-flash-latest");

    const { text } = await generateText({
        model: model,
        system: prompt,
        prompt: input,
        temperature: 0.75,
        frequencyPenalty: 1.0,
        maxRetries: 3,
        seed: seed
    });

    const dataStart = text.indexOf('{');
    const dataEnd = text.lastIndexOf('}');
    const data = text.slice(dataStart, dataEnd + 1);
    return Response.json(data);
}