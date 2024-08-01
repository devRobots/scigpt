import { redirect } from "next/navigation";
import { updateDraft } from "@/app/lib/firebase/firestore";
import { App, Pages } from "@/app/lib/data/consts";

export async function submitObjectives(formData: FormData) {
    'use server';
    const uuid = formData.get('uuid') as string;
    const objectives = formData.get('objectives') as string;
    await updateDraft(uuid, { objectives: objectives, stage: App.Writer });
    redirect(`${Pages.Writer}/${uuid}/${App.Writer}`);
}