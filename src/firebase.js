import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXQBNjEpYcNJ-qz7c_3jxEgcrOgBOd2tA",
  authDomain: "chat-app-d64e5.firebaseapp.com",
  projectId: "chat-app-d64e5",
  storageBucket: "chat-app-d64e5.appspot.com",
  messagingSenderId: "91902149237",
  appId: "1:91902149237:web:f1d63813c976083fc06e3c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

