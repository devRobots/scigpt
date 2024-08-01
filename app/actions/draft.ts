"use server";

import { App, Pages } from '@/app/lib/data/consts';
import { saveDraft } from '@/app/lib/firebase/firestore';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Draft } from '@/app/types/draft';

export async function submitDraft(formData: FormData) {
    const title = formData.get('titulo');
    const topics = formData.getAll('topics');
    const field_of_study = formData.get('field_of_study');

    if (!title || !topics || !field_of_study) {
        console.log(title, topics, field_of_study);
        return;
    }

    const session = await auth();
    const owner = session!.user!.email

    const uuid = await saveDraft({
        title, topics, field_of_study, owner, stage: App.Hipothesis
    } as Draft);
    redirect(`${Pages.Writer}/${uuid}/${App.Hipothesis}`);
}
