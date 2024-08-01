import { App, Pages } from '@/app/lib/data/consts';
import { updateDraft } from '@/app/lib/firebase/firestore';
import { redirect } from 'next/navigation';

export async function submitThesis(formData: FormData) {
  'use server';
  const uuid = formData.get('uuid') as string;
  const thesis = formData.get('hipotesis') as string;
  await updateDraft(uuid, { thesis: thesis, stage: App.Objectives });
  redirect(`${Pages.Writer}/${uuid}/${App.Objectives}`);
}
