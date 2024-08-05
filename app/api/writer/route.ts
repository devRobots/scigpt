import { App, Pages } from "@/app/lib/data/consts";
import { saveDraft } from "@/app/lib/firebase/firestore";
import { Draft } from "@/app/types/draft";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const owner = formData.get('owner') as string;
    const title = formData.get('titulo') as string;
    const topics = formData.getAll('temas') as string[];
    const approach = formData.get('context') as string;
    const fieldOfStudy = formData.get('fieldOfStudy') as string;

    if (!title || topics.length == 0 || !approach || !fieldOfStudy) {
        return;
    }

    const uuid = await saveDraft({
        title, topics, approach, fieldOfStudy, owner, stage: App.Hipothesis
    } as Draft);

    const redirect = `${Pages.Writer}/${uuid}/${App.Hipothesis}`;
    return new NextResponse(redirect, { status: 200 });
}