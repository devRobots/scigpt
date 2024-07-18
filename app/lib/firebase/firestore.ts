import { firebaseConfig } from '@/app/lib/firebase/config';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DRAFT_COLLECTION = 'drafts';

export async function getDraft(uuid: string) {
  const draftRef = doc(db, DRAFT_COLLECTION, uuid);
  const draftSnap = await getDoc(draftRef);

  if (!draftSnap.exists()) {
    throw new Error('Draft not found');
  }
  return draftSnap.data();
}

export async function saveDraft(data: any) {
  const draftCollection = collection(db, DRAFT_COLLECTION);
  const docRef = await addDoc(draftCollection, data);
  return docRef.id;
}

export async function updateDraft(uuid: string, data: any) {
  const draftRef = doc(db, DRAFT_COLLECTION, uuid);
  await updateDoc(draftRef, data);
}
