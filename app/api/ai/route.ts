import { auth } from '@/auth';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const session = auth();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { input, prompt } = await request.json();
  const seed = Math.floor(Math.random() * 1024);
  const model = google('models/gemini-1.5-flash-latest');

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
  return NextResponse.json(data);
}
