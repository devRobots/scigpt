import { firebaseConfig } from '@/app/lib/firebase/config';
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, signInWithPopup, User } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function mapUserFromFirebaseAuth(user: User) {
    const { displayName, email, photoURL } = user
    return {
        displayName,
        email,
        photoURL,
    }
}

export function onAuthStateChanged(onChange: (user: any) => void) {
    return auth.onAuthStateChanged((user) => {
        const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null;
        onChange(normalizedUser);
    });
}

export function loginWithGithub() {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
}

export async function signOut() {
    return await auth.signOut();
}