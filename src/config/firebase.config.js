import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_pHazQBvQ65W7onDwFIfJo0q2Wf8utE0",
  authDomain: "expense-tracker-2dd79.firebaseapp.com",
  projectId: "expense-tracker-2dd79",
  storageBucket: "expense-tracker-2dd79.appspot.com",
  messagingSenderId: "1090931510076",
  appId: "1:1090931510076:web:fecc690f576dca0213ec39"
};

// Initialize Firebase :
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
