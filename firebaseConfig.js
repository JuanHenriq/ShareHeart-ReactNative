import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwUwIWmohfr91uIziK_kTJY750hAd5Z3o",
  authDomain: "shareheart-73b1a.firebaseapp.com",
  projectId: "shareheart-73b1a",
  storageBucket: "shareheart-73b1a.appspot.com",
  messagingSenderId: "328113688650",
  appId: "1:328113688650:web:9d9eea060bf0dfb50dd6b3",
  measurementId: "G-M5NG9DS4X8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
  