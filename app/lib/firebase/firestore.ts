import { db } from "@/app/lib/firebase/core";
import { Draft } from "@/app/types/draft";
import { doc, collection, getDoc, updateDoc, addDoc, query, where, getDocs } from "@firebase/firestore";

const DRAFT_COLLECTION = 'draft';

export async function getDraft(uuid: string) {
    const docRef = doc(db, DRAFT_COLLECTION, uuid);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Draft;
}

export async function saveDraft(draft: Draft) {
    const docRef = await addDoc(collection(db, DRAFT_COLLECTION), draft);
    return docRef.id;
}

export async function updateDraft(uuid: string, data: any) {
    const docRef = doc(db, DRAFT_COLLECTION, uuid);
    await updateDoc(docRef, data);
}

export async function getDraftsByOwner() {
    const owner = "ysrosast@gmail.com";
    const draftRef = collection(db, DRAFT_COLLECTION);
    const q = query(draftRef, where("owner", "==", owner));
    const querySnapshot = await getDocs(q);
    const drafts = querySnapshot.docs.map(doc => doc.data() as Draft);
    return drafts || [];
}
