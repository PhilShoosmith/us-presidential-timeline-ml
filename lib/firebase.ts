import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "us-presidents-timeline",
  appId: "1:1051748190259:web:50207ceca649e96aa6bb46",
  apiKey: "AIzaSyBVrkoOqzINsMLt1mzn4VEL6CiYSEm7pi4",
  authDomain: "us-presidents-timeline.firebaseapp.com",
  storageBucket: "us-presidents-timeline.firebasestorage.app",
  messagingSenderId: "1051748190259",
};

export const app = initializeApp(firebaseConfig);

export let db: any = null;
try {
  db = getFirestore(app, "ai-studio-languagesuspresi-d755a2a6-54f6-4e18-9a9b-28e7f1872371");
} catch (e) {
  console.warn("Failed to initialize Firestore (likely due to third-party cookies being blocked in Chrome):", e);
}
