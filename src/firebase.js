import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmmvZm3RnO3oztn0ROmX6hh4-srx_x678",
  authDomain: "chat-box-87856.firebaseapp.com",
  projectId: "chat-box-87856",
  storageBucket: "chat-box-87856.appspot.com",
  messagingSenderId: "393015551504",
  appId: "1:393015551504:web:945494790a1c1d78618c95"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()