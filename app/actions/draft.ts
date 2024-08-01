'use server';

import { App, Pages } from '@/app/lib/data/consts';
import { saveDraft } from '@/app/lib/firebase/firestore';
import { Draft } from '@/app/types/draft';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export async function submitDraft(formData: FormData) {
    const title = formData.get('titulo');
    const topics = formData.getAll('topics');
    const fieldOfStudy = formData.get('fieldOfStudy');

    if (!title || !topics || !fieldOfStudy) {
        console.log(title, topics, fieldOfStudy);
        return;
    }

    const session = await auth();
    const owner = session!.user!.email

    const uuid = await saveDraft({
        title, topics, fieldOfStudy, owner, stage: App.Hipothesis
    } as Draft);
    redirect(`${Pages.Writer}/${uuid}/${App.Hipothesis}`);
}
