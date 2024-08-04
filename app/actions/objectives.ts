'use server';

import { App, Pages } from '@/app/lib/data/consts';
import { updateDraft } from '@/app/lib/firebase/firestore';
import { redirect } from 'next/navigation';

export async function submitObjectives(formData: FormData) {
  const uuid = formData.get('uuid') as string;
  const objectives = formData.getAll('objetivo') as string[];

  if (objectives.length < 3) return;

  await updateDraft(uuid, { objectives: objectives, stage: App.Writer });
  redirect(`${Pages.Writer}/${uuid}/${App.Writer}`);
}
