import { App, Pages } from "@/app/lib/data/consts";
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
    const { topics, approach, fieldOfStudy, thesis, cache } = draft;
    if (cache?.objectives) return NextResponse.json(cache);

    const input = { topics, approach, fieldOfStudy, thesis };
    const prompt = promptDraftItem("objectives", input);

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
    await updateDraft(uuid, {
        cache: { ...cache, objectives: data.objectives }
    });

    return NextResponse.json(data);
}

export async function POST(request: NextRequest, { params }: { params: { draft: string } }) {
    const uuid = params.draft;

    const formData = await request.formData();
    const objectives = formData.getAll('objetivo') as string[];

    if (objectives.length < 3) return;

    await updateDraft(uuid, { objectives: objectives, stage: App.Writer });

    const redirect = `${Pages.Writer}/${uuid}/${App.Writer}`;
    return new NextResponse(redirect, { status: 200 });
}