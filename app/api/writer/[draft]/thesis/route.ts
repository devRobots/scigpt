import { App } from "@/app/lib/data/consts";
import { getDraft, updateDraft } from "@/app/lib/firebase/firestore";
import { extractJSON } from "@/app/lib/utils";
import { promptDraftItem } from "@/app/lib/writer/prompt/builder";
import { Draft } from "@/app/types/draft";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { draft: string } }) {
    const uuid = params.draft;
    const draft = await getDraft(uuid);
    const { topics, approach, fieldOfStudy, cache } = draft;
    if (cache?.thesis) return NextResponse.json(cache);

    const input = { topics, approach, fieldOfStudy };
    const prompt = promptDraftItem("thesis", input);

    const seed = Math.floor(Math.random() * 1024);
    const model = google('models/gemini-1.5-flash-latest');

    const { text } = await generateText({
        model: model,
        system: prompt,
        prompt: JSON.stringify(input),
        temperature: 0.75,
        frequencyPenalty: 1.0,
        maxRetries: 3,
        seed: seed
    });

    const data: Draft = JSON.parse(extractJSON(text));
    await updateDraft(uuid, { cache: { ...cache, thesis: data.thesis } });

    return NextResponse.json(data);
}

export async function POST(request: NextRequest, { params }: { params: { draft: string } }) {
    const uuid = params.draft;

    const formData = await request.formData();
    const thesis = formData.get('hipotesis') as string;
    if (!thesis) return;

    await updateDraft(uuid, { thesis: thesis, stage: App.Objectives });
    return new NextResponse("", { status: 200 });
}