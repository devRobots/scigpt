import { redirect } from "next/navigation";
import { updateDraft } from "@/app/lib/firebase/firestore";
import { App, Pages } from "@/app/lib/data/consts";

export async function submitThesis(formData: FormData) {
    'use server';
    const uuid = formData.get('uuid') as string;
    const thesis = formData.get('hipotesis') as string;
    await updateDraft(uuid, { thesis: thesis, stage: App.Objectives });
    redirect(`${Pages.Writer}/${uuid}/${App.Objectives}`);
}