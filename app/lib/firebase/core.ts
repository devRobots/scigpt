import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-mQrwlrI8COFd75Cyr3oT3E85D2Z6VR0',
  authDomain: 'scigpt-services.firebaseapp.com',
  projectId: 'scigpt-services',
  storageBucket: 'scigpt-services.appspot.com',
  messagingSenderId: '575243544469',
  appId: '1:575243544469:web:a8a01a1cc6d14ab84ef89c'
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
