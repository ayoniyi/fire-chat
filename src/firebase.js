import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7QGVWzrgQRNXfdTZk-shRREJHbxmJvfs",
  authDomain: "chat-01-6279e.firebaseapp.com",
  projectId: "chat-01-6279e",
  storageBucket: "chat-01-6279e.appspot.com",
  messagingSenderId: "208606616970",
  appId: "1:208606616970:web:f2240ba7985694bdae3c73",
  measurementId: "G-3M53GKMQSB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
