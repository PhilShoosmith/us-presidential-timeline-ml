import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  projectId: "us-presidents-timeline",
  appId: "1:1051748190259:web:50207ceca649e96aa6bb46",
  apiKey: "AIzaSyBVrkoOqzINsMLt1mzn4VEL6CiYSEm7pi4",
  authDomain: "us-presidents-timeline.firebaseapp.com",
  storageBucket: "us-presidents-timeline.firebasestorage.app",
  messagingSenderId: "1051748190259",
};

export let app: FirebaseApp | null = null;
try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  console.warn("Failed to initialize Firebase app:", e);
}

export let db: Firestore | null = null;
if (app) {
  try {
    db = getFirestore(app, "ai-studio-remix7languagesu-e094a921-892c-481a-a8bb-d288cef022ad");
  } catch (e) {
    try {
      db = getFirestore(app);
    } catch (err) {
      console.warn("Failed to initialize Firestore:", err);
    }
  }
}
