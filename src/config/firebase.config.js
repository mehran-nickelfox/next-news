import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "news-app-10d10.appspot.com",
  messagingSenderId: "370211044262",
  appId: "1:370211044262:web:be32cfe66b888ad43eed67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
